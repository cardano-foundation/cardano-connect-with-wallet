/**
 * Wallet Registry — the single file to edit when adding or updating wallet support.
 *
 * ## How to add your wallet
 *
 * 1. Add an entry to `walletRegistry` below.
 * 2. Fill in every field that applies to your wallet (extension, mobile, or both).
 * 3. For the `icon` field, provide a base64 data URI (e.g. `data:image/svg+xml;base64,...`
 *    or `data:image/png;base64,...`).  If you leave it blank the library falls back to
 *    the icon injected by the wallet extension itself (`window.cardano[key].icon`).
 * 4. Open a pull request — no other files need to change.
 *
 * ### Field reference
 *
 * | Field                  | Required | Description                                                       |
 * |------------------------|----------|-------------------------------------------------------------------|
 * | `key`                  | yes      | Lowercase key used in `window.cardano[key]` (e.g. `"eternl"`)    |
 * | `displayName`          | yes      | Human-readable name shown in the UI (e.g. `"Eternl"`)            |
 * | `icon`                 | –        | Fallback icon as a data URI; injected icon used when omitted      |
 * | `chromeExtensionId`    | –        | Chrome Web Store extension ID                                     |
 * | `chromeExtensionName`  | –        | URL path slug used in the Chrome Web Store link                   |
 * | `playStoreUrl`         | –        | Google Play Store URL for the mobile app                         |
 * | `appStoreUrl`          | –        | Apple App Store URL for the mobile app                           |
 * | `hasCIP158Support`     | –        | `true` if the wallet supports CIP-158 in-app browser deep links  |
 * | `mobileDeepLinkPrefix` | –        | Custom deep-link prefix (legacy Flint-style); appended with the  |
 * |                        |          | percent-encoded current page URL                                  |
 */

import {
  flintIcon,
  yoroiIcon,
  eternlIcon,
  laceIcon,
  namiIcon,
  peer_connectIcon,
  beginIcon,
  vesprIcon,
} from './walletIcons';

export type WalletConfig = {
  key: string;
  displayName: string;
  icon?: string;

  // Desktop / browser extension
  chromeExtensionId?: string;
  chromeExtensionName?: string;

  // Mobile
  playStoreUrl?: string;
  appStoreUrl?: string;
  hasCIP158Support?: boolean;
  mobileDeepLinkPrefix?: string;
};

