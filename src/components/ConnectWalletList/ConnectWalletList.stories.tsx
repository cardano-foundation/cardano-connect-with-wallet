import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import ConnectWalletList from './ConnectWalletList';
import { ConnectWalletListProps } from '../../global/types';

export default {
  title: 'Components/ConnectWalletList',
  component: ConnectWalletList,
} as Meta;

const Template: Story<ConnectWalletListProps> = (args) => (
  <ConnectWalletList {...args} />
);

export const DefaultList = Template.bind({});
DefaultList.args = {};

export const CustomList = Template.bind({});
CustomList.args = {
  borderRadius: 15,
  gap: 8,
  primaryColor: '#96839f',
};
