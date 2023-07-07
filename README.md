# Cardano connect with wallet

<p align="left">
<img alt="Tests" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/test.yml?label=Tests&style=for-the-badge" />
<img alt="Release" src="https://img.shields.io/github/actions/workflow/status/cardano-foundation/cardano-connect-with-wallet/release.yml?label=Release&style=for-the-badge" />
<a href="https://conventionalcommits.org"><img alt="conventionalcommits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&style=for-the-badge" /></a>
<a href="https://discord.gg/4WVNHgQ7bP"><img alt="Discord" src="https://img.shields.io/discord/1022471509173882950?style=for-the-badge"></a>
</p>

This repository aims to provide useful JavaScript and TypeScript functions to simplify the dApp developement. Those framework-independent helpers are located in the [core module](./core/).

Please take a look into the [react module](./react/) if you are looking for React components and hooks to connect browser wallets, fetch addresses and provide signing ([CIP 8](https://cips.cardano.org/cips/cip8/), [CIP 30](https://cips.cardano.org/cips/cip30/)).

<img src="https://user-images.githubusercontent.com/1525818/192223749-205be194-7707-4726-9ef1-72d0c2c7f903.gif" width="600" />

## 🚀 Getting Started

### React

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet
```

For more detailed information and usage examples, please refer to the [storybook playground](https://cardano-foundation.github.io/cardano-connect-with-wallet/react-storybook).

A basic description is also available in the [react module](./react/).

### Core

```zsh
npm i @cardano-foundation/cardano-connect-with-wallet-core
```

Import examples and a description of the `Wallet` module are available in the [core module](./core/).

## 💪 Contributing

Please have a look at our [contributing infos](CONTRIBUTING.md) to become familiar with our guidelines. There is also a short description for our development setup as we use [Storybook](https://storybook.js.org/) for testing, playing around and for supporting the development process.
