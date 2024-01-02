# Cardano Connect with Wallet Core

<p align="left">
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

This repository aims to provide framework-independent helper and wrapper functions for seamless interaction between Cardano decentralized applications (dApps) and wallets ([CIP 8](https://cips.cardano.org/cip/CIP-0008) and [CIP 30](https://cips.cardano.org/cip/CIP-0030)). If you are looking for React.js components please move on to [this repository](https://github.com/cardano-foundation/cardano-connect-with-wallet/tree/main/react).

Have fun building on Cardano! 🏗🎉

## 🚀 Getting Started

### NPM Package

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet-core
```

```ts
import { Wallet } from '@cardano-foundation/cardano-connect-with-wallet-core';
```

### Browser Import

```html
<script src="https://cardano-foundation.github.io/cardano-connect-with-wallet/bundle-latest/index.js"></script>
<script>
  const wallet = CardanoConnectWithWalletCore.Wallet;
  ...
</script>
```

### Example Usage

The `Wallet` class contains static helper functions to simplify the dApp development. Please take a look into the React hook [useCardano](../react/src/hooks/useCardano.ts) to see an example of how you can utilize `Wallet` in your module-based project. Get an idea of the usage in a static html, javascript, css context from our [html-based wallet button](../html/cardano-connect.js).

### The Wallet Module

```ts
/*
Register a function to those events:

'enabled',
'connecting',
'enabledWallet',
'stakeAddress',
'usedAddresses',
'unusedAddresses',
'accountBalance',
'connected',
'lastConnectedWallet',
'meerkatAddress',
'installedWalletExtensions'
*/
Wallet.addEventListener: void;
Wallet.removeEventListener: void;

// Starts a background thread to listen for new wallets in the window.cardano object
Wallet.startInjectWalletListener(): void;
Wallet.stopInjectWalletListener(): void;

// Connect or disconnect a wallet by name e.g. 'yoroi', 'eternl', 'flint', etc.
Wallet.connectToWallet(walletName: string, networkType: NetworkType, retries?: number, retryIntervalInMs?: number): Promise<void>;
Wallet.connect(walletName: string, network: NetworkType, onConnect?: () => void | undefined, onError?: (code: Error) => void): Promise<void>;
Wallet.disconnect(): void;

Wallet.checkEnabled(network: NetworkType): Promise<void>;
Wallet.getInstalledWalletExtensions(supportedWallets?: Array<string>): Array<string>;

Wallet.getRewardAddresses(): Promise<any>;

// sign a message
Wallet.signMessage(message: string, onSignMessage?: (signature: string, key: string | undefined) => void, onSignError?: (error: Error) => void, limitNetwork?: NetworkType): Promise<void>;
```

## 💪 Contributing

Please take a look at our [contributing infos](../CONTRIBUTING.md) to familiarise yourself with our guidelines.
