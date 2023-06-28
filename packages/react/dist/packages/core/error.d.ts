import { NetworkType } from './types';
export declare class WrongNetworkTypeError extends Error {
    constructor(targetNetwork: NetworkType, currentNetwork: NetworkType);
}
