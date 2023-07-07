export enum NetworkType {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}

export type Cip30Function =
  | 'getNetworkId'
  | 'getUtxos'
  | 'getCollateral'
  | 'getBalance'
  | 'getUsedAddresses'
  | 'getUnusedAddresses'
  | 'getChangeAddress'
  | 'getRewardAddresses'
  | 'signTx'
  | 'signData'
  | 'submitTx';

export enum UnavailableWalletVisibility {
  SHOW_UNAVAILABLE,
  HIDE_UNAVAILABLE,
  SHOW_UNAVAILABLE_ON_MOBILE,
}
