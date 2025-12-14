import React, { useRef } from 'react';
import {
  CopyInputContainer,
  Modal,
  ModalContent,
  Toast,
} from './StyledDialogElements';
import { QRCode } from 'react-qrcode-logo';
import { ModalDialogProps } from '../../types';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
    <Dialog.Root open={visible} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <Modal customCSS={customCSS || ''} />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <ModalContent data-testid="modal-content">
            <VisuallyHidden>
              <Dialog.Title>P2P Wallet Connection</Dialog.Title>
            </VisuallyHidden>
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
            <Dialog.Description asChild>
              <p style={{ maxWidth: 300 }}>
                {subtitle
                  ? subtitle
                  : 'You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet.'}
              </p>
            </Dialog.Description>
            <Toast ref={toastRef}>P2P identifier copied to clipboard!</Toast>
          </ModalContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalDialog;
