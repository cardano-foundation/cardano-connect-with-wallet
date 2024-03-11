import {
  WalletConnectError,
  WrongNetworkTypeError,
  decodeHexAddress,
  Observable,
  ExtensionNotInjectedError,
  InjectWalletListener,
  WalletNotCip30CompatibleError,
  WalletNotInstalledError,
} from './utils';
import { Cip30Function, NetworkType } from './types';
import { decode as decodeCbor } from 'cborg';
import { Buffer } from 'buffer';

export * from './utils';
export * from './types';

class Wallet {
  static isConnecting: Observable<boolean> = new Observable<boolean>(
    Boolean(window.localStorage.getItem('cf-wallet-connected'))
  );
  static lastConnectedWallet = new Observable<string>(
    window.localStorage.getItem('cf-last-connected-wallet') || ''
  );
  static isConnected = new Observable<boolean>(false);
  static enabledObserver = new Observable<boolean>(false);
  static isConnectingObserver = new Observable<boolean>(false);
  static enabledWalletObserver = new Observable<string | null>(null);
  static stakeAddressObserver = new Observable<string | null>(null);
  static installedWalletExtensionsObserver = new Observable<Array<string>>([]);
  static usedAddressesObserver = new Observable<Array<string>>([]);
  static unusedAddressesObserver = new Observable<Array<string>>([]);
  static accountBalanceObserver = new Observable<number>(0);
  static meerkatAddressObserver = new Observable<string>('');

  static injectWalletListener: InjectWalletListener;
  constructor() {}

  static disconnect(): void {
    this.enabledObserver.set(false);
    this.enabledWalletObserver.set(null);
    this.stakeAddressObserver.set(null);
    this.usedAddressesObserver.set([]);
    this.unusedAddressesObserver.set([]);
    this.accountBalanceObserver.set(0);
    this.isConnected.set(false);
    this.lastConnectedWallet.set('');
    this.meerkatAddressObserver.set('');
    window.dispatchEvent(new Event('storage'));
    this.clearLocalStorage();
  }
  static clearLocalStorage(): void {
    window.localStorage.removeItem('cf-wallet-connected');
    window.localStorage.removeItem('cf-last-connected-wallet');
  }

  static addEventListener(
    event: string,
    callback: (value: boolean | string | null | Array<string> | number) => void
  ) {
    if (
      ![
        'enabled',
        'connecting',
        'enabledWallet',
        'stakeAddress',
        'usedAddresses',
        'unusedAddresses',
        'accountBalance',
        'connected',
        'lastConnectedWallet',
        'meerkatAddress',
        'installedWalletExtensions',
      ].includes(event)
    ) {
      throw new Error(
        `The Event ${event} is not supported. Please use one of the following events: enabled, connecting, enabledWallet, stakeAddress, usedAddresses, unusedAddresses, accountBalance, connected, lastConnectedWallet, meerkatAddress, installedWalletExtensions`
      );
    }

    if (event === 'enabled') {
      this.enabledObserver.subscribe(callback);
    } else if (event === 'connecting') {
      this.isConnectingObserver.subscribe(callback);
    } else if (event === 'enabledWallet') {
      this.enabledWalletObserver.subscribe(callback);
    } else if (event === 'stakeAddress') {
      this.stakeAddressObserver.subscribe(callback);
    } else if (event === 'usedAddresses') {
      this.usedAddressesObserver.subscribe(callback);
    } else if (event === 'unusedAddresses') {
      this.unusedAddressesObserver.subscribe(callback);
    } else if (event === 'installedWalletExtensions') {
      this.installedWalletExtensionsObserver.subscribe(callback);
    } else if (event === 'accountBalance') {
      this.accountBalanceObserver.subscribe(callback);
    } else if (event === 'connected') {
      this.isConnected.subscribe(callback);
    } else if (event === 'lastConnectedWallet') {
      this.lastConnectedWallet.subscribe(callback);
    } else if (event === 'meerkatAddress') {
      this.meerkatAddressObserver.subscribe(callback);
    }
  }

  static removeEventListener(
    event: string,
    callback: (value: boolean | string | null | Array<string> | number) => void
  ) {
    if (
      ![
        'enabled',
        'connecting',
        'enabledWallet',
        'stakeAddress',
        'usedAddresses',
        'unusedAddresses',
        'accountBalance',
        'connected',
        'lastConnectedWallet',
        'meerkatAddress',
        'installedWalletExtensions',
      ].includes(event)
    ) {
      throw new Error(
        `The Event ${event} is not supported. Please use one of the following events: enabled, connecting, enabledWallet, stakeAddress, usedAddresses, unusedAddresses, accountBalance, connected, lastConnectedWallet, meerkatAddress, installedWalletExtensions`
      );
    }

    if (event === 'enabled') {
      this.enabledObserver.unsubscribe(callback);
    } else if (event === 'connecting') {
      this.isConnectingObserver.unsubscribe(callback);
    } else if (event === 'enabledWallet') {
      this.enabledWalletObserver.unsubscribe(callback);
    } else if (event === 'stakeAddress') {
      this.stakeAddressObserver.unsubscribe(callback);
    } else if (event === 'usedAddresses') {
      this.usedAddressesObserver.unsubscribe(callback);
    } else if (event === 'unusedAddresses') {
      this.unusedAddressesObserver.unsubscribe(callback);
    } else if (event === 'installedWalletExtensions') {
      this.installedWalletExtensionsObserver.unsubscribe(callback);
    } else if (event === 'accountBalance') {
      this.accountBalanceObserver.unsubscribe(callback);
    } else if (event === 'connected') {
      this.isConnected.unsubscribe(callback);
    } else if (event === 'lastConnectedWallet') {
      this.lastConnectedWallet.unsubscribe(callback);
    } else if (event === 'meerkatAddress') {
      this.meerkatAddressObserver.unsubscribe(callback);
    }
  }

