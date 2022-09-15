import { ConnectWalletButtonProps, SignErrorCode } from '../../global/types';
import { useButtonStyles } from './useButtonStyles';
import { getInstalledWalletExtensions } from '../../utils';
import { useCardano, useLocalStorage } from '../../hooks';
import { capitalize, formatSupportedWallets } from '../../common';

const ConnectWalletButton = ({
  label = 'Connect Wallet',
  disabled,
  message,
  supportedWallets = ['Nami', 'Eternl', 'Flint', 'Yoroi'],
  styles,
  onConnect,
  onSignMessage,
}: ConnectWalletButtonProps) => {
  const [walletConnected, setWalletConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );
  const classes = useButtonStyles();
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

  const buttonTitle =
    stakeAddress && walletConnected ? `${stakeAddress.slice(0, 12)}...` : label;

  const walletMenu = (
    <div className={classes.menu} style={styles?.menu}>
      {availableWallets ? (
        availableWallets.map((availableWallet) => (
          <span
            key={availableWallet}
            onClick={() => connectWallet(availableWallet)}
          >
            <img
              className={classes.icon}
              style={styles?.icon}
              src={cardano[availableWallet].icon}
            ></img>
            {capitalize(availableWallet)}
          </span>
        ))
      ) : (
        <span>{`Please install a wallet browser extension (${formatSupportedWallets(
          supportedWallets
        )} are supported)`}</span>
      )}
    </div>
  );

  const actionMenu = (
    <div className={classes.menu} style={styles?.menu}>
      {typeof message === 'string' && (
        <span onClick={() => signMessage(message, onSignMessage)}>
          Sign a message
        </span>
      )}
      <span onClick={disconnectWallet}>Disconnect</span>
    </div>
  );

  return (
    <div className={classes.dropdown} style={styles?.dropdown}>
      <button
        className={disabled ? classes.disabled : classes.button}
        style={disabled ? styles?.disabled : styles?.button}
      >
        {buttonTitle}
      </button>
      {!disabled && (isEnabled && walletConnected ? actionMenu : walletMenu)}
    </div>
  );
};

export default ConnectWalletButton;
