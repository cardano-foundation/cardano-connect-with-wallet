# Changelog

## [0.1.51](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.50...v0.1.51) (2023-04-03)


### Bug Fixes

* add undefined check for wallet as it might not have been injected due to some race conditions which potentially results in [#37](https://github.com/cardano-foundation/cardano-connect-with-wallet/issues/37) ([e05f1b1](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/e05f1b175bf4582def6311300b8a251b2faaea7b))

## [0.1.50](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.49...v0.1.50) (2023-03-17)


### Bug Fixes

* rollup setup after updating the version ([019e714](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/019e714a4ca25623e4488abd0908d931a40a71bf))

## [0.1.49](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.48...v0.1.49) (2023-03-17)


### Features

* add qr code dialog and use peer-connect lib ([b7f3ef8](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/b7f3ef894f197688bafff35fd409ef76f49be384))


### Bug Fixes

* sample code in readme ([f66f25a](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/f66f25a8fdf5d2b37ef94359725e6378b232c0fc))
* upgrade packages ([1e26409](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1e2640955a2d82e2f5e9307c4e0887bd9ca6446a))

## [0.1.48](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.47...v0.1.48) (2023-02-23)


### Features

* **component:** add Lace to default wallets list ([fb0b513](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/fb0b513bb8c5d7edafee69a6de0975216c03bea4))

## [0.1.47](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.46...v0.1.47) (2023-01-20)


### Bug Fixes

* trigger build pipeline for last bug fix by adding emojis to the github actions file ([e1bbaf4](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/e1bbaf453a47848dea95cddae7c6958defda440e))

## [0.1.46](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.45...v0.1.46) (2022-12-03)


### Features

* workaround for NuFi no longer needed ([dd9ac58](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/dd9ac58ae55cb55f1f1c93141419bb869109b73d))

## [0.1.45](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.44...v0.1.45) (2022-11-07)


### Features

* show wallet icon once connected ([de8be89](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/de8be89a19b41ccafc9380ddbfa3dc389a2023ae))

## [0.1.44](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.43...v0.1.44) (2022-10-24)


### Bug Fixes

* flint workaround is not needed anymore ([bb4ce55](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/bb4ce55004a7bd38d92c1ef37e9b33eaffdbe04a))

## [0.1.43](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.42...v0.1.43) (2022-10-21)


### Features

* add a wallet injection listener ([b67cd3e](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/b67cd3e2889f3a4271c48261ce8d808bd01e8ba6))

## [0.1.42](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.41...v0.1.42) (2022-10-20)


### Bug Fixes

* nufi support ([7aecaba](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/7aecaba9b9704696182cf29cf23ea0ef13245711))

## [0.1.41](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.40...v0.1.41) (2022-10-14)


### Bug Fixes

* add ids and use a fallback if title is null ([b3b8c94](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/b3b8c947405be1f8197bdcac0f2fb5258e09496e))

## [0.1.40](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.39...v0.1.40) (2022-10-14)


### Features

* allow component as button title, introduce isConnecting, prevent users from connecting while the component already tries to connect ([abd65d6](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/abd65d6b4e510e85dfed90fae7723f23fcd77479))

## [0.1.39](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.38...v0.1.39) (2022-10-10)


### ⚠ BREAKING CHANGES

* **hooks:** remove error enums and introduce class based errors, allow to limit to specific network type

### Features

* **hooks:** remove error enums and introduce class based errors, allow to limit to specific network type ([0d49611](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/0d49611d315dc970ca48b80aee9b73594041ba09))

## [0.1.38](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.37...v0.1.38) (2022-10-07)


### Bug Fixes

* api for typhon wallet ([2732cd6](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/2732cd6da831669a34441db39ac7743b5bedc9b3))

## [0.1.37](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.36...v0.1.37) (2022-10-04)


### Features

* add polling for new wallets on the window.cardano object to provide a installedWalletExtensions array that is part of the useCardano hook ([ec73247](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/ec732470e076252c69c02f6986e5fa753a5bdbbc))

## [0.1.36](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.35...v0.1.36) (2022-10-03)


### Bug Fixes

* flint wallet does not return a cip30 DataSignature. Implemented a workaround to return a signature from flint ([eb50ecb](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/eb50ecbbc506ada296dd9e498d00b218a722a505))

## [0.1.35](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.34...v0.1.35) (2022-09-30)


### Bug Fixes

* flint mobile connect ([8180672](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/81806721bce894e6eacf66cf1e3eaecd54428a9a))

## [0.1.34](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.33...v0.1.34) (2022-09-29)


### Bug Fixes

* components now also working on mobile ([f48c16d](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/f48c16d463e6edf1e54cfec84ad6c9faeb292945))
* **hook:** connect/disconnect wallet does now work ([01f82bd](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/01f82bdc4122e96532be683e0997209407841c09))

## [0.1.33](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.32...v0.1.33) (2022-09-28)


### Bug Fixes

* **hook:** testnet addresses will now decoded correctly ([3f394c6](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/3f394c6e60e56a7299feb471c562b1b44c54c63d))

## [0.1.32](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.31...v0.1.32) (2022-09-27)


### Features

* add alwaysVisibleWallets to hightlight specific wallets even if they are not installed ([1440470](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1440470e8993db626028119f79d504743b401cf5))
* export types ([03f1839](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/03f1839e9c1ca74c1c2c2acd0e475699928176a6))
* redirect users to chrome store on desktop if a wallet extension has not been installed ([fce1044](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/fce10443dc0ea0f41d1e90931c947417125d3b5f))


### Bug Fixes

* **ConnectWalletList:** css border when using no gap ([3b8d85c](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/3b8d85cee49d1e4b713d596f55154769f8bcf609))

## [0.1.31](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.30...v0.1.31) (2022-09-26)


### ⚠ BREAKING CHANGES

* **cip30:** api fix due to match cip30 specs and remove the deprecated nami functions

### Bug Fixes

* **cip30:** api fix due to match cip30 specs and remove the deprecated nami functions ([ecd485a](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/ecd485a9aae4a6894d9c7610c78a9a8b742a7ec2))

## [0.1.30](https://github.com/cardano-foundation/cardano-connect-with-wallet/compare/v0.1.29...v0.1.30) (2022-09-25)


### Bug Fixes

* missing package-lock ([9726d2f](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/9726d2f095be88f661696875f0e7cf6fd42ecf3c))

## 0.1.29 (2022-09-25)


### ⚠ BREAKING CHANGES

* **button:** add pre and post component, onClick handler for the stake address and an option to hide the action menu
* use observable pattern to share a global state between all useCardano hooks
* custom styles now working due to replacing jss by styled components
* add hooks, refactoring and add new component
* use storybook for testing and developing
* use cip8 and cip30 for login and signing

### Features

* add custom actions for the connect button ([9bf63c8](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/9bf63c80fa56bc51333b1168c5881f225bba0887))
* add disconnect and connect state to the useCardano hook ([1cee38d](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1cee38d3fc3d9442b97034cd44e9765d32e75023))
* add hooks, refactoring and add new component ([e44cf81](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/e44cf8125ead059469f9381a65af52cdf3d7a015))
* add mobile support to list component ([c3896d6](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/c3896d649ca3832fc5adc4e54cab6570818965bd))
* add mobile wallet support for flint ([377e02e](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/377e02e8c824ee093d400a7b0d09768c00380b34))
* add more props for filtering the supported wallets and only display the installed wallets ([5d54dd5](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/5d54dd55909ced7fa292e468c5327c7660131134))
* add onDisconnect callback ([5a704b1](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/5a704b1270a0cabf2a0018d074f62685f4085936))
* allow to pass other classNames ([363c2db](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/363c2db4def9e969af95435de6bf41ca315843be))
* **button:** add pre and post component, onClick handler for the stake address and an option to hide the action menu ([16fdc19](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/16fdc195ac60a768dcd6e236b190eb163bff4789))
* **hook:** add getAvailableWallets function ([7b7e216](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/7b7e216f187e831579dfe53ced2bb3d96161d429))
* **hook:** may filter wallet list and return capitalized wallet name ([5b44f75](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/5b44f7540b7e61705ea76a2ef7452d8ef2c4bf79))
* use cip8 and cip30 for login and signing ([da6cfea](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/da6cfeadb839aa72b5653399d8a9fd68de90272d))
* use observable pattern to share a global state between all useCardano hooks ([b1c2139](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/b1c21391601fb6a32711cd91f81e78b0bfe07c03))
* use storybook for testing and developing ([8fbeb9d](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/8fbeb9deb2d3f66eeb44a3c9d2cd228f224e1bce))
* use styles prop to allow a style override for the components ([0e76bd6](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/0e76bd6deb2d8842e67dc4d7ac155927aac0a4df))
* useCardano reacts to changes in local storage (e.g. disconnect call from other components etc.) ([2a81d45](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/2a81d450be9b90bd8fbac78736d91d77fcffead2))


### Bug Fixes

* add a component folder to fix the export paths ([be6f0a9](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/be6f0a99bd381a5c1bd69c8a1740443ad79a7828))
* add key to custom actions ([3324952](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/3324952c42e57fc21bb88e806a4e6083ff6ef2eb))
* check if cardano is part of the window object ([1e0d54f](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1e0d54f61d2cbca2271c025d43cb1f424da0783b))
* custom styles now working due to replacing jss by styled components ([863c7f7](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/863c7f7a6267c5ee868ba78fadc8d3436447c0e1))
* export of list component ([ef04f58](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/ef04f585020e2b29895bbfa84280ba08c9520452))
* getInstalledWalletExtensions undefined check ([f5add20](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/f5add203a3d8e7f355848e3721be18fa3ad59e22))
* mix primary color with white instead of using an alpha value ([06d9f8a](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/06d9f8ab422d936d541ee5262c32d25a2f7ff3fb))
* remove typhonjs and replaced it with bech32 to prevent webpack 5 issues ([1936ece](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1936ecef1755a759af2800a7af5ab6edf8851377))
* solve css issues ([d2c45c1](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/d2c45c1e195a68dc5078a9da47db8409e411423b))
* use @stricahq/typhonjs for address decoding due to memory issues in the serialization-lib ([d715e36](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/d715e3670679ae955d481b9d0badda7a14580c44))
* use buffer package since built-in Buffer is not available in every environment ([1ed77aa](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/1ed77aac086532e3d069ca723b7a80de0abe2fb0))
* use dispatch event to trigger the event storage listener ([010690e](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/010690e976e0cd1ab1f05fbdc81dd63f52e964f7))
* variable button hover color ([e921ac4](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/e921ac402dad7988a5db2b465472100878de893b))
* wallet connect bug on reconnect because of a wrong internal state ([92447b9](https://github.com/cardano-foundation/cardano-connect-with-wallet/commit/92447b9d9718cc56f6fab079fa9f9ecc75c0dc80))