  static subscribeToObservables(
    setIsEnabled: (isEnabled: boolean) => void,
    setIsConnecting: (isConnecting: boolean) => void,
    setEnabledWallet: (enabledWallet: string | null) => void,
    setStakeAddress: (stakeAddress: string | null) => void,
    setUsedAddresses: (usedAddresses: Array<string>) => void,
    setUnusedAddresses: (unusedAddresses: Array<string>) => void,
    setInstalledExtensions: (installedExtensions: Array<string>) => void,
    setAccountBalance: (accountBalance: number) => void,
    setIsConnected: (isConnected: boolean) => void,
    setLastConnectedWallet: (lastConnectedWallet: string) => void,
    setMeerkatAddress: (meerkatAddress: string) => void
  ): void {
    this.enabledObserver.subscribe(setIsEnabled);
    this.isConnectingObserver.subscribe(setIsConnecting);
    this.enabledWalletObserver.subscribe(setEnabledWallet);
    this.stakeAddressObserver.subscribe(setStakeAddress);
    this.usedAddressesObserver.subscribe(setUsedAddresses);
    this.unusedAddressesObserver.subscribe(setUnusedAddresses);
    this.installedWalletExtensionsObserver.subscribe(setInstalledExtensions);
    this.accountBalanceObserver.subscribe(setAccountBalance);
    this.isConnected.subscribe(setIsConnected);
    this.lastConnectedWallet.subscribe(setLastConnectedWallet);
    this.meerkatAddressObserver.subscribe(setMeerkatAddress);
  }

  static unsubscribeFromObservables(
    setIsEnabled: (isEnabled: boolean) => void,
    setIsConnecting: (isConnecting: boolean) => void,
    setEnabledWallet: (enabledWallet: string | null) => void,
    setStakeAddress: (stakeAddress: string | null) => void,
    setUsedAddresses: (usedAddresses: Array<string>) => void,
    setUnusedAddresses: (unusedAddresses: Array<string>) => void,
    setInstalledExtensions: (installedExtensions: Array<string>) => void,
    setAccountBalance: (accountBalance: number) => void,
    setIsConnected: (isConnected: boolean) => void,
    setLastConnectedWallet: (lastConnectedWallet: string) => void,
    setMeerkatAddress: (meerkatAddress: string) => void
  ): void {
    this.enabledObserver.unsubscribe(setIsEnabled);
    this.isConnectingObserver.unsubscribe(setIsConnecting);
    this.enabledWalletObserver.unsubscribe(setEnabledWallet);
    this.stakeAddressObserver.unsubscribe(setStakeAddress);
    this.usedAddressesObserver.unsubscribe(setUsedAddresses);
    this.unusedAddressesObserver.unsubscribe(setUnusedAddresses);
    this.installedWalletExtensionsObserver.unsubscribe(setInstalledExtensions);
    this.accountBalanceObserver.unsubscribe(setAccountBalance);
    this.isConnected.unsubscribe(setIsConnected);
    this.lastConnectedWallet.unsubscribe(setLastConnectedWallet);
    this.meerkatAddressObserver.unsubscribe(setMeerkatAddress);
  }

  static startInjectWalletListener(): void {
    this.injectWalletListener = new InjectWalletListener(() => {
      this.installedWalletExtensionsObserver.set(
        this.getInstalledWalletExtensions()
      );
    });
    this.injectWalletListener.start();
  }

  static stopInjectWalletListener(): void {
    if (this.injectWalletListener) {
      this.injectWalletListener.stop();
    }
  }

  private static async unwrapApi(): Promise<{
    [key in Cip30Function]: Function;
  }> {
    const cardano = (window as any).cardano;

    return await cardano[
      this.lastConnectedWallet.get() === 'typhon'
        ? 'typhoncip30'
        : this.lastConnectedWallet.get()
    ].enable();
  }

  static async checkEnabled(network: NetworkType) {
    const cardano = (window as any).cardano;

    if (typeof cardano === 'undefined') {
      return;
    }

    if (Wallet.lastConnectedWallet.get() !== '') {
      if (Wallet.lastConnectedWallet.get() === 'typhon') {
        try {
          await this.connectToWallet('typhoncip30', network);
        } catch (error) {
          throw error;
        }
        await this.connectToWallet('typhoncip30', network);
      } else {
        try {
          await this.connectToWallet(this.lastConnectedWallet.get(), network);
        } catch (error) {
          throw error;
        }
      }
    }
  }

