/// <reference types="react" />
export type Action = {
  label: string;
  onClick: () => void;
};
export declare enum UnavailableWalletVisibility {
  SHOW_UNAVAILABLE = 0,
  HIDE_UNAVAILABLE = 1,
  SHOW_UNAVAILABLE_ON_MOBILE = 2,
}
export declare enum NetworkType {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}
export type ConnectWalletButtonProps = {
  label?: string | JSX.Element;
  disabled?: boolean;
  message?: string;
  supportedWallets?: Array<string>;
  showUnavailableWallets?: UnavailableWalletVisibility;
  alwaysVisibleWallets?: Array<string>;
  primaryColor?: string;
  borderRadius?: number;
  showAccountBalance?: boolean;
  customCSS?: string;
  customActions?: Array<Action>;
  beforeComponent?: JSX.Element;
  afterComponent?: JSX.Element;
  hideActionMenu?: boolean;
  limitNetwork?: NetworkType;
  peerConnectEnabled?: boolean;
  dAppUrl?: string;
  dAppName?: string;
  onConnect?: (walletName: string) => void;
  onDisconnect?: () => void;
  onSignMessage?: (signature: string, key: string | undefined) => void;
  onStakeAddressClick?: (stakeAddress: string) => void;
  onConnectError?: (walletName: string, error: Error) => void;
};
export type ConnectWalletListProps = {
  supportedWallets?: Array<string>;
  primaryColor?: string;
  borderRadius?: number;
  gap?: number;
  showUnavailableWallets?: UnavailableWalletVisibility;
  alwaysVisibleWallets?: Array<string>;
  customCSS?: string;
  limitNetwork?: NetworkType;
  onConnect?: (walletName: string) => void;
  onConnectError?: (walletName: string, error: Error) => void;
};
export type ModalDialogProps = {
  visible: boolean;
  content: string;
  icon: undefined | string | null;
  handleClose: () => void;
};
export interface CustomStyle {
  customCSS?: string;
}
export interface ButtonStyle {
  primaryColor: string;
  borderRadius?: number;
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