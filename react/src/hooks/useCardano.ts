import { useState, useEffect, useCallback, useRef } from 'react';
import {
  NetworkType,
  Wallet,
} from '@cardano-foundation/cardano-connect-with-wallet-core';
import { DAppPeerConnect } from '@fabianbormann/cardano-peer-connect';

function useCardano(props?: { limitNetwork?: NetworkType }) {
  const dAppConnect = useRef<null | DAppPeerConnect>(null);
  const [meerkatAddress, setMeerkatAddress] = useState<string>(
    Wallet.meerkatAddressObserver.get()
  );
  const [isEnabled, setIsEnabled] = useState<boolean>(
    Wallet.enabledObserver.get()
  );
  const [isConnecting, setIsConnecting] = useState<boolean>(
    Wallet.isConnectingObserver.get()
  );
  const [enabledWallet, setEnabledWallet] = useState<string | null>(
    Wallet.enabledWalletObserver.get()
  );
  const [stakeAddress, setStakeAddress] = useState<string | null>(
    Wallet.stakeAddressObserver.get()
  );
  const [usedAddresses, setUsedAddresses] = useState<Array<string>>(
    Wallet.usedAddressesObserver.get()
  );
  const [unusedAddresses, setUnusedAddresses] = useState<Array<string>>(
    Wallet.unusedAddressesObserver.get()
  );
  const [accountBalance, setAccountBalance] = useState<number>(
    Wallet.accountBalanceObserver.get()
  );
  const [installedExtensions, setInstalledExtensions] = useState<Array<string>>(
    Wallet.installedWalletExtensionsObserver.get()
  );
  const [isConnected, setIsConnected] = useState<boolean>(
    Wallet.isConnected.get()
  );
  const [lastConnectedWallet, setLastConnectedWallet] = useState<string>(
    Wallet.lastConnectedWallet.get()
  );

  const limitNetwork = props?.limitNetwork || NetworkType.MAINNET;

  useEffect(() => {
    Wallet.checkEnabled(limitNetwork).catch((error) => {
      console.error(error);
      disconnect();
    });

    Wallet.subscribeToObservables(
      setIsEnabled,
      setIsConnecting,
      setEnabledWallet,
      setStakeAddress,
      setUsedAddresses,
      setUnusedAddresses,
      setInstalledExtensions,
      setAccountBalance,
      setIsConnected,
      setLastConnectedWallet,
      setMeerkatAddress
    );

    return () => {
      Wallet.unsubscribeFromObservables(
        setIsEnabled,
        setIsConnecting,
        setEnabledWallet,
        setStakeAddress,
        setUsedAddresses,
        setUnusedAddresses,
        setInstalledExtensions,
        setAccountBalance,
        setIsConnected,
        setLastConnectedWallet,
        setMeerkatAddress
      );
    };
  }, []);

  const initDappConnect = useCallback(
    (
      dAppName: string,
      dAppUrl: string,
      verifyConnection: (
        walletInfo: any,
        callback: (granted: boolean, allowAutoConnect: boolean) => void
      ) => void,
      onApiInject: (name: string, address: string) => void,
      onApiEject: (name: string, address: string) => void
    ) => {
      dAppConnect.current = new DAppPeerConnect({
        dAppInfo: {
          name: dAppName,
          url: dAppUrl,
        },
        verifyConnection: verifyConnection,
        onApiInject: onApiInject,
        onApiEject: onApiEject,
      });

      dAppConnect.current.generateIdenticon();
      setMeerkatAddress(dAppConnect.current.getAddress());
    },
    []
  );

  const disconnect = useCallback(() => {
    Wallet.disconnect();
  }, []);

  const connectToWallet = useCallback(
    async (walletName: string, retries = 20, retryIntervalInMs = 25) => {
      try {
        await Wallet.connectToWallet(
          walletName,
          limitNetwork,
          retries,
          retryIntervalInMs
        );
      } catch (error) {
        console.error(error);
      }
    },
    [limitNetwork]
  );

  const checkEnabled = useCallback(async () => {
    try {
      await Wallet.checkEnabled(limitNetwork);
    } catch (error) {
      console.error(error);
      disconnect();
    }
  }, [lastConnectedWallet]);

  const signMessage = useCallback(
    async (
      message: string,
      onSignMessage?: (signature: string, key: string | undefined) => void,
      onSignError?: (error: Error) => void
    ) => {
      Wallet.signMessage(message, onSignMessage, onSignError);
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

      const errorHandler =
        typeof onError === 'undefined'
          ? (error: Error) => console.error(error)
          : onError;

      Wallet.connect(walletName, limitNetwork, onConnect, errorHandler);
    },
    [connectToWallet, isConnecting]
  );

  useEffect(() => {
    if (isConnected) {
      checkEnabled();
    }
  }, [isConnected]);

  useEffect(() => {
    Wallet.startInjectWalletListener();

    return () => {
      Wallet.stopInjectWalletListener();
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
    dAppConnect,
    initDappConnect,
    meerkatAddress,
  };
}

export default useCardano;
