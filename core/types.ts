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

export type Extension = { cip: number };
export type EnableOptions = { extensions: Extension[] };

/**
 * CIP-0095: Web-Wallet Bridge — Conway Ledger Era (Governance)
 * Status: Active
 * Enables Ada holders and DReps to interact with Conway-era governance features.
 * Activated via: enable({ extensions: [{ cip: 95 }] })
 * Accessed via: api.cip95.*
 */
export interface Cip95Api {
  getPubDRepKey(): Promise<string>;
  getRegisteredPubStakeKeys(): Promise<string[]>;
  getUnregisteredPubStakeKeys(): Promise<string[]>;
  signData(
    addr: string,
    payload: string,
  ): Promise<{ signature: string; key: string }>;
}

/**
 * CIP-0103: Web-Wallet Bridge — Bulk Transaction Signing
 * Status: Active
 * Adds bulk signing and submission of multiple transactions in a single call.
 * Activated via: enable({ extensions: [{ cip: 103 }] })
 * Accessed via: api.cip103.*
 */
export interface Cip103Api {
  signTxs(
    txs: Array<{ cbor: string; partialSign?: boolean }>,
  ): Promise<string[]>;
  submitTxs(txs: string[]): Promise<string[]>;
}

/**
 * CIP-0104: Web-Wallet Bridge — Account Public Key
 * Status: Proposed
 * Exposes the BIP-32 extended account public key for read-only address derivation.
 * Activated via: enable({ extensions: [{ cip: 104 }] })
 * Accessed via: api.cip104.*
 * @experimental CIP-0104 is currently in Proposed status and may change.
 */
export interface Cip104Api {
  getAccountPub(): Promise<string>;
}

/**
 * CIP-0106: Web-Wallet Bridge — Multisig / Native Script Wallets
 * Status: Proposed
 * Enables dApps to interface with native-script-based multisig wallets.
 * Note: signTx() and signData() are disabled when this extension is active.
 * Activated via: enable({ extensions: [{ cip: 106 }] })
 * Accessed via: api.cip106.*
 * @experimental CIP-0106 is currently in Proposed status and may change.
 */
export interface Cip106Api {
  getCollateralAddress(): Promise<string>;
  getScriptRequirements(): Promise<
    Array<{ code: number; value: string | number }>
  >;
  getScript(): Promise<string>;
  submitUnsignedTx(tx: string): Promise<string>;
  getCompletedTx(txId: string): Promise<[string, string]>;
}

/**
 * CIP-0141: Web-Wallet Bridge — Plutus Wallets
 * Status: Proposed
 * Enables dApps to interact with wallets whose spending address is controlled by a Plutus script.
 * Note: signData() is disabled when this extension is active.
 * Activated via: enable({ extensions: [{ cip: 141 }] })
 * Accessed via: api.cip141.*
 * @experimental CIP-0141 is currently in Proposed status and may change.
 */
export interface Cip141Api {
  getScriptRequirements(): Promise<object[]>;
  getScript(): Promise<[number, string]>;
  submitUnsignedTx(tx: string): Promise<string>;
  getCompletedTx(txId: string): Promise<[string, string]>;
  getSecret(secretId: string): Promise<string>;
  signRedeemer(data: string, primitive: string): Promise<string>;
}

/**
 * CIP-0142: Web-Wallet Bridge — Network Determination
 * Status: Proposed
 * Extends getNetworkId() to expose the specific network magic number,
 * distinguishing between Preview, Preprod, custom testnets, and mainnet.
 * Activated via: enable({ extensions: [{ cip: 142 }] })
 * Accessed via: api.cip142.*
 * @experimental CIP-0142 is currently in Proposed status and may change.
 */
export interface Cip142Api {
  getNetworkMagic(): Promise<number>;
}

/**
 * The union of all possible CIP extension APIs available on the enabled wallet API object.
 * Each field is optional and only present if the wallet enabled that extension.
 */
export type EnabledExtensionApis = {
  cip95?: Cip95Api;
  cip103?: Cip103Api;
  /** @experimental */
  cip104?: Cip104Api;
  /** @experimental */
  cip106?: Cip106Api;
  /** @experimental */
  cip141?: Cip141Api;
  /** @experimental */
  cip142?: Cip142Api;
};
