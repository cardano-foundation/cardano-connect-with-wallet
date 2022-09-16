import React from 'react';

export type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  supportedWallets?: Array<String>;
  primaryColor?: string;
  customCSS?: string;
  onConnect?: () => void;
  onSignMessage?: (signedMessage: string) => void;
};

export type ConnectWalletListProps = {
  supportedWallets?: Array<string>;
  primaryColor?: string;
  borderRadius?: number;
  gap?: number;
  customCSS?: string;
  onConnect?: () => void;
};

export enum SignErrorCode {
  WalletExtensionNotFound,
  EnablementFailed,
}

export interface CustomStyle {
  customCSS?: string;
}

export interface ButtonStyle {
  primaryColor: string;
  primaryColorLight: string;
}

export interface MenuItemStyle {
  primaryColor: string;
  primaryColorLight: string;
  borderRadius?: number;
  gap?: number;
}
