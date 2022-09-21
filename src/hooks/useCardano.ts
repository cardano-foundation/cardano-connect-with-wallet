import { useState, useEffect, useCallback } from 'react';
import { SignErrorCode, Wallet } from '../global/types';
import { bech32 } from 'bech32';
import { Buffer } from 'buffer';
import useLocalStorage from './useLocalStorage';
import { getInstalledWalletExtensions, Observable } from '../utils';
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
          enabledWalletObserver.set(walletExtension);
          enabledObserver.set(true);
          if (typeof cardano.getRewardAddress === 'function') {
            const hexAddress = await cardano.getRewardAddress();
            const addressBytes = Buffer.from(hexAddress, 'hex');
            const words = bech32.toWords(addressBytes);
            const bech32Address = bech32.encode('stake', words, 1000);
            stakeAddressObserver.set(bech32Address);
          }
          return;
        }
      }
    }
  }, []);

  const signMessage = useCallback(
    async (
      message: string,
      onSignMessage: ((signedMessage: string) => void) | undefined
    ) => {
      if (!isEnabled) {
        return;
      }
      const cardano = (window as any).cardano;
      if (typeof message === 'undefined') {
        return;
      }

      const hexAddress = await cardano.getRewardAddress();
      let hexMessage = '';

      for (var i = 0, l = message.length; i < l; i++) {
        hexMessage += message.charCodeAt(i).toString(16);
      }

      try {
        const signedMessage = await cardano.signData(hexAddress, hexMessage);
        if (typeof onSignMessage === 'function') {
          onSignMessage(signedMessage);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    [isEnabled]
  );

  const connect = async (
    walletName: string,
    onConnect?: () => void | undefined,
    onError?: (code: SignErrorCode) => void
  ) => {
    const cardano = (window as any).cardano;

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
            onError(SignErrorCode.EnablementFailed);
          }
        }
      } else {
        if (typeof onError === 'function') {
          onError(SignErrorCode.WalletExtensionNotFound);
        }
      }
    } else {
      if (typeof onError === 'function') {
        onError(SignErrorCode.WalletExtensionNotFound);
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
