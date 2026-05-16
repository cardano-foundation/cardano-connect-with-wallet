import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';
import ConnectWalletButton from './ConnectWalletButton';

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

test('renders with the default "Connect Wallet" label', async ({ mount }) => {
  const component = await mount(
    <ConnectWalletButton peerConnectEnabled={false} />,
  );
  await expect(component.locator('#connect-wallet-button')).toContainText(
    'Connect Wallet',
  );
});

test('renders with a custom string label', async ({ mount }) => {
  const component = await mount(
    <ConnectWalletButton label="Link Wallet" peerConnectEnabled={false} />,
  );
  await expect(component.locator('#connect-wallet-button')).toContainText(
    'Link Wallet',
  );
});

test('renders with a custom ReactNode label', async ({ mount }) => {
  const component = await mount(
    <ConnectWalletButton
      label={<span data-testid="custom-label">My Wallet</span>}
      peerConnectEnabled={false}
    />,
  );
  await expect(component.locator('[data-testid="custom-label"]')).toBeVisible();
});

test('renders a beforeComponent above the button', async ({ mount }) => {
  const component = await mount(
    <ConnectWalletButton
      beforeComponent={<div data-testid="before">Before</div>}
      peerConnectEnabled={false}
    />,
  );
  await expect(component.locator('[data-testid="before"]')).toBeVisible();
});

test('renders an afterComponent below the button', async ({ mount }) => {
  const component = await mount(
    <ConnectWalletButton
      afterComponent={<div data-testid="after">After</div>}
      peerConnectEnabled={false}
    />,
  );
  await expect(component.locator('[data-testid="after"]')).toBeVisible();
});

// ── Dropdown content ─────────────────────────────────────────────────────────

test('opens a dropdown with the configured wallet list', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Nami', 'Flint', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  const menu = page.locator('#connect-wallet-menu');
  await expect(menu).toBeVisible();
  await expect(menu).toContainText('Nami');
  await expect(menu).toContainText('Flint');
  await expect(menu).toContainText('Eternl');
});

test('shows P2P Wallet option when peerConnectEnabled is true', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={true}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  await expect(page.locator('#connect-wallet-menu')).toContainText('P2P Wallet');
});

test('hides P2P Wallet option when peerConnectEnabled is false', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  await expect(page.locator('#connect-wallet-menu')).not.toContainText('P2P Wallet');
});

test('only shows wallets in the supportedWallets list', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Eternl', 'Nami']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  const menu = page.locator('#connect-wallet-menu');
  await expect(menu).toContainText('Eternl');
  await expect(menu).toContainText('Nami');
  await expect(menu).not.toContainText('Lace');
  await expect(menu).not.toContainText('Yoroi');
});

test('shows wallet icons in the dropdown', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  const icon = page.locator('#connect-wallet-menu img').first();
  await expect(icon).toBeVisible();
  await expect(icon).toHaveAttribute('src', /.+/);
});

test('shows no wallet items in the menu when HIDE_UNAVAILABLE and nothing installed', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.HIDE_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  // No mock injected → window.cardano is undefined, so no wallets are installed.
  // HIDE_UNAVAILABLE shows only installed wallets, so the menu will be empty.
  await page.locator('#connect-wallet-button').click();
  await expect(page.locator('#connect-wallet-menu')).not.toContainText('Eternl');
});

// ── Connect / disconnect flow ─────────────────────────────────────────────────
// Use lowercase wallet keys in supportedWallets so isWalletInstalled() matches
// the mock's window.cardano key ('eternl') on both desktop and mobile projects.

test('shows truncated stake address after successful connection', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
});

test('shows ADA balance instead of stake address when showAccountBalance is true', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      showAccountBalance={true}
      limitNetwork={NetworkType.TESTNET as any}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('₳', { timeout: 10000 });
});

test('returns to "Connect Wallet" label after disconnect', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });

  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Disconnect').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('Connect Wallet');
});

test('calls onConnect callback with the wallet name', async ({ mount, page }) => {
  const connected: string[] = [];
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      onConnect={(name) => connected.push(name)}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
  expect(connected).toContain('eternl');
});

test('calls onDisconnect callback after disconnect', async ({ mount, page }) => {
  let disconnected = false;
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      onDisconnect={() => { disconnected = true; }}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Disconnect').click();
  expect(disconnected).toBe(true);
});

// ── Action menu ───────────────────────────────────────────────────────────────

test('shows custom actions in the connected action menu', async ({ mount, page }) => {
  let clicked = false;
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      customActions={[{ label: 'My Action', onClick: () => { clicked = true; } }]}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
  await page.locator('#connect-wallet-button').click();
  await expect(page.locator('#connect-wallet-menu')).toContainText('My Action');
  await page.locator('#connect-wallet-menu').getByText('My Action').click();
  expect(clicked).toBe(true);
});

test('hides the action menu when hideActionMenu is true', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      hideActionMenu={true}
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
  // With hideActionMenu=true, clicking the connected button shows no action menu.
  await page.locator('#connect-wallet-button').click();
  await page.waitForTimeout(300);
  await expect(page.locator('#connect-wallet-menu')).not.toBeVisible();
});

test('shows Sign Message action when message prop is set', async ({ mount, page }) => {
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      limitNetwork={NetworkType.TESTNET as any}
      message="Hello Cardano"
    />,
  );
  await injectMockWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await expect(page.locator('#connect-wallet-button')).toContainText('stake_test1u', { timeout: 10000 });
  await page.locator('#connect-wallet-button').click();
  await expect(page.locator('#connect-wallet-menu')).toContainText('Sign a message');
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
    <ConnectWalletButton
      supportedWallets={['Nami', 'Lace', 'Eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
    />,
  );
  await page.locator('#connect-wallet-button').click();
  const menu = page.locator('#connect-wallet-menu');
  await expect(menu).toContainText('Desktop Only');
});

// ── Error handling ─────────────────────────────────────────────────────────────

test('calls onConnectError when wallet connection fails', async ({ mount, page }) => {
  const errors: string[] = [];
  await mount(
    <ConnectWalletButton
      supportedWallets={['eternl']}
      showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE as any}
      peerConnectEnabled={false}
      onConnectError={(walletName) => errors.push(walletName)}
    />,
  );
  // Inject after mount so the evaluate runs on the live page context.
  await injectFailingWallet(page);
  await page.locator('#connect-wallet-button').click();
  await page.locator('#connect-wallet-menu').getByText('Eternl').click();
  await page.waitForTimeout(500);
  expect(errors).toContain('eternl');
});
