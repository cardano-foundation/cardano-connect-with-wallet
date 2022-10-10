import { capitalize } from '../common';
import { NetworkType, UnavailableWalletVisibility } from '../global/types';

export class WrongNetworkTypeError extends Error {
  constructor(targetNetwork: NetworkType, currentNetwork: NetworkType) {
    const message = `You have tried to call functions on ${capitalize(
      currentNetwork
    )}, while the network type is limited to ${capitalize(targetNetwork)}.`;

    super(message);
    this.name = 'WrongNetworkTypeError';
  }
}

export class WalletNotCip30CompatibleError extends Error {
  constructor(walletname: string) {
    const message = `It seems that the API of ${capitalize(
      walletname
    )} is not cip30 compatible.`;
    super(message);
    this.name = 'WalletNotCip30CompatibleError';
  }
}

export class WalletExtensionNotFoundError extends Error {
  constructor(walletname: string) {
    const message = `${capitalize(
      walletname
    )} was not found. Please check if it is installed correctly.`;
    super(message);
    this.name = 'WalletExtensionNotFoundError';
  }
}

export class EnablementFailedError extends Error {
  constructor(walletname: string) {
    const message = `Enablement of ${capitalize(
      walletname
    )} failed. Please check your setup.`;
    super(message);
    this.name = 'EnablementFailedError';
  }
}

export const checkIsMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
