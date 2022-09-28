import { useState, useEffect, useCallback } from 'react';
import { ConnectWalletError, Wallet } from '../global/types';
import useLocalStorage from './useLocalStorage';
import {
  decodeHexAddress,
  getInstalledWalletExtensions,
  Observable,
} from '../utils';
import { capitalize } from '../common';

const enabledObserver = new Observable<boolean>(false);
const enabledWalletObserver = new Observable<string | null>(null);
const stakeAddressObserver = new Observable<string | null>(null);

function useCardano() {
  const [isEnabled, setIsEnabled] = useState<boolean>(enabledObserver.get());
  const [enabledWallet, setEnabledWallet] = useState<string | null>(
    enabledWalletObserver.get()
  );
  const [stakeAddress, setStakeAddress] = useState<string | null>(
    stakeAddressObserver.get()
  );
  const [isConnected, setIsConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );

  useEffect(() => {
    enabledObserver.subscribe(setIsEnabled);
    enabledWalletObserver.subscribe(setEnabledWallet);
    stakeAddressObserver.subscribe(setStakeAddress);

    return () => {
      enabledObserver.unsubscribe(setIsEnabled);
      enabledWalletObserver.unsubscribe(setEnabledWallet);
      stakeAddressObserver.unsubscribe(setStakeAddress);
    };
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    window.dispatchEvent(new Event('storage'));
    enabledObserver.set(false);
    enabledWalletObserver.set(null);
    stakeAddressObserver.set(null);
  }, []);

  const checkEnabled = useCallback(async () => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return;
    }

    const walletExtensions = Object.keys(cardano);

    for (const walletExtension of walletExtensions) {
      if (typeof cardano[walletExtension].isEnabled === 'function') {
        if (await cardano[walletExtension].isEnabled()) {
          const api = await cardano[walletExtension].enable();

          if (typeof api.getRewardAddresses === 'function') {
            const hexAddresses = await api.getRewardAddresses();

            if (hexAddresses && hexAddresses.length > 0) {
              try {
                const bech32Address = decodeHexAddress(hexAddresses[0]);

                stakeAddressObserver.set(bech32Address);
                enabledWalletObserver.set(walletExtension);
                enabledObserver.set(true);
              } catch (error) {
                console.error(error);
              }
            }
          }
          return;
        }
      }
    }
  }, []);

  const signMessage = useCallback(
    async (
      message: string,
      onSignMessage: ((signature: string, key: string) => void) | undefined
    ) => {
      if (!isEnabled || !enabledWallet) {
        return;
      }
      const cardano = (window as any).cardano;
      if (typeof message === 'undefined') {
        return;
      }

      const api = await cardano[enabledWallet].enable();
      if (typeof api.getRewardAddresses === 'function') {
        const hexAddresses = await api.getRewardAddresses();

        if (hexAddresses.length > 0) {
          const hexAddress = hexAddresses[0];
          let hexMessage = '';

          for (var i = 0, l = message.length; i < l; i++) {
            hexMessage += message.charCodeAt(i).toString(16);
          }

          try {
            const { signature, key } = await api.signData(
              hexAddress,
              hexMessage
            );
            if (typeof onSignMessage === 'function') {
              onSignMessage(signature, key);
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
          await cardano[walletName].enable();
          checkEnabled();
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

  const getAvailableWallets: (
    supportedWallets?: Array<String>
  ) => Promise<Array<Wallet>> = async (supportedWallets) => {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return [];
    }

    let walletExtensions: Array<string> = Object.keys(cardano);

    if (supportedWallets) {
      walletExtensions = getInstalledWalletExtensions(supportedWallets);
    }

    const availableWallets: Array<Wallet> = [];

    for (const walletExtension of walletExtensions) {
      if (typeof cardano[walletExtension].isEnabled === 'function') {
        availableWallets.push({
          name: capitalize(cardano[walletExtension].name),
          isEnabled: await cardano[walletExtension].isEnabled(),
          apiVersion: cardano[walletExtension].apiVersion,
          icon: cardano[walletExtension].icon,
        });
      }
    }

    return availableWallets;
  };

  return {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
    getAvailableWallets,
  };
}

export default useCardano;
