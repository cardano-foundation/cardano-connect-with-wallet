import React from 'react';
import { Modal, ModalContent } from './StyledDialogElements';
import { QRCode } from 'react-qrcode-logo';
import { ModalDialogProps } from '../../types';

const ModalDialog = (props: ModalDialogProps) => {
  const { visible, content, handleClose, qrStyle, icon } = props;

  return (
    <Modal
      onClick={() => {
        if (typeof handleClose === 'function') {
          handleClose();
        }
      }}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <ModalContent data-testid="modal-content">
        <QRCode
          removeQrCodeBehindLogo={true}
          logoImage={icon ? icon : undefined}
          ecLevel="H"
          eyeRadius={5}
          qrStyle={qrStyle ? qrStyle : 'squares'}
          value={content}
        />
        <p style={{ maxWidth: 300 }}>
          You can use a CIP45 compliant mobile wallet on your smartphone (e.g.
          Eternl) to connect it as P2P wallet
        </p>
      </ModalContent>
    </Modal>
  );
};

export default ModalDialog;
