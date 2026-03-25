import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ConnectWalletList from './ConnectWalletList';

const meta = {
  title: 'Components/ConnectWalletList',
  component: ConnectWalletList,
} satisfies Meta<typeof ConnectWalletList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultList: Story = {
  args: {},
};

export const CustomList: Story = {
  args: {
    borderRadius: 15,
    gap: 8,
    primaryColor: '#96839f',
  },
};

export const Cip95GovernanceList: Story = {
  args: {
    extensions: [95],
    onConnect: (_walletName) => {
      alert(`Connected to ${_walletName} with CIP-95 governance extension`);
    },
    onConnectError: (_walletName, error) => {
      alert(error.message);
    },
  },
};

export const MultipleExtensionsList: Story = {
  args: {
    extensions: [95, 103],
    onConnect: (_walletName) => {
      alert(`Connected to ${_walletName} with CIP-95 and CIP-103 extensions`);
    },
    onConnectError: (_walletName, error) => {
      alert(error.message);
    },
  },
};
