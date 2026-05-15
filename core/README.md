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

### Mobile Wallet Support

The core package exports helpers for mobile wallet detection and deep linking.

```ts
import {
  checkIsMobile,
  mobileWallets,
  nativeWallets,
  generateCip158DeepLink,
} from '@cardano-foundation/cardano-connect-with-wallet-core';

// true when running on a mobile device (Android / iOS)
const isMobile = checkIsMobile();

// list of wallet names that have a native mobile app
// ['flint', 'eternl', 'vespr', 'begin', 'yoroi']
console.log(mobileWallets);

// per-wallet metadata including app store URLs and CIP-158 support flag
// {
//   eternl: { playStoreUrl, appStoreUrl, walletName, hasCIP158Support: true },
//   vespr:  { playStoreUrl, appStoreUrl, walletName, hasCIP158Support: true },
//   begin:  { playStoreUrl, appStoreUrl, walletName, hasCIP158Support: false },
//   yoroi:  { playStoreUrl, appStoreUrl, walletName, hasCIP158Support: false },
// }
console.log(nativeWallets);
```

#### CIP-158 Deep Links

[CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058) defines a `web+cardano://browse/v1?uri=<encoded_url>` deep link that opens the current dApp page inside a wallet's in-app browser, giving the wallet's CIP-30 API direct access to the page.

```ts
// Generates the CIP-158 deep link for the given URL (defaults to window.location.href)
const deepLink = generateCip158DeepLink('https://my-dapp.io/swap');
// → 'web+cardano://browse/v1?uri=https%3A%2F%2Fmy-dapp.io%2Fswap'

window.location.href = deepLink;
```

Wallets whose `hasCIP158Support` flag is `true` (currently **Eternl** and **Vespr**) are automatically offered this flow by the React components before falling back to an app store redirect.

### Wallet Availability Utilities

```ts
import {
  estimateAvailableWallets,
  UnavailableWalletVisibility,
  getWalletIcon,
  isWalletInstalled,
  formatSupportedWallets,
} from '@cardano-foundation/cardano-connect-with-wallet-core';

// Returns the filtered list of wallets to display
const wallets = estimateAvailableWallets(
  ['Eternl', 'Nami', 'Yoroi'],
  UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE, // default
  [], // alwaysVisibleWallets
  installedExtensions,
);

// UnavailableWalletVisibility options:
// HIDE_UNAVAILABLE             – show only installed wallets
// SHOW_UNAVAILABLE             – show all wallets regardless of device
// SHOW_UNAVAILABLE_ON_MOBILE   – show all on mobile, only installed on desktop

// Returns a base64 data-URI icon for the given wallet name
const icon = getWalletIcon('eternl');

// Returns true when window.cardano[walletName] exists
const installed = isWalletInstalled('eternl');

// Returns a human-readable comma-separated list e.g. "Eternl, Nami, Yoroi"
const label = formatSupportedWallets(['Eternl', 'Nami', 'Yoroi']);
```

### Error Classes

All errors thrown by the `Wallet` class are typed and can be caught individually:

```ts
import {
  WalletConnectError,
  WrongNetworkTypeError,
  WalletNotCip30CompatibleError,
  WalletNotInstalledError,
  WalletExtensionNotFoundError,
  ExtensionNotInjectedError,
  EnablementFailedError,
} from '@cardano-foundation/cardano-connect-with-wallet-core';

try {
  await Wallet.connectToWallet('eternl', NetworkType.MAINNET);
} catch (e) {
  if (e instanceof WrongNetworkTypeError) {
    // wallet is on a different network (e.g. testnet vs mainnet)
  } else if (e instanceof WalletExtensionNotFoundError) {
    // wallet extension / app not available in the browser
  }
}
```

### Types & Enums

```ts
import {
  NetworkType,           // MAINNET | TESTNET
  UnavailableWalletVisibility,
  Extension,             // { cip: number }
  Cip95Api,             // governance extension (CIP-95)
  Cip103Api,            // bulk transaction signing (CIP-103)
} from '@cardano-foundation/cardano-connect-with-wallet-core';
```

## 💪 Contributing

Please take a look at our [contributing infos](../CONTRIBUTING.md) to familiarise yourself with our guidelines.
