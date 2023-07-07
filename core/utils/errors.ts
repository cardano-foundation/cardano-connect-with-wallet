import { NetworkType } from '../types';

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export class WalletConnectError extends Error {
  constructor(walletName: string, errorMessage: string) {
    const message = `There was an error while connecting to the wallet. 
    Please ensure that you have created a wallet inside of your ${walletName} app and that your network or account has a proper configuration. 
    The error coming from this wallet is: ${errorMessage}.`;

    super(message);
    this.name = 'WalletConnectError';
  }
}

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

export class ExtensionNotInjectedError extends Error {
  constructor(walletname: string) {
    const message = `It seems that the API of ${capitalize(
      walletname
    )} is not injected and window.cardano.${walletname} is not available.`;
    super(message);
    this.name = 'ExtensionNotInjectedError';
  }
}

export class WalletNotInstalledError extends Error {
  constructor(walletName: string) {
    super(`The wallet ${walletName} is not installed.`);
    this.name = 'WalletNotInstalledError';
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
