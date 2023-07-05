declare const isWalletInstalled: (walletName: string) => boolean;
declare const decodeHexAddress: (hexAddress: string) => string;
declare const getWalletIcon: (walletName: string) => any;
export { getWalletIcon, decodeHexAddress, isWalletInstalled };
