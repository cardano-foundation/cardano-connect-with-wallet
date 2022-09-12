export type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  supportedWallets?: Array<String>;
  onConnect?: () => void;
  onSignMessage?: (signedMessage: string) => void;
};
