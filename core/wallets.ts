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
    key: 'peer-connect',
    displayName: 'P2P Wallet',
    icon: peer_connectIcon,
  },
];

export const getWalletConfig = (key: string): WalletConfig | undefined =>
  walletRegistry.find((w) => w.key === key.toLowerCase());
