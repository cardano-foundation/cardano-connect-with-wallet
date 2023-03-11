import { ModalDialogProps } from '../../global';
import { Modal, ModalContent } from './StyledDialogElements';

const ModalDialog = (props: ModalDialogProps) => {
  return (
    <Modal>
      <ModalContent>
        <p>{props.content}</p>
      </ModalContent>
    </Modal>
  );
};

export default ModalDialog;
