import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ModalDialog from './ModalDialog';

const meta = {
  title: 'Components/ModalDialog',
  component: ModalDialog,
} satisfies Meta<typeof ModalDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultList: Story = {
  args: {
    content: 'Hallo Hallo',
    visible: true,
    icon: null,
    handleClose: () => {},
  },
};
