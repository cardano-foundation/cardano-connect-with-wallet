import React, { useRef } from 'react';
import {
  CopyInputContainer,
  Modal,
  ModalContent,
  Toast,
} from './StyledDialogElements';
import { QRCode } from 'react-qrcode-logo';
import { ModalDialogProps } from '../../types';

const ModalDialog = (props: ModalDialogProps) => {
  const {
    visible,
    content,
    handleClose,
    qrStyle,
    eyeRadius,
    icon,
    subtitle,
    primaryColor,
    customCSS,
  } = props;

  const toastRef = useRef<HTMLDivElement>(null);

  const onClickCopy = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    navigator.clipboard.writeText(content);

    toastRef.current?.classList.add('show');
    setTimeout(function () {
      toastRef.current?.classList.remove('show');
    }, 3000);
  };

  return (
    <Modal
      onClick={() => {
        if (typeof handleClose === 'function') {
          handleClose();
        }
      }}
      customCSS={customCSS || ''}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <ModalContent data-testid="modal-content">
        <QRCode
          removeQrCodeBehindLogo={true}
          logoImage={icon ? icon : undefined}
          ecLevel="H"
          eyeRadius={eyeRadius ? eyeRadius : 0}
          qrStyle={qrStyle ? qrStyle : 'squares'}
          value={content}
        />
        <CopyInputContainer primaryColor={primaryColor || '#0538AF'}>
          <input
            type="text"
            value={content}
            style={{ textOverflow: 'ellipsis' }}
            readOnly
          />
          <button onClick={onClickCopy}>Copy</button>
        </CopyInputContainer>
        <p style={{ maxWidth: 300 }}>
          {subtitle
            ? subtitle
            : 'You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet.'}
        </p>
        <Toast ref={toastRef}>P2P identifier copied to clipboard!</Toast>
      </ModalContent>
    </Modal>
  );
};

export default ModalDialog;
