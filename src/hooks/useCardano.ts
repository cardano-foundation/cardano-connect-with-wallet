import { useState, useEffect, useCallback } from 'react';
import { NetworkType } from '../global/types';
import useLocalStorage from './useLocalStorage';
import {
  decodeHexAddress,
  EnablementFailedError,
  ExtensionNotInjectedError,
  InjectWalletListener,
  Observable,
  WalletExtensionNotFoundError,
  WalletNotCip30CompatibleError,
  WrongNetworkTypeError,
} from '../utils';
import { decode as decodeCbor } from 'cborg';
import { Buffer } from 'buffer';

const enabledObserver = new Observable<boolean>(false);
const isConnectingObserver = new Observable<boolean>(false);
const enabledWalletObserver = new Observable<string | null>(null);
const stakeAddressObserver = new Observable<string | null>(null);
const installedWalletExtensionsObserver = new Observable<Array<string>>([]);
const usedAddressesObserver = new Observable<Array<string>>([]);
const unusedAddressesObserver = new Observable<Array<string>>([]);
const accountBalanceObserver = new Observable<number>(0);

function useCardano(props?: { limitNetwork?: NetworkType }) {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabledObserver.get());
  const [isConnecting, setIsConnecting] = useState<boolean>(
    isConnectingObserver.get()
  );
  const [enabledWallet, setEnabledWallet] = useState<string | null>(
    enabledWalletObserver.get()
  );
  const [stakeAddress, setStakeAddress] = useState<string | null>(
    stakeAddressObserver.get()
  );
  const [usedAddresses, setUsedAddresses] = useState<Array<string>>(
    usedAddressesObserver.get()
  );
  const [unusedAddresses, setUnusedAddresses] = useState<Array<string>>(
    unusedAddressesObserver.get()
  );
  const [accountBalance, setAccountBalance] = useState<number>(
    accountBalanceObserver.get()
  );
  const [installedExtensions, setInstalledExtensions] = useState<Array<string>>(
    installedWalletExtensionsObserver.get()
  );
  const [isConnected, setIsConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );
  const [lastConnectedWallet, setLastConnectedWallet] = useLocalStorage(
    'cf-last-connected-wallet',
    ''
  );

  const limitNetwork = props?.limitNetwork;

  useEffect(() => {
    enabledObserver.subscribe(setIsEnabled);
    isConnectingObserver.subscribe(setIsConnecting);
    enabledWalletObserver.subscribe(setEnabledWallet);
    stakeAddressObserver.subscribe(setStakeAddress);
    usedAddressesObserver.subscribe(setUsedAddresses);
    unusedAddressesObserver.subscribe(setUnusedAddresses);
    installedWalletExtensionsObserver.subscribe(setInstalledExtensions);
    accountBalanceObserver.subscribe(setAccountBalance);

    return () => {
      enabledObserver.unsubscribe(setIsEnabled);
      isConnectingObserver.unsubscribe(setIsConnecting);
      enabledWalletObserver.unsubscribe(setEnabledWallet);
      stakeAddressObserver.unsubscribe(setStakeAddress);
      usedAddressesObserver.unsubscribe(setUsedAddresses);
      unusedAddressesObserver.unsubscribe(setUnusedAddresses);
      installedWalletExtensionsObserver.unsubscribe(setInstalledExtensions);
      accountBalanceObserver.unsubscribe(setAccountBalance);
    };
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    window.dispatchEvent(new Event('storage'));
    enabledObserver.set(false);
    enabledWalletObserver.set(null);
    stakeAddressObserver.set(null);
    usedAddressesObserver.set([]);
    unusedAddressesObserver.set([]);
    accountBalanceObserver.set(0);
  }, []);

  const connectToWallet = useCallback(
    async (walletName: string, retries = 20, retryIntervalInMs = 25) => {
      const checkWalletAvailable = (
        walletName: string,
        retries: number,
        retryIntervalInMs: number
      ) =>
        new Promise((resolve: (promise?: Promise<any>) => any, reject) => {
          const cardano = (window as any).cardano;
          if (
            typeof cardano === 'undefined' ||
            typeof cardano[walletName] === 'undefined'
          ) {
            if (retries > 0) {
              setTimeout(
                () =>
                  resolve(
                    checkWalletAvailable(
                      walletName,
                      retries - 1,
                      retryIntervalInMs
                    )
                  ),
                retryIntervalInMs
              );
            } else {
              reject();
            }
          } else {
            resolve();
          }
        });

      const establishConnection = async () => {
        try {
          await checkWalletAvailable(walletName, retries, retryIntervalInMs);
        } catch (error) {
          throw new ExtensionNotInjectedError(walletName);
        }
        const cardano = (window as any).cardano;

        if (
          typeof cardano[walletName] !== 'undefined' &&
          typeof cardano[walletName].isEnabled === 'function'
        ) {
          const api = await cardano[walletName].enable();

          if (typeof api.getRewardAddresses === 'function') {
            const hexAddresses = await api.getRewardAddresses();

            if (hexAddresses && hexAddresses.length > 0) {
              try {
                const bech32Address = decodeHexAddress(hexAddresses[0]);

                let networkType = NetworkType.MAINNET;
                if (bech32Address.startsWith('stake_test')) {
                  networkType = NetworkType.TESTNET;
                }

                if (limitNetwork && limitNetwork !== networkType) {
                  throw new WrongNetworkTypeError(networkType, limitNetwork);
                }

                const setValuesAsync = async () => {
                  if (typeof api.getUsedAddresses === 'function') {
                    const usedAddresses = await api.getUsedAddresses();
                    usedAddressesObserver.set(
                      usedAddresses.map((address: string) =>
                        decodeHexAddress(address)
                      )
                    );
                  }
                  if (typeof api.getUnusedAddresses === 'function') {
                    const unusedAddresses = await api.getUnusedAddresses();
                    unusedAddressesObserver.set(
                      unusedAddresses.map((address: string) =>
                        decodeHexAddress(address)
                      )
                    );
                  }

                  if (typeof api.getBalance === 'function') {
                    const cborBalance = await api.getBalance();
                    const balance = decodeCbor(Buffer.from(cborBalance, 'hex'));
                    accountBalanceObserver.set(balance / 1000000);
                  }
                };

                // without await otherwise the main process will be blocked for a few seconds
                setValuesAsync();

                stakeAddressObserver.set(bech32Address);
                enabledWalletObserver.set(walletName);
                enabledObserver.set(true);

                if (walletName === 'typhoncip30') {
                  setLastConnectedWallet('typhon');
                } else {
                  setLastConnectedWallet(walletName);
                }
                window.dispatchEvent(new Event('storage'));
              } catch (error) {
                throw error;
              }
            }
          } else {
            throw new WalletNotCip30CompatibleError(walletName);
          }
        }
      };
      await establishConnection();
    },
    [limitNetwork]
  );

  const checkEnabled = useCallback(async () => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return;
    }

    if (lastConnectedWallet !== '') {
      if (lastConnectedWallet === 'typhon') {
        await connectToWallet('typhoncip30');
      } else {
        await connectToWallet(lastConnectedWallet);
      }
    }
  }, [lastConnectedWallet]);

  const signMessage = useCallback(
    async (
      message: string,
      onSignMessage?: (signature: string, key: string | undefined) => void,
      onSignError?: (error: Error) => void
    ) => {
      if (!isEnabled || !enabledWallet) {
        return;
      }
      const cardano = (window as any).cardano;
      if (typeof message === 'undefined') {
        return;
      }

      const api = await cardano[
        enabledWallet === 'typhon' ? 'typhoncip30' : enabledWallet
      ].enable();
      if (typeof api.getRewardAddresses === 'function') {
        const hexAddresses = await api.getRewardAddresses();

        let networkType = NetworkType.MAINNET;
        if (stakeAddress && stakeAddress.startsWith('stake_test')) {
          networkType = NetworkType.TESTNET;
        }

        if (limitNetwork && limitNetwork !== networkType) {
          const error = new WrongNetworkTypeError(networkType, limitNetwork);
          if (typeof onSignError === 'function') {
            onSignError(error);
          } else {
            console.warn(error);
          }
          return;
        }

        if (hexAddresses.length > 0) {
          const hexAddress = hexAddresses[0];
          let hexMessage = '';

          for (var i = 0, l = message.length; i < l; i++) {
            hexMessage += message.charCodeAt(i).toString(16);
          }

          try {
            const dataSignature = await api.signData(hexAddress, hexMessage);

            if (typeof onSignMessage === 'function') {
              const { signature, key } = dataSignature;
              onSignMessage(signature, key);
            }
          } catch (error) {
            if (typeof onSignError === 'function') {
              onSignError(error as Error);
            } else {
              console.warn(error);
            }
          }
        }
      }
    },
    [isEnabled, enabledWallet, limitNetwork]
  );

  const connect = useCallback(
    async (
      walletName: string,
      onConnect?: () => void | undefined,
      onError?: (code: Error) => void
    ) => {
      if (isConnecting) return;

      isConnectingObserver.set(true);
      const cardano = (window as any).cardano;
      walletName = walletName.toLowerCase();

      if (typeof cardano !== 'undefined') {
        if (typeof cardano[walletName] !== 'undefined') {
          try {
            if (walletName === 'typhon') {
              walletName = 'typhoncip30';
            }

            await connectToWallet(walletName);
            if (typeof onConnect === 'function') {
              setIsConnected(true);
              window.dispatchEvent(new Event('storage'));
              onConnect();
            }
            isConnectingObserver.set(false);
          } catch (error) {
            isConnectingObserver.set(false);
            if (typeof onError === 'function') {
              if (
                error instanceof WalletNotCip30CompatibleError ||
                error instanceof WrongNetworkTypeError
              ) {
                onError(error);
              } else {
                onError(new EnablementFailedError(walletName));
              }
            } else {
              console.error(error);
            }
          }
        } else {
          isConnectingObserver.set(false);
          if (typeof onError === 'function') {
            onError(new WalletExtensionNotFoundError(walletName));
          }
        }
      } else {
        isConnectingObserver.set(false);
        if (typeof onError === 'function') {
          onError(new WalletExtensionNotFoundError(walletName));
        }
      }
    },
    [connectToWallet, isConnecting]
  );

  useEffect(() => {
    if (isConnected) {
      checkEnabled();
    }
  }, [isConnected]);

  const getInstalledWalletExtensions: (
    supportedWallets?: Array<String>
  ) => Array<string> = (supportedWallets) => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return [];
    }

    if (supportedWallets) {
      return Object.keys(cardano)
        .map((walletExtension) => walletExtension.toLowerCase())
        .filter((walletExtension) =>
          supportedWallets
            .map((walletName) => walletName.toLowerCase())
            .includes(walletExtension)
        );
    } else {
      return Object.keys(cardano)
        .filter(
          (walletExtension) =>
            typeof cardano[walletExtension].enable === 'function'
        )
        .map((walletExtension) => walletExtension.toLowerCase());
    }
  };

  useEffect(() => {
    const injectWalletListener = new InjectWalletListener(() => {
      installedWalletExtensionsObserver.set(getInstalledWalletExtensions());
    });
    injectWalletListener.start();

    return () => {
      injectWalletListener.stop();
    };
  }, []);

  return {
    isEnabled,
    isConnected,
    isConnecting,
    enabledWallet,
    stakeAddress,
    usedAddresses,
    unusedAddresses,
    signMessage,
    connect,
    disconnect,
    installedExtensions,
    accountBalance,
  };
}

export default useCardano;
