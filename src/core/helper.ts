export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const formatSupportedWallets = (supportedWallets: Array<String>) => {
  if (supportedWallets.length > 1) {
    return `${supportedWallets.slice(0, -1).join(', ')} or ${
      supportedWallets.slice(-1)[0]
    }`;
  } else {
    return supportedWallets[0];
  }
};
