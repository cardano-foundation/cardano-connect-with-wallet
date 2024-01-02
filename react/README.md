# Cardano Connect with Wallet - React

<p align="left">
<img alt="Tests" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/test.yml?label=Tests&style=for-the-badge" />
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

This repository aims to provide useful hooks and React components to simplify the cardano dapp integration e.g. to connect browser wallets, fetch addresses and provide signing ([CIP 8](https://cips.cardano.org/cip/CIP-0008), [CIP 30](https://cips.cardano.org/cip/CIP-0030)).

<img src="https://user-images.githubusercontent.com/1525818/192223749-205be194-7707-4726-9ef1-72d0c2c7f903.gif" width="600" />

## 🚀 Getting Started

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet
```

## React
For more detailed information and usage examples, please refer to the [storybook playground](https://cardano-foundation.github.io/cardano-connect-with-wallet/react-storybook).

### 🪝 Hooks

`useCardano` allows you to interact with wallets supporting CIP 30 and CIP 8. It's a useful wrapper of the `window.cardano` object and manages state information within the local storage.

```js
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

const YourGreatDApp = (props) => {
    const { 
        isEnabled,
        isConnected,
        enabledWallet,
        stakeAddress,
        signMessage,
        connect,
        disconnect 
    } = useCardano();

    const onConnect = () => alert('Successfully connected!');

    return (
        <>
            { isConnected ?
                <span>{ stakeAddress }</span> :
                <button
                    onClick={() => connect(
                        'wallet_name_with_cip30_support',
                        onConnect
                    )}>Connect</button>
            }
            <NiceOtherComponents>...</NiceOtherComponents>
        </>
    )
}

```

### 🎨 Components

This library provides ready to use Components for connecting, disconnect and signing.

```js
import { ConnectWalletList, ConnectWalletButton } from '@cardano-foundation/cardano-connect-with-wallet';


<ConnectWalletList
    borderRadius={15}
    gap={12}
    primaryColor="#0538AF"
    onConnect={onConnectWallet}
    customCSS={`
        font-family: Helvetica Light,sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        width: 164px;
        & > span { padding: 5px 16px; }
    `}
/>

<ConnectWalletButton
    message="Please sign Augusta Ada King, Countess of Lovelace"
    onSignMessage={onSign}
    onConnect={onConnect}
/>
```

### ℹ️ SSR with Next.js

This library tries to get access to the `window` object which is not present on the server-side when Next.js pre-renders the page.
The solution here is to use [dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import).
One should use dynamic imports for both the components and hooks.

An example of using the `ConnectWalletList` with Next.js could look like the following:

```js
const ConnectWalletList = dynamic(
  () =>
    import('@cardano-foundation/cardano-connect-with-wallet').then(
      (mod) => mod.ConnectWalletList
    ),
  {
    ssr: false,
  }
);
```

## 💪 Contributing

Please have a look at our [contributing infos](CONTRIBUTING.md) to become familiar with our guidelines. There is also a short description for our development setup as we use [Storybook](https://storybook.js.org/) for testing, playing around and for supporting the development process.
