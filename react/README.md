# Cardano Connect with Wallet - React

<p align="left">
<img alt="Tests" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/test.yml?label=Tests&style=for-the-badge" />
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

React hooks and components for connecting Cardano wallets to dApps. Supports desktop browser extensions and mobile native wallets with built-in [CIP-8](https://cips.cardano.org/cip/CIP-0008), [CIP-30](https://cips.cardano.org/cip/CIP-0030), [CIP-45](https://github.com/cardano-foundation/CIPs/pull/395), and [CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058) support.

<img src="https://user-images.githubusercontent.com/1525818/192223749-205be194-7707-4726-9ef1-72d0c2c7f903.gif" width="600" />

## 🚀 Getting Started

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet
```

For live examples see the [storybook playground](https://cardano-foundation.github.io/cardano-connect-with-wallet/react-storybook).

## 🎨 Components

### ConnectWalletButton

A single button that opens a dropdown listing available wallets. On mobile it handles deep links and app store redirects automatically.

```tsx
import { ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';

<ConnectWalletButton
  supportedWallets={['Eternl', 'Nami', 'Yoroi', 'Vespr', 'Begin']}
  onConnect={(walletName) => console.log('connected:', walletName)}
  onDisconnect={() => console.log('disconnected')}
/>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string \| ReactNode` | `'Connect Wallet'` | Button label when no wallet is connected |
| `supportedWallets` | `string[]` | Eternl, Nami, Yoroi... | Wallets shown in the dropdown |
| `showUnavailableWallets` | `UnavailableWalletVisibility` | `SHOW_UNAVAILABLE_ON_MOBILE` | Controls which wallets are listed |
| `alwaysVisibleWallets` | `string[]` | `[]` | Wallets always shown regardless of install state |
| `primaryColor` | `string` | `'#0538AF'` | Accent color for the button and menu |
| `borderRadius` | `number` | `15` | Border radius in pixels |
| `showAccountBalance` | `boolean` | `false` | Show ADA balance instead of stake address |
| `limitNetwork` | `NetworkType` | — | Restrict to `MAINNET` or `TESTNET` |
| `peerConnectEnabled` | `boolean` | `true` | Show the CIP-45 P2P QR option |
| `cip158Enabled` | `boolean` | `true` | Use CIP-158 deep links for supported mobile wallets |
| `dAppName` | `string` | `'Awesome DApp'` | dApp name shown in the CIP-45 QR dialog |
| `dAppUrl` | `string` | — | dApp URL used for CIP-45 peer identity |
| `extensions` | `number[]` | — | CIP extension numbers to request on connect (e.g. `[95]`) |
| `message` | `string` | — | If set, adds a "Sign message" action when connected |
| `customActions` | `Action[]` | `[]` | Extra menu items shown when connected |
| `hideActionMenu` | `boolean` | `false` | Hide the action dropdown when connected |
| `customCSS` | `string` | — | Extra CSS applied to the outer wrapper |
| `onConnect` | `(walletName: string) => void` | — | Called after a successful connection |
| `onDisconnect` | `() => void` | — | Called after disconnect |
| `onSignMessage` | `(signature, key) => void` | — | Called after a successful message signature |
| `onConnectError` | `(walletName, error, level) => void` | `alert` | Called when connection fails |

### ConnectWalletList

A flat list of wallet buttons, useful when you want to embed the wallet picker inline rather than inside a dropdown.

```tsx
import { ConnectWalletList } from '@cardano-foundation/cardano-connect-with-wallet';

<ConnectWalletList
  borderRadius={15}
  gap={12}
  primaryColor="#0538AF"
  onConnect={onConnectWallet}
  customCSS={`
    font-family: Helvetica Light, sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    width: 164px;
    & > span { padding: 5px 16px; }
  `}
/>
```

Accepts the same props as `ConnectWalletButton` minus `label`, `showAccountBalance`, `hideActionMenu`, `message`, `customActions`, `beforeComponent`, and `afterComponent`.

## 🪝 useCardano Hook

`useCardano` is the low-level hook used by both components. Use it when you need direct access to wallet state or want to build a fully custom UI.

```tsx
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

const { 
  isEnabled,
  isConnected,
  isConnecting,
  enabledWallet,
  stakeAddress,
  usedAddresses,
  unusedAddresses,
  accountBalance,
  installedExtensions,
  connect,
  disconnect,
  signMessage,
} = useCardano({ limitNetwork: NetworkType.MAINNET });

// Connect by wallet name
await connect('eternl', onSuccess, onError, [{ cip: 95 }]);

// Disconnect
disconnect();

// Sign a message (CIP-8)
signMessage('Hello Cardano', (signature, key) => console.log(signature));
```

## 📱 Mobile Wallets

On mobile devices the library automatically adapts its behavior:

**Wallets with [CIP-158](https://github.com/cardano-foundation/CIPs/pull/1058) support** (Eternl, Vespr): tapping the wallet fires a `web+cardano://browse/v1?uri=<encoded_url>` deep link. If the wallet app is installed it opens its in-app browser with the CIP-30 API already injected. If the app is not installed the user is redirected to the App Store or Play Store after a 2.5 s timeout.

**Other mobile wallets** (Begin, Yoroi, Flint): tapping redirects directly to the appropriate app store if the wallet is not already injected.

To opt out of CIP-158 deep links set `cip158Enabled={false}` on either component.

## 🔗 CIP-45: P2P Wallet Connection

CIP-45 lets a mobile wallet connect to a desktop dApp by scanning a QR code. Both components show a "P2P Wallet" entry in the wallet list when `peerConnectEnabled` is `true` (the default). Clicking it opens a modal with a QR code the user scans with their mobile wallet.

```tsx
<ConnectWalletButton
  peerConnectEnabled={true}
  dAppName="My dApp"
  dAppUrl="https://my-dapp.io"
  peerConnectSubtitle="Scan with a CIP-45 compatible wallet such as Eternl"
/>
```

## ℹ️ SSR with Next.js

This library accesses `window` and `localStorage` which are not available during server-side rendering. Use [dynamic imports](https://nextjs.org/learn/seo/dynamic-import-components) with `ssr: false` for both components and the hook.

```tsx
const ConnectWalletButton = dynamic(
  () =>
    import('@cardano-foundation/cardano-connect-with-wallet').then(
      (mod) => mod.ConnectWalletButton
    ),
  { ssr: false }
);
```

## 💪 Contributing

Please have a look at our [contributing infos](CONTRIBUTING.md) to become familiar with our guidelines. There is also a short description for our development setup as we use [Storybook](https://storybook.js.org/) for testing, playing around and for supporting the development process.
