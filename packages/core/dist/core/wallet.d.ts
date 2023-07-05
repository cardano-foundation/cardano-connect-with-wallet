import { NetworkType } from './types';
import { InjectWalletListener } from '../utils';
import { Observable } from '../utils';
declare class Wallet {
  static isConnecting: Observable<boolean>;
  static lastConnectedWallet: Observable<string>;
  static isConnected: Observable<boolean>;
  static enabledObserver: Observable<boolean>;
  static isConnectingObserver: Observable<boolean>;
  static enabledWalletObserver: Observable<string | null>;
  static stakeAddressObserver: Observable<string | null>;
  static installedWalletExtensionsObserver: Observable<string[]>;
  static usedAddressesObserver: Observable<string[]>;
  static unusedAddressesObserver: Observable<string[]>;
  static accountBalanceObserver: Observable<number>;
  static injectWalletListener: InjectWalletListener;
  constructor();
  static disconnect(): void;
  static clearLocalStorage(): void;
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
    setLastConnectedWallet: (lastConnectedWallet: string) => void
  ): void;
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
    setLastConnectedWallet: (lastConnectedWallet: string) => void
  ): void;
  static startInjectWalletListener(): void;
  static stopInjectWalletListener(): void;
  private static unwrapApi;
  static checkEnabled(network: NetworkType): Promise<void>;
  static connectToWallet(
    walletName: string,
    netWorkType: NetworkType,
    retries?: number,
    retryIntervalInMs?: number
  ): Promise<void>;
  static connect(
    walletName: string,
    network: NetworkType,
    onConnect?: () => void | undefined,
    onError?: (code: Error) => void
  ): Promise<void>;
  static getInstalledWalletExtensions(
    supportedWallets?: Array<string>
  ): Array<string>;
  static getRewardAddresses(): Promise<any>;
  static signMessage(
    message: string,
    onSignMessage?: (signature: string, key: string | undefined) => void,
    onSignError?: (error: Error) => void,
    limitNetwork?: NetworkType
  ): Promise<void>;
}
export { Wallet };
