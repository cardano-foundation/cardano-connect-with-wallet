import { ConnectWalletButtonProps, SignErrorCode } from '../../global/types';
import {
  Dropdown,
  Menu,
  MenuItem,
  MenuItemIcon,
  Button,
} from './StyledButtonElements';
import { getInstalledWalletExtensions } from '../../utils';
import { useCardano } from '../../hooks';
import { capitalize, formatSupportedWallets } from '../../common';
import Color from 'color';

const ConnectWalletButton = ({
  label = 'Connect Wallet',
  disabled,
  message,
  supportedWallets = ['Nami', 'Eternl', 'Flint', 'Yoroi'],
  primaryColor,
  customCSS,
  onConnect,
  onDisconnect,
  onSignMessage,
}: ConnectWalletButtonProps) => {
  const cardano = (window as any).cardano;
  const availableWallets = getInstalledWalletExtensions(supportedWallets);
  const {
    isEnabled,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
    isConnected,
  } = useCardano();

  const connectWallet = async (walletName: string) => {
    const onSuccess = () => {
      if (typeof onConnect === 'function') {
        onConnect();
      }
    };

    const onError = (code: SignErrorCode) => {
      if (code === SignErrorCode.WalletExtensionNotFound) {
        alert(
          `Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`
        );
      } else {
        alert(`Something went wrong. Please try again later.`);
      }
    };

    connect(walletName, onSuccess, onError);
  };

  const themeColorObject = primaryColor
    ? Color(primaryColor)
    : Color('#0538AF');
  const buttonTitle =
    stakeAddress && isConnected ? `${stakeAddress.slice(0, 12)}...` : label;

  const walletMenu = (
    <Menu>
      {availableWallets ? (
        availableWallets.map((availableWallet) => (
          <MenuItem
            primaryColor={themeColorObject.hex()}
            primaryColorLight={themeColorObject.alpha(0.2).hexa()}
            key={availableWallet}
            onClick={() => connectWallet(availableWallet)}
          >
            <MenuItemIcon src={cardano[availableWallet].icon} />
            {capitalize(availableWallet)}
          </MenuItem>
        ))
      ) : (
        <span>{`Please install a wallet browser extension (${formatSupportedWallets(
          supportedWallets
        )} are supported)`}</span>
      )}
    </Menu>
  );

  const actionMenu = (
    <Menu>
      {typeof message === 'string' && (
        <MenuItem
          primaryColor={themeColorObject.hex()}
          primaryColorLight={themeColorObject.alpha(0.1).hexa()}
          onClick={() => signMessage(message, onSignMessage)}
        >
          Sign a message
        </MenuItem>
      )}
      <MenuItem
        primaryColor={themeColorObject.hex()}
        primaryColorLight={themeColorObject.alpha(0.1).hexa()}
        onClick={() => {
          disconnect();
          if (typeof onDisconnect === 'function') {
            onDisconnect();
          }
        }}
      >
        Disconnect
      </MenuItem>
    </Menu>
  );

  return (
    <Dropdown customCSS={customCSS}>
      <Button
        primaryColor={themeColorObject.hex()}
        primaryColorLight={themeColorObject.alpha(0.1).hexa()}
      >
        {buttonTitle}
      </Button>
      {!disabled && (isEnabled && isConnected ? actionMenu : walletMenu)}
    </Dropdown>
  );
};

export default ConnectWalletButton;
