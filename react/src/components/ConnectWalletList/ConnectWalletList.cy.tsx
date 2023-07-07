import React from 'react';
import ConnectWalletList from './ConnectWalletList';
import { UnavailableWalletVisibility } from '@cardano-foundation/cardano-connect-with-wallet-core';

describe('<ConnectWalletList />', () => {
  before(async () => {
    cy.window().then((window) => {
      const api = {
        getRewardAddresses: async () => [
          'e0b83abf370a14870fdfd6ccb35f8b3e62a68e465ed1e096c5a6f5b9d6',
        ],
      };

      (window as any).cardano = {
        eternl: {
          isEnabled: async () => false,
          enable: async () => api,
        },
      };
    });
  });

  it('renders', () => {
    cy.mount(
      <ConnectWalletList
        showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE}
      />
    );
  });

  it('connects', () => {
    cy.mount(
      <ConnectWalletList
        showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE}
      />
    );

    cy.get('[data-testid="connect-wallet-list"] > :nth-child(3)')
      .contains('Eternl')
      .click();
  });
});
