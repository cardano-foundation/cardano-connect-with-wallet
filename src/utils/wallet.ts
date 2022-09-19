const cardano = (window as any).cardano;

const getInstalledWalletExtensions = (supportedWallets: Array<String>) => {
  if (supportedWallets.length === 0) {
    return [];
  }

  return Object.keys(cardano).filter((walletExtension) =>
    supportedWallets
      .map((walletName) => walletName.toLowerCase())
      .includes(walletExtension.toLowerCase())
  );
};

export { getInstalledWalletExtensions };
