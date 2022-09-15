import React, { useEffect, useState } from 'react';
import { capitalize, formatSupportedWallets } from '../../common';
import { ConnectWalletListProps, SignErrorCode } from '../../global/types';
import { useCardano, useLocalStorage } from '../../hooks';
import { getInstalledWalletExtensions } from '../../utils';
import { useListStyles } from './useListStyles';

const ConnectWalletList = ({
  supportedWallets = ['Nami', 'Eternl', 'Flint', 'Yoroi'],
  onConnect,
}: ConnectWalletListProps) => {
  const [walletConnected, setWalletConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );

  const cardano = (window as any).cardano;
  const availableWallets = getInstalledWalletExtensions(supportedWallets);
  const { connect } = useCardano();
  const classes = useListStyles();

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

  return (
    <div className={classes.menu}>
      {availableWallets ? (
        availableWallets.map((availableWallet) => (
          <span
            key={availableWallet}
            onClick={() => connectWallet(availableWallet)}
          >
            <img
              className={classes.icon}
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
};

export default ConnectWalletList;
