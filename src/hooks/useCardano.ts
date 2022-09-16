import { useState, useEffect, useCallback } from 'react';
import { SignErrorCode } from '../global/types';
import { bech32 } from 'bech32';
import useLocalStorage from './useLocalStorage';

function useCardano() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [enabledWallet, setEnabledWallet] = useState<string | null>(null);
  const [stakeAddress, setStakeAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setIsEnabled(false);
    setStakeAddress(null);
    setEnabledWallet(null);
  }, []);

  const checkEnabled = useCallback(async () => {
    const cardano = (window as any).cardano;
    const walletExtensions = Object.keys(cardano);

    for (const walletExtension of walletExtensions) {
      if (typeof cardano[walletExtension].isEnabled === 'function') {
        if (await cardano[walletExtension].isEnabled()) {
          setEnabledWallet(walletExtension);
          setIsEnabled(true);
          if (typeof cardano.getRewardAddress === 'function') {
            const hexAddress = await cardano.getRewardAddress();
            const addressBytes = Buffer.from(hexAddress, 'hex');
            const words = bech32.toWords(addressBytes);
            const bech32Address = bech32.encode('stake', words, 1000);
            setStakeAddress(bech32Address);
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

  const connect = useCallback(
    async (
      walletName: string,
      onConnect: () => void | undefined,
      onError: (code: SignErrorCode) => void
    ) => {
      if (isEnabled) {
        if (typeof onConnect === 'function') {
          setIsConnected(true);
          onConnect();
        }
        return;
      }

      const cardano = (window as any).cardano;

      if (typeof cardano !== 'undefined') {
        if (typeof cardano[walletName] !== 'undefined') {
          try {
            await cardano[walletName].enable();
            checkEnabled();
            if (typeof onConnect === 'function') {
              setIsConnected(true);
              onConnect();
            }
          } catch (error) {
            console.warn(error);
            onError(SignErrorCode.EnablementFailed);
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
    },
    [isEnabled]
  );

  useEffect(() => {
    if (isConnected) {
      checkEnabled();
    }
  }, [isConnected]);

  return {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
  };
}

export default useCardano;
