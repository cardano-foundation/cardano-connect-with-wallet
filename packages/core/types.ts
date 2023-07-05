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
