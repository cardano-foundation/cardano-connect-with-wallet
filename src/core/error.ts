import { capitalize } from './helper';
import { NetworkType } from './types';

export class WrongNetworkTypeError extends Error {
  constructor(targetNetwork: NetworkType, currentNetwork: NetworkType) {
    const message = `You have tried to call functions on ${capitalize(
      currentNetwork
    )}, while the network type is limited to ${capitalize(targetNetwork)}.`;

    super(message);
    this.name = 'WrongNetworkTypeError';
  }
}
