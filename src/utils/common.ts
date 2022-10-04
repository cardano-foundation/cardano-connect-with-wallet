import { UnavailableWalletVisibility } from '../global/types';

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
