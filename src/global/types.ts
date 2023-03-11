export type Action = {
  label: string;
  onClick: () => void;
};

export enum UnavailableWalletVisibility {
  SHOW_UNAVAILABLE,
  HIDE_UNAVAILABLE,
  SHOW_UNAVAILABLE_ON_MOBILE,
}

export enum NetworkType {
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
  customCSS?: string;
  customActions?: Array<Action>;
  beforeComponent?: JSX.Element;
  afterComponent?: JSX.Element;
  hideActionMenu?: boolean;
  limitNetwork?: NetworkType;
  peerConnectEnabled?: boolean;
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
  content: string;
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
