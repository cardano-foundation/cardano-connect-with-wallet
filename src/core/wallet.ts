import { decodeHexAddress } from './decode';
import { WrongNetworkTypeError } from './error';
import { Cip30Function, NetworkType } from './types';

const unwrapApi = async (
  walletName: string
): Promise<{ [key in Cip30Function]: Function }> => {
  const cardano = (window as any).cardano;

  return await cardano[
    walletName === 'typhon' ? 'typhoncip30' : walletName
  ].enable();
};

export const getRewardAddresses = async (walletName: string) => {
  const api = await unwrapApi(walletName);
  if (typeof api.getRewardAddresses === 'function') {
    const hexAddresses = await api.getRewardAddresses();

    if (hexAddresses && hexAddresses.length > 0) {
      return hexAddresses.map((hexAddress: string) =>
        decodeHexAddress(hexAddress)
      );
    } else {
      return [];
    }
  }
};

export const signMessage = async (
  walletName: string,
  message: string,
  onSignMessage?: (signature: string, key: string | undefined) => void,
  onSignError?: (error: Error) => void,
  limitNetwork?: NetworkType
) => {
  const cardano = (window as any).cardano;
  if (typeof message === 'undefined') {
    return;
  }

  const api = await unwrapApi(walletName);
  const hexAddresses = await getRewardAddresses(walletName);

  if (hexAddresses.length > 0) {
    let networkType = NetworkType.MAINNET;
    if (hexAddresses[0] && hexAddresses[0].startsWith('stake_test')) {
      networkType = NetworkType.TESTNET;
    }

    if (limitNetwork && limitNetwork !== networkType) {
      const error = new WrongNetworkTypeError(networkType, limitNetwork);
      if (typeof onSignError === 'function') {
        onSignError(error);
      } else {
        console.warn(error);
      }
      return;
    }

    if (hexAddresses.length > 0) {
      const hexAddress = hexAddresses[0];
      let hexMessage = '';

      for (var i = 0, l = message.length; i < l; i++) {
        hexMessage += message.charCodeAt(i).toString(16);
      }

      try {
        const dataSignature = await api.signData(hexAddress, hexMessage);

        if (typeof onSignMessage === 'function') {
          const { signature, key } = dataSignature;
          onSignMessage(signature, key);
        }
      } catch (error) {
        if (typeof onSignError === 'function') {
          onSignError(error as Error);
        } else {
          console.warn(error);
        }
      }
    }
  }
};

export const getInstalledWalletExtensions: (
  supportedWallets?: Array<String>
) => Array<string> = (supportedWallets) => {
  const cardano = (window as any).cardano;

  if (typeof cardano === 'undefined') {
    return [];
  }

  if (supportedWallets) {
    return Object.keys(cardano)
      .map((walletExtension) => walletExtension.toLowerCase())
      .filter((walletExtension) =>
        supportedWallets
          .map((walletName) => walletName.toLowerCase())
          .includes(walletExtension)
      );
  } else {
    return Object.keys(cardano)
      .filter(
        (walletExtension) =>
          typeof cardano[walletExtension].enable === 'function'
      )
      .map((walletExtension) => walletExtension.toLowerCase());
  }
};
