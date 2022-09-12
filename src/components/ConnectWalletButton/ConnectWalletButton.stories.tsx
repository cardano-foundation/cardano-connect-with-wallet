import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import ConnectWalletButton from './ConnectWalletButton';
import { ConnectWalletButtonProps } from '../../global/types';

export default {
  title: 'Components/ConnectWalletButton',
  component: ConnectWalletButton,
} as Meta;

const Template: Story<ConnectWalletButtonProps> = (args) => (
  <ConnectWalletButton {...args} />
);

export const Default = Template.bind({});
Default.args = { label: 'Connect Wallet' };

export const Custom = Template.bind({});
Custom.args = {
  label: 'Connect',
  message: 'Augusta Ada King, Countess of Lovelace',
  onSignMessage: (signedMessage) => alert(signedMessage),
  supportedWallets: ['Nami'],
};
