# Cardano Connect with Wallet Core

<p align="left">
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

This repository aims to provide framework-independent helper and wrapper functions for seamless interaction between Cardano decentralized applications (dApps) and wallets ([CIP 8](https://cips.cardano.org/cips/cip8/) and [CIP 30](https://cips.cardano.org/cips/cip30/)). If you are looking for React.js components please move on to [this repository](https://github.com/cardano-foundation/cardano-connect-with-wallet/tree/main/react).

Have fun building on Cardano! 🏗🎉

## 🚀 Getting Started

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet-core
```

```ts
import { Wallet } from '@cardano-foundation/cardano-connect-with-wallet-core';
```

The `Wallet` class conatins static helper to simplify the dApp development. Please tale a look into the React hook [useCardano](../react/src/hooks/useCardano.ts) to see an example of how you can utilize `Wallet` in your project.

```ts
Wallet.isConnecting: Observable<boolean>;
Wallet.lastConnectedWallet: Observable<string>;
Wallet.isConnected: Observable<boolean>;
Wallet.enabledObserver: Observable<boolean>;
Wallet.isConnectingObserver: Observable<boolean>;
Wallet.enabledWalletObserver: Observable<string | null>;
Wallet.stakeAddressObserver: Observable<string | null>;
Wallet.installedWalletExtensionsObserver: Observable<string[]>;
Wallet.usedAddressesObserver: Observable<string[]>;
Wallet.unusedAddressesObserver: Observable<string[]>;
Wallet.accountBalanceObserver: Observable<number>;
Wallet.meerkatAddressObserver: Observable<string>;
Wallet.injectWalletListener: InjectWalletListener;

Wallet.disconnect(): void;
Wallet.clearLocalStorage(): void;

Wallet.startInjectWalletListener(): void;
Wallet.stopInjectWalletListener(): void;
Wallet.checkEnabled(network: NetworkType): Promise<void>;
Wallet.connectToWallet(walletName: string, networkType: NetworkType, retries?: number, retryIntervalInMs?: number): Promise<void>;

Wallet.connect(walletName: string, network: NetworkType, onConnect?: () => void | undefined, onError?: (code: Error) => void): Promise<void>;

Wallet.getInstalledWalletExtensions(supportedWallets?: Array<string>): Array<string>;

Wallet.getRewardAddresses(): Promise<any>;
Wallet.signMessage(message: string, onSignMessage?: (signature: string, key: string | undefined) => void, onSignError?: (error: Error) => void, limitNetwork?: NetworkType): Promise<void>;
```

## 💪 Contributing

Please have a look at our [contributing infos](../CONTRIBUTING.md) to become familiar with our guidelines.
