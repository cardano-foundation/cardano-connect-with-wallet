import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import ConnectWalletList from './ConnectWalletList';

// Inline enum values from @cardano-foundation/cardano-connect-with-wallet-core to avoid
// CJS/ESM interop failure when Playwright's Node.js runner collects tests from an ESM package.
const UnavailableWalletVisibility = { SHOW_UNAVAILABLE: 0, HIDE_UNAVAILABLE: 1, SHOW_UNAVAILABLE_ON_MOBILE: 2 } as const;
const NetworkType = { MAINNET: 'mainnet', TESTNET: 'testnet' } as const;

// In Playwright CT, mount() does not navigate the page, so addInitScript from beforeEach
// never re-fires between tests. Use page.evaluate() AFTER mount() to inject browser state.
// Reset Wallet static state and window.cardano before each test to prevent state leakage.
test.beforeEach(async ({ page }) => {
  await page.evaluate(() => {
    if (typeof (window as any).__resetWallet__ === 'function') {
      (window as any).__resetWallet__();
    }
  });
});

async function injectMockWallet(page: any) {
  await page.evaluate(() => {
    const mockApi = {
      getNetworkId: async () => 0,
      getRewardAddresses: async () => [
        'e0b83abf370a14870fdfd6ccb35f8b3e62a68e465ed1e096c5a6f5b9d6',
      ],
      getUsedAddresses: async () => [],
      getUnusedAddresses: async () => [],
      getBalance: async () => '1a0643be98',
    };
    (window as any).cardano = {
      eternl: {
        isEnabled: async () => false,
        enable: async () => mockApi,
        icon: 'data:image/svg+xml,%3Csvg%20/%3E',
        name: 'Eternl',
        apiVersion: '0.1.0',
      },
    };
    localStorage.clear();
  });
}

async function injectFailingWallet(page: any) {
  await page.evaluate(() => {
    (window as any).cardano = {
      eternl: {
        isEnabled: async () => false,
        enable: async () => { throw new Error('User declined'); },
        icon: 'data:image/svg+xml,%3Csvg%20/%3E',
        name: 'Eternl',
        apiVersion: '0.1.0',
      },
    };
    localStorage.clear();
  });
}

// ── Rendering ────────────────────────────────────────────────────────────────

test('renders a list container', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await expect(page.locator('[data-testid="connect-wallet-list"]')).toBeVisible();
});

test('renders wallet items from the supportedWallets list', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Nami', 'Flint', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  const list = page.locator('[data-testid="connect-wallet-list"]');
  await expect(list).toContainText('Nami');
  await expect(list).toContainText('Flint');
  await expect(list).toContainText('Eternl');
});

test('only shows wallets in the supportedWallets list', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl', 'Nami']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  const list = page.locator('[data-testid="connect-wallet-list"]');
  await expect(list).toContainText('Eternl');
  await expect(list).toContainText('Nami');
  await expect(list).not.toContainText('Lace');
  await expect(list).not.toContainText('Yoroi');
});

test('shows wallet icons for each listed wallet', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  const icon = page.locator('[data-testid="connect-wallet-list"] img').first();
  await expect(icon).toBeVisible();
  await expect(icon).toHaveAttribute('src', /.+/);
});

// ── peerConnect ───────────────────────────────────────────────────────────────

test('shows P2P Wallet option when peerConnectEnabled is true', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={true}
    />,
  );
  await expect(page.locator('[data-testid="connect-wallet-list"]')).toContainText('P2P Wallet');
});

test('hides P2P Wallet option when peerConnectEnabled is false', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await expect(page.locator('[data-testid="connect-wallet-list"]')).not.toContainText('P2P Wallet');
});

// ── Connect flow ──────────────────────────────────────────────────────────────

test('calls onConnect callback with wallet name after connecting', async ({ mount, page }) => {
  const connected: string[] = [];
  await mount(
    <ConnectWalletList
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      onConnect={(name) => connected.push(name)}
    />,
  );
  await injectMockWallet(page);
  await page.locator('[data-testid="connect-wallet-list"]').getByText('Eternl').click();
  await page.waitForTimeout(2000);
  expect(connected).toContain('eternl');
});

test('calls onConnectError when wallet connection fails', async ({ mount, page }) => {
  const errors: string[] = [];
  await mount(
    <ConnectWalletList
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      onConnectError={(walletName) => errors.push(walletName)}
    />,
  );
  // Inject after mount so the evaluate runs on the live page context.
  await injectFailingWallet(page);
  await page.locator('[data-testid="connect-wallet-list"]').getByText('Eternl').click();
  await page.waitForTimeout(500);
  expect(errors).toContain('eternl');
});

// ── Visibility settings ────────────────────────────────────────────────────────

test('hides unavailable wallets with HIDE_UNAVAILABLE', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Nami', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.HIDE_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  // Inject only eternl — InjectWalletListener polls every ~20ms and will update the list.
  await injectMockWallet(page);
  const list = page.locator('[data-testid="connect-wallet-list"]');
  await expect(list).toContainText('Eternl', { timeout: 3000 });
  await expect(list).not.toContainText('Nami');
});

test('shows all wallets with SHOW_UNAVAILABLE even when not installed', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Nami', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  const list = page.locator('[data-testid="connect-wallet-list"]');
  await expect(list).toContainText('Eternl');
  await expect(list).toContainText('Nami');
});

// ── Mobile viewport ───────────────────────────────────────────────────────────

test('marks desktop-only wallets as "Desktop Only" on mobile', async ({ mount, page }) => {
  await page.setViewportSize({ width: 393, height: 851 });
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Mobile Safari/537.36',
      configurable: true,
    });
  });

  await mount(
    <ConnectWalletList
      supportedWallets={['Nami', 'Lace', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  const list = page.locator('[data-testid="connect-wallet-list"]');
  await expect(list).toContainText('Desktop Only');
});

// ── Styling props ─────────────────────────────────────────────────────────────

test('renders without error when primaryColor is set', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      primaryColor="#FF5733"
    />,
  );
  await expect(page.locator('[data-testid="connect-wallet-list"]')).toBeVisible();
});

test('renders without error when borderRadius and gap are set', async ({ mount, page }) => {
  await mount(
    <ConnectWalletList
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      borderRadius={8}
      gap={4}
    />,
  );
  await expect(page.locator('[data-testid="connect-wallet-list"]')).toBeVisible();
});
