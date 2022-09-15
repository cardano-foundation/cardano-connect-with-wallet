import { useState, useEffect, useCallback } from 'react';
import { SignErrorCode } from '../global/types';
import { bech32 } from 'bech32';

function useCardano() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [enabledWallet, seEnabledWallet] = useState<string | null>(null);
  const [stakeAddress, setStakeAddress] = useState<string | null>(null);

  const checkEnabled = useCallback(async () => {
    const cardano = (window as any).cardano;

    if (typeof cardano.isEnabled === 'function') {
      if (await cardano.isEnabled()) {
        setIsEnabled(true);
        if (typeof cardano.getRewardAddress === 'function') {
          const hexAddress = await cardano.getRewardAddress();
          const addressBytes = Buffer.from(hexAddress, 'hex');
          const words = bech32.toWords(addressBytes);
          const bech32Address = bech32.encode('stake', words, 1000);
          setStakeAddress(bech32Address);
        }
      }
    }

    const walletExtensions = Object.keys(cardano);
    for (const walletExtension of walletExtensions) {
      if (typeof cardano[walletExtension].isEnabled === 'function') {
        if (await cardano[walletExtension].isEnabled()) {
          seEnabledWallet(walletExtension);
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
    checkEnabled();
  }, []);

  return { isEnabled, enabledWallet, stakeAddress, signMessage, connect };
}

export default useCardano;
