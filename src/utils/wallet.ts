const getInstalledWalletExtensions = (supportedWallets: Array<String>) => {
  const cardano = (window as any).cardano;

  if (supportedWallets.length === 0 || typeof cardano === 'undefined') {
    return [];
  }

  return Object.keys(cardano).filter((walletExtension) =>
    supportedWallets
      .map((walletName) => walletName.toLowerCase())
      .includes(walletExtension.toLowerCase())
  );
};

export { getInstalledWalletExtensions };