  static async connectToWallet(
    walletName: string,
    networkType: NetworkType,
    retries = 20,
    retryIntervalInMs = 25
  ) {
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

    const establishConnection = async (limitNetwork: NetworkType) => {
      try {
        await checkWalletAvailable(walletName, retries, retryIntervalInMs);
      } catch (error) {
        throw new ExtensionNotInjectedError(walletName);
      }

      const cardano = (window as any).cardano;

      if (
        typeof cardano[walletName] !== 'undefined' &&
        typeof cardano[walletName].enable === 'function'
      ) {
        let api: any = {};

        try {
          api = await cardano[walletName].enable();
        } catch (error: any) {
          throw new WalletConnectError(walletName, error.message);
        }

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
                throw new WrongNetworkTypeError(limitNetwork, networkType);
              }

              const setValuesAsync = async () => {
                if (typeof api.getUsedAddresses === 'function') {
                  const usedAddresses = await api.getUsedAddresses();
                  this.usedAddressesObserver.set(
                    usedAddresses.map((address: string) =>
                      decodeHexAddress(address)
                    )
                  );
                }
                if (typeof api.getUnusedAddresses === 'function') {
                  const unusedAddresses = await api.getUnusedAddresses();
                  this.unusedAddressesObserver.set(
                    unusedAddresses.map((address: string) =>
                      decodeHexAddress(address)
                    )
                  );
                }

                if (typeof api.getBalance === 'function') {
                  const cborBalance = await api.getBalance();
                  const balance = decodeCbor(Buffer.from(cborBalance, "hex"), { useMaps: true });
                  this.accountBalanceObserver.set( Array.isArray(balance) ? balance[0] / 1_000_000 : balance / 1_000_000)
                }
              };

              // without await otherwise the main process will be blocked for a few seconds
              setValuesAsync();

              this.stakeAddressObserver.set(bech32Address);
              this.enabledWalletObserver.set(walletName);
              this.enabledObserver.set(true);
              this.isConnected.set(true);

              if (walletName === 'typhoncip30') {
                window.localStorage.setItem(
                  'cf-last-connected-wallet',
                  'typhon'
                );
                this.lastConnectedWallet.set('typhon');
              } else {
                window.localStorage.setItem(
                  'cf-last-connected-wallet',
                  walletName
                );
                this.lastConnectedWallet.set(walletName);
              }
              window.localStorage.setItem('cf-wallet-connected', String(true));

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

    try {
      await establishConnection(networkType);
    } catch (error: any) {
      throw error;
    }
  }

  static async connect(
    walletName: string,
    network: NetworkType,
    onConnect?: () => void | undefined,
    onError?: (code: Error) => void
  ) {
    this.isConnecting.set(true);
    const cardano = (window as any).cardano;
    walletName = walletName.toLowerCase();
    if (typeof cardano !== 'undefined') {
      if (typeof cardano[walletName] !== 'undefined') {
        try {
          if (walletName === 'typhon') {
            walletName = 'typhoncip30';
          }

          await this.connectToWallet(walletName, network);

          if (typeof onConnect === 'function') {
            onConnect();
          }
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error as Error);
          }
        } finally {
          this.isConnecting.set(false);
        }
      } else {
        this.isConnecting.set(false);
        if (typeof onError === 'function') {
          onError(new WalletNotInstalledError(walletName));
        }
      }
    } else {
      this.isConnecting.set(false);
      if (typeof onError === 'function') {
        onError(new ExtensionNotInjectedError(walletName));
      }
    }
  }

  public static getInstalledWalletExtensions(
    supportedWallets?: Array<string>
  ): Array<string> {
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
  }

  static async getRewardAddresses() {
    const api = await this.unwrapApi();
    if (typeof api.getRewardAddresses === 'function') {
      const hexAddresses = await api.getRewardAddresses();
      if (hexAddresses && hexAddresses.length > 0) {
        return hexAddresses.map((hexAddress: string) =>
          decodeHexAddress(hexAddress)
        );
      } else {
        return [];
      }
    }
  }

  static async signMessage(
    message: string,
    onSignMessage?: (signature: string, key: string | undefined) => void,
    onSignError?: (error: Error) => void,
    limitNetwork?: NetworkType
  ) {
    if (!this.enabledObserver.get() || !this.enabledWalletObserver.get()) {
      return;
    }
    if (typeof message === 'undefined') {
      return;
    }
    const api = await Wallet.unwrapApi();
    const hexAddresses = await api.getRewardAddresses();
    if (hexAddresses.length > 0) {
      let networkType = NetworkType.MAINNET;

      if (
        hexAddresses[0] &&
        decodeHexAddress(hexAddresses[0]).startsWith('stake_test')
      ) {
        networkType = NetworkType.TESTNET;
      }
      if (limitNetwork && limitNetwork !== networkType) {
        const error = new WrongNetworkTypeError(limitNetwork, networkType);
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
  }
}

export { Wallet };
