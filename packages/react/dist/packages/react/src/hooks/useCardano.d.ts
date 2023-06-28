/// <reference types="react" />
import { NetworkType } from '../../../core';
import { DAppPeerConnect } from '@fabianbormann/cardano-peer-connect';
declare function useCardano(props?: {
    limitNetwork?: NetworkType;
}): {
    isEnabled: boolean;
    isConnected: boolean;
    isConnecting: boolean;
    enabledWallet: string | null;
    stakeAddress: string | null;
    usedAddresses: string[];
    unusedAddresses: string[];
    signMessage: (message: string, onSignMessage?: ((signature: string, key: string | undefined) => void) | undefined, onSignError?: ((error: Error) => void) | undefined) => Promise<void>;
    connect: (walletName: string, onConnect?: () => void | undefined, onError?: ((code: Error) => void) | undefined) => Promise<void>;
    disconnect: () => void;
    installedExtensions: string[];
    accountBalance: number;
    dAppConnect: import("react").MutableRefObject<DAppPeerConnect | null>;
    initDappConnect: (dAppName: string, dAppUrl: string, verifyConnection: (walletInfo: any, callback: (granted: boolean, allowAutoConnect: boolean) => void) => void, onApiInject: (name: string, address: string) => void, onApiEject: (name: string, address: string) => void) => void;
    meerkatAddress: string;
};
export default useCardano;
