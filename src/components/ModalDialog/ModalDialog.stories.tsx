import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import ModalDialog from './ModalDialog';
import { ModalDialogProps } from '../../global';

export default {
  title: 'Components/ModalDialog',
  component: ModalDialog,
} as Meta;

const Template: Story<ModalDialogProps> = (args) => <ModalDialog {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = { content: 'Hallo Hallo' };
