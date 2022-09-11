import { Address } from '@emurgo/cardano-serialization-lib-asmjs';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dropdown: {
    width: 160,
    fontWeight: 'bold',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: 8,
    '&:hover $menu': {
      display: 'block',
    },
    '&:hover $button': {
      backgroundColor: '#0538AF',
      color: 'white',
    },
  },
  button: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    border: '1px solid #0538AF',
    borderRadius: '16px',
    color: '#0538AF',
    backgroundColor: 'white',
  },
  menu: {
    display: 'none',
    position: 'absolute',
    marginTop: 8,
    fontFamily: 'sans-serif',
    width: '100%',
    zIndex: 1,
    '& a': {
      color: '#0538AF',
      padding: '12px 16px',
      textDecoration: 'none',
      borderTop: '1px solid #0538AF',
      borderLeft: '1px solid #0538AF',
      borderRight: '1px solid #0538AF',
      display: 'block',
    },
    '& a:first-child': {
      border: '1px solid #0538AF',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottom: 'none',
    },
    '& a:last-child': {
      border: '1px solid #0538AF',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    '& a:hover': {
      backgroundColor: 'rgba(5, 56, 175, 0.1)',
    },
  },
  disabled: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    border: '1px solid #333',
    borderRadius: '16px',
    color: '#333',
    backgroundColor: '#eee',
  },
});

type ConnectWalletButtonProps = {
  label?: string;
  disabled?: boolean;
  message?: string;
  onConnect?: () => void;
  onSignMessage?: (signedMessage: string) => void;
};

const ConnectWalletButton = ({
  label = 'Connect Wallet',
  disabled,
  message,
  onConnect,
  onSignMessage,
}: ConnectWalletButtonProps) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const classes = useStyles();

  const cardano: any = (window as any).cardano;

  const fetchAddress = async () => {
    let isEnabled = false;

    if (typeof cardano.isEnabled === 'function') {
      isEnabled = await cardano.isEnabled();
    }

    if (isEnabled) {
      const hexAddress = await cardano.getRewardAddress();
      const decodedAddress = Address.from_bytes(Buffer.from(hexAddress, 'hex'));
      setWalletAddress(decodedAddress.to_bech32());
      setWalletAddress(hexAddress);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const startSigning = async () => {
    if (typeof message === 'undefined') {
      return;
    }

    const hexAddress = await cardano.getRewardAddress();
    let hexMessage = '';

    for (var i = 0, l = message.length; i < l; i++) {
      hexMessage += message.charCodeAt(i).toString(16);
    }

    const signedMessage = await cardano.signData(hexAddress, hexMessage);
    if (typeof onSignMessage === 'function') {
      onSignMessage(signedMessage);
    }
  };

  const connectWallet = async (walletName: string) => {
    if (typeof cardano !== 'undefined') {
      if (typeof cardano[walletName] !== 'undefined') {
        await cardano[walletName].enable();
        fetchAddress();
        if (typeof onConnect === 'function') {
          onConnect();
        }
      } else {
        alert(
          `Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`
        );
      }
    } else {
      alert(
        'Please make sure you are using a modern browser and a wallet extension such as Yoroi, Nami, Eternl, or Flint has been installed.'
      );
    }
  };
  const buttonTitle = walletAddress
    ? `${walletAddress.slice(0, 12)}...`
    : label;

  const walletMenu = (
    <div className={classes.menu}>
      <a onClick={() => connectWallet('nami')}>Nami</a>
      <a onClick={() => connectWallet('eternl')}>Eternl</a>
      <a onClick={() => connectWallet('yoroi')}>Yoroi</a>
      <a onClick={() => connectWallet('flint')}>Flint</a>
    </div>
  );

  const actionMenu = (
    <div className={classes.menu}>
      <a onClick={startSigning}>Sign</a>
    </div>
  );

  return (
    <div className={classes.dropdown}>
      <button
        className={disabled ? classes.disabled : classes.button}
        disabled={disabled}
      >
        {buttonTitle}
      </button>
      {!disabled && (walletAddress ? actionMenu : walletMenu)}
    </div>
  );
};

export default ConnectWalletButton;
