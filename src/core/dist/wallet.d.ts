import { NetworkType } from './types';
export declare const getRewardAddresses: (walletName: string) => Promise<any>;
export declare const signMessage: (walletName: string, message: string, onSignMessage?: ((signature: string, key: string | undefined) => void) | undefined, onSignError?: ((error: Error) => void) | undefined, limitNetwork?: NetworkType) => Promise<void>;
export declare const getInstalledWalletExtensions: (supportedWallets?: Array<String>) => Array<string>;
