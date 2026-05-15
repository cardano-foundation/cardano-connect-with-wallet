# Cardano Connect with Wallet

<p align="left">
<img alt="Tests" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/test.yml?label=Tests&style=for-the-badge" />
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

This repository provides JavaScript/TypeScript helpers and React components that make it easy to connect Cardano wallets to dApps, on both desktop and mobile.

- **[core](./core/)**: framework-independent helpers and utilities (zero React dependency)
- **[react](./react/)**: `ConnectWalletButton` and `ConnectWalletList` components plus a `useCardano` hook

<img src="https://user-images.githubusercontent.com/1525818/192223749-205be194-7707-4726-9ef1-72d0c2c7f903.gif" width="600" />

## ✨ Features

| Feature | Description |
|---|---|
| [CIP-8](https://cips.cardano.org/cip/CIP-0008) | Message signing |
| [CIP-30](https://cips.cardano.org/cip/CIP-0030) | Web wallet bridge (connect, sign, submit) |
| [CIP-45](https://github.com/cardano-foundation/CIPs/pull/395) | P2P wallet connection via QR code (mobile ↔ desktop) |
| [CIP-95](https://cips.cardano.org/cip/CIP-0095) | Governance extension |
| [CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058) | Mobile deep links: open the dApp inside the wallet's in-app browser |

### Supported Wallets

**Desktop (browser extension)**
Eternl · Nami · Yoroi · Typhon · Flint · NuFi · Lace · GeroWallet · Vespr · Begin

**Mobile (native app)**
Eternl · Vespr · Begin · Yoroi · Flint

Mobile wallets that implement [CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058) (currently **Eternl** and **Vespr**) are opened via a `web+cardano://` deep link so the wallet's in-app browser loads the dApp directly. For other mobile wallets the user is redirected to the App Store or Play Store if the app is not already installed.

## 🚀 Getting Started

### React

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet
```

```tsx
import { ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';

// Desktop + mobile, CIP-158 deep links enabled by default
<ConnectWalletButton
  supportedWallets={['Eternl', 'Nami', 'Yoroi', 'Vespr']}
  onConnect={(walletName) => console.log('connected:', walletName)}
/>

// Opt out of CIP-158 deep links
<ConnectWalletButton cip158Enabled={false} />
```

For detailed prop documentation and live examples see the [storybook playground](https://cardano-foundation.github.io/cardano-connect-with-wallet/react-storybook) and the [react module](./react/).

### Core (framework-independent)

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet-core
```

```ts
import { Wallet, generateCip158DeepLink, checkIsMobile } from '@cardano-foundation/cardano-connect-with-wallet-core';

// Generate a CIP-158 deep link for the current page
const deepLink = generateCip158DeepLink();
// → 'web+cardano://browse/v1?uri=https%3A%2F%2Fmy-dapp.io%2F...'

// Connect a wallet by name
await Wallet.connectToWallet('eternl', NetworkType.MAINNET);
```

Full API reference is available in the [core module](./core/).

## Adding a Wallet

Most of the work is in two files:

| File | What to do |
|---|---|
| [core/wallets.ts](./core/wallets.ts) | Add a registry entry with all wallet metadata |
| [core/walletIcons.ts](./core/walletIcons.ts) | Add the fallback icon as a `data:` URI (optional but recommended) |

No other file needs to change.

### Steps

1. **(Optional) Add your icon to `core/walletIcons.ts`**

   Paste your icon as a base64-encoded `data:` URI and export it. Keeping icons in this file avoids cluttering the registry with large strings.

   ```ts
   export const myWalletIcon = `data:image/svg+xml;base64,...`;
   ```

   You can skip this step and inline the data URI directly in the registry entry instead, or leave the `icon` field blank and the library will fall back to the icon injected by the wallet extension itself (`window.cardano[key].icon`).

2. **Add an entry to `walletRegistry` in `core/wallets.ts`:**

   ```ts
   import { myWalletIcon } from './walletIcons';

   // inside walletRegistry:
   {
     // Required
     key: 'mywallet',          // must match window.cardano[key] (lowercase)
     displayName: 'My Wallet', // shown in the UI

     icon: myWalletIcon,       // from walletIcons.ts (or inline data URI, or omit)

     // Desktop browser extension
     chromeExtensionId: 'abcdefghijklmnopqrstuvwxyz012345',
     chromeExtensionName: 'my-wallet', // Chrome Web Store URL slug

     // Mobile app
     playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mywallet',
     appStoreUrl:  'https://apps.apple.com/app/my-wallet/id000000000',
     hasCIP158Support: true,  // true if your app handles web+cardano:// deep links
   }
   ```

3. **Open a pull request.** The Chrome Store redirect, mobile deep links, and app store fallback all derive automatically from the registry entry.

### Field reference

| Field | Required | Description |
|---|---|---|
| `key` | yes | Lowercase key in `window.cardano` (e.g. `"eternl"`) |
| `displayName` | yes | Human-readable wallet name shown in the UI |
| `icon` | no | Fallback icon as a `data:image/...;base64,...` URI; the injected `window.cardano[key].icon` is used when omitted |
| `chromeExtensionId` | no | Chrome Web Store extension ID |
| `chromeExtensionName` | no | URL path slug for the Chrome Web Store link |
| `playStoreUrl` | no | Google Play Store URL for the mobile app |
| `appStoreUrl` | no | Apple App Store URL for the mobile app |
| `hasCIP158Support` | no | `true` if the app handles `web+cardano://browse/v1?uri=...` deep links ([CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058)) |
| `mobileDeepLinkPrefix` | no | Custom deep-link prefix (legacy); the current page URL is percent-encoded and appended |

### How mobile deep links work

When a user on a mobile device taps a wallet button:

1. If the wallet extension is already injected (in-app browser), it connects directly.
2. If `mobileDeepLinkPrefix` is set, the user is redirected to that prefix with the current URL appended (used by Flint).
3. If `hasCIP158Support: true` and `cip158Enabled` is not set to `false` on the component, a `web+cardano://browse/v1?uri=<encoded_url>` deep link is fired. If the wallet app opens within 2.5 s the app store redirect is cancelled; otherwise the user is sent to the Play Store or App Store.
4. Otherwise the user is redirected straight to the Play Store or App Store.

## 💪 Contributing

Please have a look at our [contributing infos](CONTRIBUTING.md) to become familiar with our guidelines. There is also a short description for our development setup as we use [Storybook](https://storybook.js.org/) for testing, playing around and for supporting the development process.
