# Cardano connect with wallet

[![Release](https://github.com/cardano-foundation/cardano-connect-with-wallet/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/cardano-foundation/cardano-connect-with-wallet/actions/workflows/release.yml)

This repository aims to provide useful hooks and React components to simplify the cardano dapp integration e.g. to connect browser wallets, fetch addresses and provide signing ([CIP 8](https://cips.cardano.org/cips/cip8/), [CIP 30](https://cips.cardano.org/cips/cip30/)).

<img src="https://user-images.githubusercontent.com/1525818/192165811-9a2c68ab-e1cd-4458-a879-3dad15d854fa.gif" width="600" />

## 🚀 Getting Started

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet
```

## 🪝 Hooks

`useCardano` allows you to interact with wallets supporting CIP 30 and CIP 8. It's a useful wrapper of the `window.cardano` object and manages state information within the local storage.

```js
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';

const YourGreatDApp = (props) => {
    { isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect } = useCardano();

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

## 🎨 Components

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

## 💪 Contributing

Please have a look at our [contributing infos](CONTRIBUTING.md) to become familiar with our guidelines. There is also a short description for our development setup as we use [Storybook](https://storybook.js.org/) for testing, playing around and for supporting the development process.
