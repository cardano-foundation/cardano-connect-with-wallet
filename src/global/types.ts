import React from 'react';

export type Action = {
  label: string;
  onClick: () => void;
};

export enum UnavailableWalletVisibility {
  SHOW_UNAVAILABLE,
  HIDE_UNAVAILABLE,
  SHOW_UNAVAILABLE_ON_MOBILE,
}

export type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  supportedWallets?: Array<string>;
  showUnavailableWallets: UnavailableWalletVisibility;
  primaryColor?: string;
  customCSS?: string;
  customActions?: Array<Action>;
  onConnect?: () => void;
  onDisconnect?: () => void;
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
  customCSS?: string;
}

export interface DesktopMenuItemStyle {
  borderRadius?: number;
}

export interface MenuItemStyle {
  primaryColor: string;
  primaryColorLight: string;
  borderRadius?: number;
  gap?: number;
}

export type Wallet = {
  name: string;
  isEnabled: boolean;
  icon: string;
  apiVersion: string;
};
