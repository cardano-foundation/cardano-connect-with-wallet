import { describe, it, expect, vi, afterEach } from 'vitest';
import {
  formatSupportedWallets,
  estimateAvailableWallets,
  checkIsMobile,
} from '../utils/helper';
import { UnavailableWalletVisibility } from '../types';

// --------------------------------------------------------------------------
// formatSupportedWallets
// --------------------------------------------------------------------------
describe('formatSupportedWallets', () => {
  it('returns the single wallet name when given one entry', () => {
    expect(formatSupportedWallets(['Eternl'])).toBe('Eternl');
  });

  it('joins two wallets with "or"', () => {
    expect(formatSupportedWallets(['Eternl', 'Nami'])).toBe('Eternl or Nami');
  });

  it('joins three wallets with commas and a final "or"', () => {
    expect(formatSupportedWallets(['Eternl', 'Nami', 'Yoroi'])).toBe(
      'Eternl, Nami or Yoroi',
    );
  });

  it('joins four wallets correctly', () => {
    expect(formatSupportedWallets(['Eternl', 'Nami', 'Lace', 'Vespr'])).toBe(
      'Eternl, Nami, Lace or Vespr',
    );
  });
});

// --------------------------------------------------------------------------
// checkIsMobile
// --------------------------------------------------------------------------
describe('checkIsMobile', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns false in the Node.js/jsdom test environment', () => {
    expect(checkIsMobile()).toBe(false);
  });

  it('returns true for an iPhone user-agent', () => {
    vi.stubGlobal('navigator', {
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    expect(checkIsMobile()).toBe(true);
  });

  it('returns true for an Android user-agent', () => {
    vi.stubGlobal('navigator', {
      userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36',
    });
    expect(checkIsMobile()).toBe(true);
  });

  it('returns true for an iPad user-agent', () => {
    vi.stubGlobal('navigator', {
      userAgent:
        'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    expect(checkIsMobile()).toBe(true);
  });

  it('returns false when navigator is undefined', () => {
    vi.stubGlobal('navigator', undefined);
    expect(checkIsMobile()).toBe(false);
  });
});

// --------------------------------------------------------------------------
// estimateAvailableWallets
// --------------------------------------------------------------------------
describe('estimateAvailableWallets', () => {
  const supported = ['Eternl', 'Nami', 'Lace'];
  const installed = ['eternl', 'lace'];

  describe('HIDE_UNAVAILABLE', () => {
    it('returns only installed wallets from the supported list', () => {
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.HIDE_UNAVAILABLE,
        [],
        installed,
      );
      expect(result).toContain('eternl');
      expect(result).toContain('lace');
      expect(result).not.toContain('nami');
      expect(result).not.toContain('Nami');
    });

    it('returns an empty list when nothing is installed', () => {
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.HIDE_UNAVAILABLE,
        [],
        [],
      );
      expect(result).toHaveLength(0);
    });
  });

  describe('SHOW_UNAVAILABLE', () => {
    it('returns all supported wallets regardless of installed state', () => {
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.SHOW_UNAVAILABLE,
        [],
        installed,
      );
      expect(result).toContain('Eternl');
      expect(result).toContain('Nami');
      expect(result).toContain('Lace');
    });
  });

  describe('SHOW_UNAVAILABLE_ON_MOBILE', () => {
    it('returns only installed wallets on desktop (non-mobile env)', () => {
      // checkIsMobile() returns false in Node.js/jsdom
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,
        [],
        installed,
      );
      expect(result).toContain('eternl');
      expect(result).toContain('lace');
      expect(result).not.toContain('nami');
    });

    it('returns all supported wallets on mobile', () => {
      vi.stubGlobal('navigator', {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
      });
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,
        [],
        installed,
      );
      expect(result).toContain('Eternl');
      expect(result).toContain('Nami');
      expect(result).toContain('Lace');
      vi.unstubAllGlobals();
    });
  });

  describe('alwaysVisibleWallets', () => {
    it('are always included regardless of install state or visibility setting', () => {
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.HIDE_UNAVAILABLE,
        ['vespr'],
        installed,
      );
      expect(result).toContain('vespr');
    });

    it('do not produce duplicates when the wallet is also installed', () => {
      const result = estimateAvailableWallets(
        supported,
        UnavailableWalletVisibility.HIDE_UNAVAILABLE,
        ['eternl'],
        installed,
      );
      expect(result.filter((w) => w === 'eternl')).toHaveLength(1);
    });
  });
});
