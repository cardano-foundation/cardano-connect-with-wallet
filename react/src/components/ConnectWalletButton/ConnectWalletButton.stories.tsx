import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ConnectWalletButton from './ConnectWalletButton';
import { NetworkType } from '@cardano-foundation/cardano-connect-with-wallet-core';

const meta = {
  title: 'Components/ConnectWalletButton',
  component: ConnectWalletButton,
} satisfies Meta<typeof ConnectWalletButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: { label: 'Connect Wallet' },
};

export const CustomButton: Story = {
  args: {
    label: 'Connect',
    message: 'Augusta Ada King, Countess of Lovelace',
    onSignMessage: (signature, key) => {
      console.log(signature);
      console.log(key);
      alert(signature);
    },
    supportedWallets: ['Nami', 'Flint', 'Lace'],
    onStakeAddressClick: (stakeAddress) => console.log(stakeAddress),
  },
};

export const NoActionMenuButton: Story = {
  args: {
    label: 'Connect with wallet',
    hideActionMenu: true,
    onStakeAddressClick: (stakeAddress) => alert(stakeAddress),
  },
};

export const ButtonWithIcon: Story = {
  args: {
    beforeComponent: (
      <div
        style={{
          backgroundColor: 'black',
          marginRight: 6,
          width: 16,
          height: 16,
        }}
      ></div>
    ),
    afterComponent: (
      <div
        style={{ backgroundColor: 'red', marginLeft: 6, width: 16, height: 16 }}
      ></div>
    ),
  },
};

export const ComponentTitleButton: Story = {
  args: {
    label: (
      <div
        style={{ backgroundColor: 'red', padding: 16, borderRadius: '100%' }}
      ></div>
    ),
    onConnect: () => alert('connected'),
  },
};

export const TestnetButton: Story = {
  args: {
    limitNetwork: NetworkType.TESTNET,
    message: 'Augusta Ada King, Countess of Lovelace',
    onConnectError: (walletName, error) => {
      alert(error.message);
    },
  },
};

export const BalanceButton: Story = {
  args: {
    showAccountBalance: true,
    message: 'Augusta Ada King, Countess of Lovelace',
    onConnectError: (walletName, error) => {
      alert(error.message);
    },
  },
};

export const P2PButton: Story = {
  args: {
    peerConnectEnabled: true,
    message: 'Augusta Ada King, Countess of Lovelace',
    onSignMessage: (signature, key) => {
      console.log(signature);
      console.log(key);
      alert(signature);
    },
    onConnectError: (walletName, error) => {
      alert(error.message);
    },
  },
};
