import { Meta, StoryFn } from '@storybook/react';
import ModalDialog from './ModalDialog';
import { ModalDialogProps } from '../../types';

export default {
  title: 'Components/ModalDialog',
  component: ModalDialog,
} as Meta;

const Template: StoryFn<ModalDialogProps> = (args) => <ModalDialog {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = { content: 'Hallo Hallo' };