export const walletRegistry: WalletConfig[] = [
  {
    key: 'nami',
    displayName: 'Nami',
    icon: namiIcon,
    chromeExtensionId: 'lpfcbjknijpeeillifnkikgncikgfhdo',
    chromeExtensionName: 'nami',
  },
  {
    key: 'typhoncip30',
    displayName: 'Typhon',
    chromeExtensionId: 'kfdniefadaanbjodldohaedphafoffoh',
    chromeExtensionName: 'typhon-wallet',
  },
  {
    key: 'gerowallet',
    displayName: 'GeroWallet',
    chromeExtensionId: 'bgpipimickeadkjlklgciifhnalhdjhe',
    chromeExtensionName: 'gerowallet',
  },
  {
    key: 'nufi',
    displayName: 'NuFi',
    chromeExtensionId: 'gpnihlnnodeiiaakbikldcihojploeca',
    chromeExtensionName: 'gerowallet',
  },
  {
    key: 'lace',
    displayName: 'Lace',
    icon: laceIcon,
    chromeExtensionId: 'gafhhkghbfjjkeiendhlofajokpaflmk',
    chromeExtensionName: 'lace',
  },
  {
    key: 'eternl',
    displayName: 'Eternl',
    icon: eternlIcon,
    chromeExtensionId: 'kmhcihpebfmpgmihbkipmjlmmioameka',
    chromeExtensionName: 'eternl',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=io.ccvault.v1.main',
    appStoreUrl:
      'https://apps.apple.com/de/app/eternl-by-tastenkunst/id1603854385',
    hasCIP158Support: true,
  },
  {
    key: 'vespr',
    displayName: 'Vespr',
    icon: vesprIcon,
    chromeExtensionId: 'bedogdpgdnifilpgeianmmdabklhfkcn',
    chromeExtensionName: 'vespr',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=art.nft_craze.gallery.main&utm_source=vespr_website',
    appStoreUrl:
      'https://apps.apple.com/us/app/vespr-cardano-wallet/id1565749376',
    hasCIP158Support: true,
  },
  {
    key: 'begin',
    displayName: 'Begin',
    icon: beginIcon,
    chromeExtensionId: 'nhbicdelgedinnbcidconlnfeionhbml',
    chromeExtensionName: 'begin',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=is.begin.app',
    appStoreUrl:
      'https://apps.apple.com/us/app/begin-bitcoin-cardano-wallet/id1642488837',
    hasCIP158Support: false,
  },
  {
    key: 'yoroi',
    displayName: 'Yoroi',
    icon: yoroiIcon,
    chromeExtensionId: 'ffnbelfdoeiohenkjibnmadjiehjhajb',
    chromeExtensionName: 'yoroi',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.emurgo',
    appStoreUrl:
      'https://apps.apple.com/us/app/emurgos-yoroi-cardano-wallet/id1447326389',
    hasCIP158Support: false,
  },
  {
    key: 'flint',
    displayName: 'Flint',
    icon: flintIcon,
    chromeExtensionId: 'hnhobjmcibchnmglfbldbfabcgaknlkj',
    chromeExtensionName: 'flint-wallet',
    mobileDeepLinkPrefix: 'https://flint-wallet.app.link/browse?dappUrl=',
  },
  {
    key: '1am',
    displayName: '1AM',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9IiMwMDAiLz48cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMiAzMikgc2NhbGUoMikiIGZpbGw9IiNmZmYiIGQ9Ik0yMi4zNDg3IDEuMzQ4NzZDMjkuODA2NyA0LjYxNzY4IDMzLjY5MTYgMTMuMTA5OSAzMS4wODg2IDIxLjAxNzFDMjguMzI3MyAyOS40MDUzIDE5LjMxIDMzLjk1OTMgMTAuOTQ4NiAzMS4xODg1QzIuNTg3MTUgMjguNDE3NyAtMS45NTI4MiAxOS4zNzExIDAuODA4NTQxIDEwLjk4MjlDMy40MDkxIDMuMDgzMTggMTEuNTU4MSAtMS40MTU5MSAxOS40ODI1IDAuNDAxMjI0TDE4LjU1NTQgMy4yMTczOUMxMi4xODY5IDEuOTA0OTUgNS42ODggNS41Njc0NSAzLjYwMDY3IDExLjkwODFDMS4zNTIxMSAxOC43Mzg2IDUuMDYyMDUgMjYuMTMxMSAxMS44NzA3IDI4LjM4NzRDMTguNjc5MyAzMC42NDM2IDI2LjA0ODIgMjYuOTIxMyAyOC4yOTY3IDIwLjA5MDlDMzAuMzg2NSAxMy43NDI3IDI3LjMzMDMgNi45MDkyNCAyMS40MjE4IDQuMTY0NDFMMjIuMzQ4NyAxLjM0ODc2Wk0yMC4wMjY4IDMuNjExNjJDMjAuNTA3NiAzLjc3MDk1IDIwLjk3MjkgMy45NTU4OCAyMS40MjE4IDQuMTY0NDFMMTYuOTAwMyAxNy44OTk0TDE0LjAzNDcgMTYuOTQ5OEwxOC41NTU0IDMuMjE3MzlDMTkuMDQ3MyAzLjMxODc4IDE5LjUzODUgMy40NDk4MSAyMC4wMjY4IDMuNjExNjJaIi8+PC9zdmc+Cg==',
    chromeExtensionId: 'bphnkdkcnfhompoegfpgnkidcjfbojjp',
    chromeExtensionName: '1am',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.webisoft.oneam',
    appStoreUrl: 'https://apps.apple.com/app/id6761093596',
    hasCIP158Support: false,
  },
  {
    key: 'peer-connect',
    displayName: 'P2P Wallet',
    icon: peer_connectIcon,
  },
];

export const getWalletConfig = (key: string): WalletConfig | undefined =>
  walletRegistry.find((w) => w.key === key.toLowerCase());
