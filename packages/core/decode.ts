import { bech32 } from 'bech32';
import { NetworkId } from './common';
import { Buffer } from 'buffer';

export const decodeHexAddress = (hexAddress: string) => {
  hexAddress = hexAddress.toLowerCase();
  const addressType = hexAddress.charAt(0);
  const networkId = Number(hexAddress.charAt(1)) as NetworkId;
  const addressBytes = Buffer.from(hexAddress, 'hex');
  const words = bech32.toWords(addressBytes);
  let prefix;

  if (['e', 'f'].includes(addressType)) {
    if (networkId === NetworkId.MAINNET) {
      prefix = 'stake';
    } else if (networkId === NetworkId.TESTNET) {
      prefix = 'stake_test';
    } else {
      throw new TypeError('Unsupported network type');
    }

    return bech32.encode(prefix, words, 1000);
  } else {
    if (networkId === NetworkId.MAINNET) {
      prefix = 'addr';
    } else if (networkId === NetworkId.TESTNET) {
      prefix = 'addr_test';
    } else {
      throw new TypeError('Unsupported network type');
    }

    return bech32.encode(prefix, words, 1000);
  }
};
