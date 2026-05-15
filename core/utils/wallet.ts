import { bech32 } from 'bech32';
import { Buffer } from 'buffer';
import { getWalletConfig, walletRegistry } from '../wallets';
import { genericWalletIcon } from '../walletIcons';

export { getWalletConfig } from '../wallets';

const isWalletInstalled = (walletName: string) => {
  const cardano = (window as any).cardano;

  if (typeof cardano === 'undefined') {
    return false;
  } else {
    return Object.keys(cardano).includes(walletName);
  }
};

const decodeHexAddress = (hexAddress: string) => {
  hexAddress = hexAddress.toLowerCase();
  const addressType = hexAddress.charAt(0);
  const networkId = Number(hexAddress.charAt(1)) as NetworkId;
  const addressBytes = Buffer.from(hexAddress, 'hex');
  const words = bech32.toWords(addressBytes);
  let prefix;

  if (['e', 'f'].includes(addressType)) {
    if (networkId === NetworkId.MAINNET) {
      prefix = 'stake';
    } else if (networkId === NetworkId.TESTNET) {
      prefix = 'stake_test';
    } else {
      throw new TypeError('Unsupported network type');
    }

    return bech32.encode(prefix, words, 1000);
  } else {
    if (networkId === NetworkId.MAINNET) {
      prefix = 'addr';
    } else if (networkId === NetworkId.TESTNET) {
      prefix = 'addr_test';
    } else {
      throw new TypeError('Unsupported network type');
    }

    return bech32.encode(prefix, words, 1000);
  }
};

export enum NetworkId {
  MAINNET = 1,
  TESTNET = 0,
}

// Mobile wallets: any wallet that has a Play Store / App Store URL or a custom deep-link prefix.
export const mobileWallets: string[] = walletRegistry
  .filter(
    (w) => w.playStoreUrl || w.appStoreUrl || w.mobileDeepLinkPrefix,
  )
  .map((w) => w.key);

// Flint uses its own deep-link scheme; read it from the registry so it stays in sync.
export const flintDeepLink =
  getWalletConfig('flint')?.mobileDeepLinkPrefix ?? '';

export const chromeStoreUrl = 'https://chrome.google.com/webstore/detail/';

// Per-wallet mobile metadata, derived from the registry.
// Only wallets that have App Store or Play Store URLs are included.
export const nativeWallets = walletRegistry
  .filter((w) => w.playStoreUrl || w.appStoreUrl)
  .reduce<
    Record<
      string,
      {
        playStoreUrl: string;
        appStoreUrl: string;
        walletName: string;
        hasCIP158Support: boolean;
      }
    >
  >((acc, w) => {
    acc[w.key] = {
      playStoreUrl: w.playStoreUrl ?? '',
      appStoreUrl: w.appStoreUrl ?? '',
      walletName: w.displayName,
      hasCIP158Support: w.hasCIP158Support ?? false,
    };
    return acc;
  }, {});

// Chrome extension metadata, derived from the registry (uppercase keys for backward compat).
export const chromeWalletExtensions = walletRegistry
  .filter((w) => w.chromeExtensionId && w.chromeExtensionName)
  .reduce<Record<string, { id: string; name: string }>>((acc, w) => {
    const key = w.key.toUpperCase().replace('CIP30', '').replace('-', '');
    acc[key] = { id: w.chromeExtensionId!, name: w.chromeExtensionName! };
    return acc;
  }, {});

export const generateCip158DeepLink = (pageUrl?: string): string => {
  const target = pageUrl ?? window.location.href;
  return `web+cardano://browse/v1?uri=${encodeURIComponent(target)}`;
};

const getWalletIcon = (walletName: string) => {
  const cardano = (window as any).cardano || {};
  const config = getWalletConfig(walletName);

  if (config?.icon) {
    return config.icon;
  }

  if (cardano[walletName.toLowerCase()]?.icon) {
    return cardano[walletName.toLowerCase()].icon;
  }

  return genericWalletIcon;
};

export { getWalletIcon, decodeHexAddress, isWalletInstalled };
