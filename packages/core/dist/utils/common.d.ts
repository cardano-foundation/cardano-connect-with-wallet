/// <reference types="node" />
import { NetworkType, UnavailableWalletVisibility } from '../global/types';
export declare class WrongNetworkTypeError extends Error {
  constructor(targetNetwork: NetworkType, currentNetwork: NetworkType);
}
export declare class WalletNotCip30CompatibleError extends Error {
  constructor(walletname: string);
}
export declare class ExtensionNotInjectedError extends Error {
  constructor(walletname: string);
}
export declare class WalletNotInstalledError extends Error {
  constructor(walletName: string);
}
export declare class WalletExtensionNotFoundError extends Error {
  constructor(walletname: string);
}
export declare class EnablementFailedError extends Error {
  constructor(walletname: string);
}
export declare const checkIsMobile: () => boolean;
export declare const estimateAvailableWallets: (
  supportedWallets: Array<string>,
  showUnavailableWallets: UnavailableWalletVisibility,
  alwaysVisibleWallets: Array<string>,
  installedExtensions: Array<string>
) => string[];
export declare class InjectWalletListener {
  interval: number;
  onChangeCallback: Function;
  timeoutId: NodeJS.Timeout | null;
  private wallets;
  constructor(onChangeCallback: Function);
  private checkWallets;
  start(): void;
  stop(): void;
}
