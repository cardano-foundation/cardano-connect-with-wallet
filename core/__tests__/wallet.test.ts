import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  generateCip158DeepLink,
  mobileWallets,
  nativeWallets,
  flintDeepLink,
  chromeStoreUrl,
  isWalletInstalled,
} from '../utils/wallet';

// --------------------------------------------------------------------------
// generateCip158DeepLink
// --------------------------------------------------------------------------
describe('generateCip158DeepLink', () => {
  it('produces the correct CIP-158 scheme', () => {
    const result = generateCip158DeepLink('https://my-dapp.io/');
    expect(result.startsWith('web+cardano://browse/v1?uri=')).toBe(true);
  });

  it('percent-encodes the full URL', () => {
    const url = 'https://my-dapp.io/swap?ref=abc#top';
    expect(generateCip158DeepLink(url)).toBe(
      `web+cardano://browse/v1?uri=${encodeURIComponent(url)}`,
    );
  });

  it('correctly encodes a URL containing a port and local IP', () => {
    const url = 'http://192.168.178.73:6006/iframe.html';
    expect(generateCip158DeepLink(url)).toBe(
      `web+cardano://browse/v1?uri=${encodeURIComponent(url)}`,
    );
  });

  it('encodes the colon in the port so wallets never see a raw colon', () => {
    const result = generateCip158DeepLink('http://localhost:3000/app');
    // The uri= value must not contain an unencoded colon after the scheme
    const uriValue = result.replace('web+cardano://browse/v1?uri=', '');
    const decoded = decodeURIComponent(uriValue);
    expect(decoded).toBe('http://localhost:3000/app');
    // Raw colon after the port in the encoded string would appear as %3A
    expect(uriValue).toContain('%3A');
  });

  it('falls back to window.location.href when no argument is passed', () => {
    vi.stubGlobal('window', { location: { href: 'https://test-dapp.io/' } });
    const result = generateCip158DeepLink();
    expect(result).toBe(
      `web+cardano://browse/v1?uri=${encodeURIComponent('https://test-dapp.io/')}`,
    );
    vi.unstubAllGlobals();
  });
});

// --------------------------------------------------------------------------
// mobileWallets
// --------------------------------------------------------------------------
describe('mobileWallets', () => {
  it('includes all expected mobile wallets', () => {
    for (const key of ['eternl', 'vespr', 'begin', 'yoroi', 'flint']) {
      expect(mobileWallets, `expected "${key}" in mobileWallets`).toContain(key);
    }
  });

  it('does not include desktop-only wallets', () => {
    for (const key of ['nami', 'lace', 'nufi', 'typhoncip30', 'gerowallet']) {
      expect(mobileWallets, `"${key}" should not be in mobileWallets`).not.toContain(key);
    }
  });

  it('contains only lowercase keys', () => {
    for (const key of mobileWallets) {
      expect(key).toBe(key.toLowerCase());
    }
  });
});

// --------------------------------------------------------------------------
// nativeWallets
// --------------------------------------------------------------------------
describe('nativeWallets', () => {
  it('includes eternl, vespr, begin and yoroi', () => {
    for (const key of ['eternl', 'vespr', 'begin', 'yoroi']) {
      expect(nativeWallets[key], `expected "${key}" entry in nativeWallets`).toBeDefined();
    }
  });

  it('eternl has hasCIP158Support: true', () => {
    expect(nativeWallets['eternl'].hasCIP158Support).toBe(true);
  });

  it('vespr has hasCIP158Support: true', () => {
    expect(nativeWallets['vespr'].hasCIP158Support).toBe(true);
  });

  it('begin has hasCIP158Support: false', () => {
    expect(nativeWallets['begin'].hasCIP158Support).toBe(false);
  });

  it('yoroi has hasCIP158Support: false', () => {
    expect(nativeWallets['yoroi'].hasCIP158Support).toBe(false);
  });

  it('every entry has playStoreUrl and appStoreUrl', () => {
    for (const [key, wallet] of Object.entries(nativeWallets)) {
      expect(wallet.playStoreUrl, `${key} missing playStoreUrl`).toBeTruthy();
      expect(wallet.appStoreUrl, `${key} missing appStoreUrl`).toBeTruthy();
    }
  });

  it('every entry has a non-empty walletName', () => {
    for (const [key, wallet] of Object.entries(nativeWallets)) {
      expect(wallet.walletName, `${key} missing walletName`).toBeTruthy();
    }
  });

  it('flint is NOT in nativeWallets (it uses mobileDeepLinkPrefix instead)', () => {
    expect(nativeWallets['flint']).toBeUndefined();
  });
});

// --------------------------------------------------------------------------
// flintDeepLink
// --------------------------------------------------------------------------
describe('flintDeepLink', () => {
  it('is the Flint browse deep link base URL', () => {
    expect(flintDeepLink).toBe('https://flint-wallet.app.link/browse?dappUrl=');
  });
});

// --------------------------------------------------------------------------
// chromeStoreUrl
// --------------------------------------------------------------------------
describe('chromeStoreUrl', () => {
  it('is the Chrome Web Store base URL', () => {
    expect(chromeStoreUrl).toBe('https://chrome.google.com/webstore/detail/');
  });
});

// --------------------------------------------------------------------------
// isWalletInstalled
// --------------------------------------------------------------------------
describe('isWalletInstalled', () => {
  beforeEach(() => {
    vi.stubGlobal('window', { cardano: {} });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns false when window.cardano is empty', () => {
    expect(isWalletInstalled('eternl')).toBe(false);
  });

  it('returns true when the wallet key exists in window.cardano', () => {
    (window as any).cardano.eternl = { enable: async () => ({}) };
    expect(isWalletInstalled('eternl')).toBe(true);
  });

  it('returns false when window.cardano is undefined', () => {
    vi.stubGlobal('window', {});
    expect(isWalletInstalled('eternl')).toBe(false);
  });
});
