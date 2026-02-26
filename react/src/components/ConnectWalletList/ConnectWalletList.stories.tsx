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
