import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import ConnectWalletButton from './ConnectWalletButton';

export default {
  title: 'Components/ConnectWalletButton',
  component: ConnectWalletButton,
} as Meta;

type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  onConnect?: () => void;
  onSignMessage?: (signedMessage: string) => void;
};

const Template: Story<ConnectWalletButtonProps> = (args) => (
  <ConnectWalletButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = { label: 'Connect Wallet' };
