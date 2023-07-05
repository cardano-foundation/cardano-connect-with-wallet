import { Meta, StoryFn } from '@storybook/react';
import ConnectWalletList from './ConnectWalletList';
import { ConnectWalletListProps } from '../../types';

export default {
  title: 'Components/ConnectWalletList',
  component: ConnectWalletList,
} as Meta;

const Template: StoryFn<ConnectWalletListProps> = (args) => (
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
