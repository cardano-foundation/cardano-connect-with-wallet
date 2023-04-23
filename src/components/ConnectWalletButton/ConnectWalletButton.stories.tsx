import { Meta, StoryFn } from '@storybook/react';
import ConnectWalletButton from './ConnectWalletButton';
import { ConnectWalletButtonProps, NetworkType } from '../../global/types';

export default {
  title: 'Components/ConnectWalletButton',
  component: ConnectWalletButton,
} as Meta;

const Template: StoryFn<ConnectWalletButtonProps> = (args) => (
  <ConnectWalletButton {...args} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = { label: 'Connect Wallet' };

export const CustomButton = Template.bind({});
CustomButton.args = {
  label: 'Connect',
  message: 'Augusta Ada King, Countess of Lovelace',
  onSignMessage: (signature, key) => {
    console.log(signature);
    console.log(key);
    alert(signature);
  },
  supportedWallets: ['Nami', 'Flint', 'Lace'],
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

export const ComponentTitleButton = Template.bind({});
ComponentTitleButton.args = {
  label: (
    <div
      style={{ backgroundColor: 'red', padding: 16, borderRadius: '100%' }}
    ></div>
  ),
  onConnect: () => alert('connected'),
};

export const TestnetButton = Template.bind({});
TestnetButton.args = {
  limitNetwork: NetworkType.TESTNET,
  message: 'Augusta Ada King, Countess of Lovelace',
  onConnectError: (walletName, error) => {
    alert(error.message);
  },
};

export const BalanceButton = Template.bind({});
BalanceButton.args = {
  showAccountBalance: true,
  message: 'Augusta Ada King, Countess of Lovelace',
  onConnectError: (walletName, error) => {
    alert(error.message);
  },
};
