import React from 'react';

export type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  supportedWallets?: Array<String>;
  styles: {
    menu: React.CSSProperties;
    icon: React.CSSProperties;
    disabled: React.CSSProperties;
    dropdown: React.CSSProperties;
    button: React.CSSProperties;
  };
  onConnect?: () => void;
  onSignMessage?: (signedMessage: string) => void;
};

export type ConnectWalletListProps = {
  supportedWallets?: Array<String>;
  styles: {
    menu: React.CSSProperties;
    icon: React.CSSProperties;
    item: React.CSSProperties;
  };
  onConnect?: () => void;
};

export enum SignErrorCode {
  WalletExtensionNotFound,
  EnablementFailed,
}
