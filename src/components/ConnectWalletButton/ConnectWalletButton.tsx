import React, { useEffect, useState } from 'react';
import { utils } from '@stricahq/typhonjs';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ConnectWalletButtonProps } from '../../global/types';
import { useButtonStyles } from './useButtonStyles';

const ConnectWalletButton = ({
  label = 'Connect Wallet',
  disabled,
  message,
  supportedWallets = ['Nami', 'Eternl', 'Flint', 'Yoroi'],
  onConnect,
  onSignMessage,
}: ConnectWalletButtonProps) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [availableWallets, setAvailableWallets] = useState<Array<string>>([]);
  const [walletConnected, setWalletConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );
  const classes = useButtonStyles();
  const cardano = (window as any).cardano;

  useEffect(() => {
    const walletExtensions = Object.keys(cardano).filter((walletExtension) =>
      supportedWallets
        .map((walletName) => walletName.toLowerCase())
        .includes(walletExtension)
    );
    setAvailableWallets(walletExtensions);
  }, []);

  const fetchAddress = async () => {
    let isEnabled = false;

    if (typeof cardano.isEnabled === 'function') {
      isEnabled = await cardano.isEnabled();
    } else {
      const walletExtensions = Object.keys(cardano);
      for (const walletExtension of walletExtensions) {
        if (typeof cardano[walletExtension].isEnabled === 'function') {
          isEnabled = isEnabled || (await cardano[walletExtension].isEnabled());
        }
      }
    }

    if (isEnabled && walletConnected) {
      if (typeof cardano.getRewardAddress === 'function') {
        const hexAddress = await cardano.getRewardAddress();
        const bech32Address = utils.getAddressFromHex(hexAddress).getBech32();
        setWalletAddress(bech32Address);
      }
    } else {
      setWalletAddress(null);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, [walletConnected]);

  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const startSigning = async () => {
    if (typeof message === 'undefined') {
      return;
    }

    const hexAddress = await cardano.getRewardAddress();
    let hexMessage = '';

    for (var i = 0, l = message.length; i < l; i++) {
      hexMessage += message.charCodeAt(i).toString(16);
    }

    try {
      const signedMessage = await cardano.signData(hexAddress, hexMessage);
      if (typeof onSignMessage === 'function') {
        onSignMessage(signedMessage);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const formatSupportedWallets = () => {
    if (supportedWallets.length > 1) {
      return `${supportedWallets.slice(0, -1).join(', ')} or ${
        supportedWallets.slice(-1)[0]
      }`;
    } else {
      return supportedWallets[0];
    }
  };

  const connectWallet = async (walletName: string) => {
    if (typeof cardano !== 'undefined') {
      if (typeof cardano[walletName] !== 'undefined') {
        await cardano[walletName].enable();
        setWalletConnected(true);
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
        `Please make sure you are using a modern browser and a wallet extension such as ${formatSupportedWallets()} has been installed.`
      );
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress(null);
  };

  const buttonTitle = walletAddress
    ? `${walletAddress.slice(0, 12)}...`
    : label;

  const walletMenu = (
    <div className={classes.menu}>
      {availableWallets ? (
        availableWallets.map((availableWallet) => (
          <span onClick={() => connectWallet(availableWallet)}>
            <img
              className={classes.icon}
              src={cardano[availableWallet].icon}
            ></img>
            {capitalize(availableWallet)}
          </span>
        ))
      ) : (
        <span>{`Please install a wallet browser extension (${formatSupportedWallets()} are supported)`}</span>
      )}
    </div>
  );

  const actionMenu = (
    <div className={classes.menu}>
      {typeof message === 'string' && (
        <span onClick={startSigning}>Sign a message</span>
      )}
      <span onClick={disconnectWallet}>Disconnect</span>
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
