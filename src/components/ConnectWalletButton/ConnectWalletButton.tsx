import { ConnectWalletButtonProps, SignErrorCode } from '../../global/types';
import {
  Dropdown,
  Menu,
  MenuItem,
  MenuItemIcon,
  Button,
} from './StyledButtonElements';
import { getInstalledWalletExtensions } from '../../utils';
import { useCardano, useLocalStorage } from '../../hooks';
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
  onSignMessage,
}: ConnectWalletButtonProps) => {
  const [walletConnected, setWalletConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );
  const cardano = (window as any).cardano;
  const availableWallets = getInstalledWalletExtensions(supportedWallets);
  const { isEnabled, stakeAddress, signMessage, connect } = useCardano();

  const connectWallet = async (walletName: string) => {
    const onSuccess = () => {
      if (typeof onConnect === 'function') {
        setWalletConnected(true);
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

  const disconnectWallet = () => {
    setWalletConnected(false);
  };

  const themeColorObject = primaryColor
    ? Color(primaryColor)
    : Color('#0538AF');
  const buttonTitle =
    stakeAddress && walletConnected ? `${stakeAddress.slice(0, 12)}...` : label;

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
        onClick={disconnectWallet}
      >
        Disconnect
      </MenuItem>
    </Menu>
  );

  return (
    <Dropdown>
      <Button
        primaryColor={themeColorObject.hex()}
        primaryColorLight={themeColorObject.alpha(0.1).hexa()}
      >
        {buttonTitle}
      </Button>
      {!disabled && (isEnabled && walletConnected ? actionMenu : walletMenu)}
    </Dropdown>
  );
};

export default ConnectWalletButton;
