import { useEffect, useState } from 'react';
import { Address } from '@emurgo/cardano-serialization-lib-asmjs';
import { Buffer } from 'buffer';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    '&:hover .dropdown-content': {
      display: 'block',
    },
    '&:hover .dropbtn': {
      backgroundColor: '#3e8e41',
    },
  },
  button: {
    padding: 16,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
  },
  menu: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: 160,
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    '& a': {
      color: 'black',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
    '& a:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
});

type ConnectWalletButtonProps = {
  label?: string;
  className?: string;
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
    const isEnabled = await cardano.nami.isEnabled();

    if (isEnabled) {
      const hexAddress = await cardano.getRewardAddress();
      const decodedAddress = Address.from_bytes(Buffer.from(hexAddress, 'hex'));
      setWalletAddress(decodedAddress.to_bech32());
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
      <button className={classes.button} disabled={disabled}>
        {buttonTitle}
      </button>
      {walletAddress ? actionMenu : walletMenu}
    </div>
  );
};

export default ConnectWalletButton;
