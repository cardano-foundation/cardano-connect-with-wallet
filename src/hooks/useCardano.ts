import { useState, useEffect, useCallback } from 'react';
import { ConnectWalletError } from '../global/types';
import useLocalStorage from './useLocalStorage';
import { decodeHexAddress, Observable } from '../utils';

const enabledObserver = new Observable<boolean>(false);
const enabledWalletObserver = new Observable<string | null>(null);
const stakeAddressObserver = new Observable<string | null>(null);
const installedWalletExtensionsObserver = new Observable<Array<string>>([]);

function useCardano() {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabledObserver.get());
  const [enabledWallet, setEnabledWallet] = useState<string | null>(
    enabledWalletObserver.get()
  );
  const [stakeAddress, setStakeAddress] = useState<string | null>(
    stakeAddressObserver.get()
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

  useEffect(() => {
    enabledObserver.subscribe(setIsEnabled);
    enabledWalletObserver.subscribe(setEnabledWallet);
    stakeAddressObserver.subscribe(setStakeAddress);
    installedWalletExtensionsObserver.subscribe(setInstalledExtensions);

    return () => {
      enabledObserver.unsubscribe(setIsEnabled);
      enabledWalletObserver.unsubscribe(setEnabledWallet);
      stakeAddressObserver.unsubscribe(setStakeAddress);
      installedWalletExtensionsObserver.unsubscribe(setInstalledExtensions);
    };
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    window.dispatchEvent(new Event('storage'));
    enabledObserver.set(false);
    enabledWalletObserver.set(null);
    stakeAddressObserver.set(null);
  }, []);

  const connectToWallet = useCallback(async (walletName: string) => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return;
    }

    if (typeof cardano[walletName].isEnabled === 'function') {
      const api = await cardano[walletName].enable();

      if (typeof api.getRewardAddresses === 'function') {
        const hexAddresses = await api.getRewardAddresses();

        if (hexAddresses && hexAddresses.length > 0) {
          try {
            const bech32Address = decodeHexAddress(hexAddresses[0]);

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
            console.error(error);
          }
        }
      }
    }
  }, []);

  const checkEnabled = useCallback(async () => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return;
    }

    if (lastConnectedWallet !== '') {
      if (lastConnectedWallet === 'typhon') {
        connectToWallet('typhoncip30');
      } else {
        connectToWallet(lastConnectedWallet);
      }
    }
  }, [lastConnectedWallet]);

  const signMessage = useCallback(
    async (
      message: string,
      onSignMessage:
        | ((signature: string, key: string | undefined) => void)
        | undefined
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

        if (hexAddresses.length > 0) {
          const hexAddress = hexAddresses[0];
          let hexMessage = '';

          for (var i = 0, l = message.length; i < l; i++) {
            hexMessage += message.charCodeAt(i).toString(16);
          }

          try {
            const dataSignature = await api.signData(hexAddress, hexMessage);

            if (typeof onSignMessage === 'function') {
              // flint does currently not return a valid cip30 DataSignature
              // https://cips.cardano.org/cips/cip30/#datasignature
              if (enabledWallet.toLowerCase() === 'flint') {
                onSignMessage(dataSignature, undefined);
              } else {
                const { signature, key } = dataSignature;
                onSignMessage(signature, key);
              }
            }
          } catch (error) {
            console.warn(error);
          }
        }
      }
    },
    [isEnabled, enabledWallet]
  );

  const connect = async (
    walletName: string,
    onConnect?: () => void | undefined,
    onError?: (code: ConnectWalletError) => void
  ) => {
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
        } catch (error) {
          console.warn(error);
          if (typeof onError === 'function') {
            onError(ConnectWalletError.EnablementFailed);
          }
        }
      } else {
        if (typeof onError === 'function') {
          onError(ConnectWalletError.WalletExtensionNotFound);
        }
      }
    } else {
      if (typeof onError === 'function') {
        onError(ConnectWalletError.WalletExtensionNotFound);
      }
    }
  };

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
    installedWalletExtensionsObserver.set(getInstalledWalletExtensions());

    const newWalletCheck = setInterval(() => {
      installedWalletExtensionsObserver.set(getInstalledWalletExtensions());
    }, 5000);

    return () => {
      clearInterval(newWalletCheck);
    };
  }, []);

  return {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
    installedExtensions,
  };
}

export default useCardano;
