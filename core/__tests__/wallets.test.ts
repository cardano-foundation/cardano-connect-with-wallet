import { describe, it, expect } from 'vitest';
import { walletRegistry, getWalletConfig } from '../wallets';

const ALL_WALLETS = [
  'nami',
  'eternl',
  'vespr',
  'begin',
  'yoroi',
  'flint',
  'lace',
  'nufi',
  'gerowallet',
  'typhoncip30',
];

// --------------------------------------------------------------------------
// walletRegistry integrity
// --------------------------------------------------------------------------
describe('walletRegistry', () => {
  it('contains all expected wallets', () => {
    const keys = walletRegistry.map((w) => w.key);
    for (const key of ALL_WALLETS) {
      expect(keys, `"${key}" missing from walletRegistry`).toContain(key);
    }
  });

  it('every entry has a non-empty key and displayName', () => {
    for (const w of walletRegistry) {
      expect(w.key, 'key must be non-empty').toBeTruthy();
      expect(w.displayName, `${w.key} must have displayName`).toBeTruthy();
    }
  });

  it('every key is lowercase', () => {
    for (const w of walletRegistry) {
      expect(w.key).toBe(w.key.toLowerCase());
    }
  });

  it('every Chrome extension entry has both id and name', () => {
    for (const w of walletRegistry.filter((x) => x.chromeExtensionId)) {
      expect(w.chromeExtensionName, `${w.key} has chromeExtensionId but no chromeExtensionName`).toBeTruthy();
    }
  });

  it('CIP-158 wallets have hasCIP158Support: true', () => {
    expect(getWalletConfig('eternl')?.hasCIP158Support).toBe(true);
    expect(getWalletConfig('vespr')?.hasCIP158Support).toBe(true);
  });

  it('non-CIP-158 mobile wallets do not have hasCIP158Support: true', () => {
    expect(getWalletConfig('begin')?.hasCIP158Support).not.toBe(true);
    expect(getWalletConfig('yoroi')?.hasCIP158Support).not.toBe(true);
  });

  it('flint uses mobileDeepLinkPrefix instead of CIP-158', () => {
    const flint = getWalletConfig('flint');
    expect(flint?.mobileDeepLinkPrefix).toBeTruthy();
    expect(flint?.hasCIP158Support).toBeFalsy();
  });

  it('flint is not in nativeWallets (no playStoreUrl / appStoreUrl)', () => {
    const flint = getWalletConfig('flint');
    // Flint navigates via mobileDeepLinkPrefix, not app store URLs
    expect(flint?.playStoreUrl).toBeFalsy();
    expect(flint?.appStoreUrl).toBeFalsy();
  });

  it('mobile wallets with app store URLs have both Play Store and App Store', () => {
    const mobileWithUrls = walletRegistry.filter(
      (w) => w.playStoreUrl || w.appStoreUrl,
    );
    for (const w of mobileWithUrls) {
      expect(w.playStoreUrl, `${w.key} missing playStoreUrl`).toBeTruthy();
      expect(w.appStoreUrl, `${w.key} missing appStoreUrl`).toBeTruthy();
    }
  });

  it('has no duplicate keys', () => {
    const keys = walletRegistry.map((w) => w.key);
    const unique = new Set(keys);
    expect(unique.size).toBe(keys.length);
  });
});

// --------------------------------------------------------------------------
// getWalletConfig
// --------------------------------------------------------------------------
describe('getWalletConfig', () => {
  it('returns config for known wallets', () => {
    for (const key of ALL_WALLETS) {
      expect(getWalletConfig(key), `expected config for "${key}"`).toBeDefined();
    }
  });

  it('is case-insensitive', () => {
    expect(getWalletConfig('ETERNL')).toBe(getWalletConfig('eternl'));
    expect(getWalletConfig('Nami')).toBe(getWalletConfig('nami'));
    expect(getWalletConfig('TyphonCIP30')).toBe(getWalletConfig('typhoncip30'));
  });

  it('returns undefined for an unknown wallet', () => {
    expect(getWalletConfig('totally-unknown-wallet-xyz')).toBeUndefined();
  });

  it('typhoncip30 displayName is Typhon (not TyphonCIP30)', () => {
    expect(getWalletConfig('typhoncip30')?.displayName).toBe('Typhon');
  });

  it('nami shares the lace icon (nami is now part of Lace)', () => {
    const nami = getWalletConfig('nami');
    const lace = getWalletConfig('lace');
    expect(nami?.icon).toBeDefined();
    expect(nami?.icon).toBe(lace?.icon);
  });

  it('eternl has Play Store and App Store URLs', () => {
    const eternl = getWalletConfig('eternl');
    expect(eternl?.playStoreUrl).toContain('play.google.com');
    expect(eternl?.appStoreUrl).toContain('apps.apple.com');
  });

  it('peer-connect entry has an icon but no extension or app store data', () => {
    const pc = getWalletConfig('peer-connect');
    expect(pc?.icon).toBeDefined();
    expect(pc?.chromeExtensionId).toBeUndefined();
    expect(pc?.playStoreUrl).toBeUndefined();
  });
});
