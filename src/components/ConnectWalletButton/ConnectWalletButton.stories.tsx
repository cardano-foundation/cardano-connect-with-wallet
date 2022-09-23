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

export const DefaultButton = Template.bind({});
DefaultButton.args = { label: 'Connect Wallet' };

export const CustomButton = Template.bind({});
CustomButton.args = {
  label: 'Connect',
  message: 'Augusta Ada King, Countess of Lovelace',
  onSignMessage: (signedMessage) => alert(signedMessage),
  supportedWallets: ['Nami'],
  onStakeAddressClick: (stakeAddress) => console.log(stakeAddress),
};

export const NoActionMenuButton = Template.bind({});
NoActionMenuButton.args = {
  label: 'Connect with wallet',
  hideActionMenu: true,
  onStakeAddressClick: (stakeAddress) => alert(stakeAddress),
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
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
};
