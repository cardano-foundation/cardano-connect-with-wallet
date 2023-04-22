/// <reference path="../../../cypress/support/component.ts" />
import React from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import { UnavailableWalletVisibility } from '../../global';

describe('<ConnectWalletButton />', () => {
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
    cy.mount(<ConnectWalletButton />);
  });

  it('shows wallets', () => {
    cy.mount(
      <ConnectWalletButton
        supportedWallets={['nami', 'flint', 'eternl']}
        showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE}
      />
    );

    cy.get('#connect-wallet-button').trigger('mouseover');
    cy.get('#connect-wallet-menu > span:first-child').contains('Nami');
    cy.get('#connect-wallet-menu > span:nth-child(2)').contains('Flint');
    cy.get('#connect-wallet-menu > span:nth-child(3)').contains('Eternl');
  });

  it('displays custom text', () => {
    cy.mount(
      <ConnectWalletButton
        supportedWallets={['nami', 'flint', 'eternl']}
        label={'Connect'}
        showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE}
      />
    );

    cy.get('#connect-wallet-button').should('have.text', 'Connect');
    cy.get('#connect-wallet-button').should('not.have.text', 'Connect Wallet');
  });

  it('connects and disconnects', () => {
    cy.mount(
      <ConnectWalletButton
        supportedWallets={['nami', 'flint', 'eternl']}
        showUnavailableWallets={UnavailableWalletVisibility.SHOW_UNAVAILABLE}
      />
    );

    cy.get('#connect-wallet-menu').invoke('show');
    cy.wait(1000);
    cy.get('#connect-wallet-menu > span:nth-child(3)')
      .contains('Eternl')
      .click();
    cy.wait(1000);

    cy.get('#connect-wallet-button').should('have.text', 'stake_test1u...');
    cy.get('#connect-wallet-menu > span:first-child')
      .contains('Disconnect')
      .click();
    cy.get('#connect-wallet-button').contains('Connect Wallet');
  });
});
