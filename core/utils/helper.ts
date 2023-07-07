import { UnavailableWalletVisibility } from '../types';

export const formatSupportedWallets = (supportedWallets: Array<String>) => {
  if (supportedWallets.length > 1) {
    return `${supportedWallets.slice(0, -1).join(', ')} or ${
      supportedWallets.slice(-1)[0]
    }`;
  } else {
    return supportedWallets[0];
  }
};

export const checkIsMobile = () =>
  typeof navigator === 'undefined'
    ? false
    : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

export const estimateAvailableWallets = (
  supportedWallets: Array<string>,
  showUnavailableWallets: UnavailableWalletVisibility,
  alwaysVisibleWallets: Array<string>,
  installedExtensions: Array<string>
) => {
  let availableWallets: Array<string> = [];
  const { HIDE_UNAVAILABLE, SHOW_UNAVAILABLE } = UnavailableWalletVisibility;

  if (showUnavailableWallets === HIDE_UNAVAILABLE) {
    availableWallets = installedExtensions.filter((extension) =>
      supportedWallets
        .map((supportedExtension) => supportedExtension.toLowerCase())
        .includes(extension)
    );
  } else if (showUnavailableWallets === SHOW_UNAVAILABLE) {
    availableWallets = supportedWallets;
  } else {
    if (checkIsMobile()) {
      availableWallets = supportedWallets;
    } else {
      availableWallets = installedExtensions.filter((extension) =>
        supportedWallets
          .map((supportedExtension) => supportedExtension.toLowerCase())
          .includes(extension)
      );
    }
  }

  availableWallets = Array.from(
    new Set([
      ...alwaysVisibleWallets.map((wallet) => wallet.toLowerCase()),
      ...availableWallets,
    ])
  );

  return availableWallets;
};

export class InjectWalletListener {
  interval: number;
  onChangeCallback: Function;
  timeoutId: NodeJS.Timeout | null;
  private wallets: Array<string>;

  constructor(onChangeCallback: Function) {
    this.interval = 20;
    this.timeoutId = null;
    this.onChangeCallback = onChangeCallback;
    this.wallets = [];
  }

  private checkWallets() {
    if (typeof (window as any).cardano === 'undefined') {
      if (this.wallets.length > 0) {
        this.wallets = [];
        this.onChangeCallback(this.wallets);
      }
      return;
    }

    const injectedWallets = Object.keys((window as any).cardano).sort();
    if (JSON.stringify(this.wallets) !== JSON.stringify(injectedWallets)) {
      this.wallets = injectedWallets;
      this.onChangeCallback(this.wallets);
    }
  }

  start() {
    this.timeoutId = setTimeout(() => {
      this.checkWallets();

      if (this.interval < 10000) {
        this.interval = this.interval * 1.5;
      }

      this.start();
    }, this.interval);
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
