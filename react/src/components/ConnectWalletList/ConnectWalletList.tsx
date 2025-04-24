import React, { useEffect, useState } from 'react';
import { useCardano } from '../../hooks';
import { ConnectWalletListProps } from '../../types';
import {
  getWalletIcon,
  isWalletInstalled,
  UnavailableWalletVisibility,
  checkIsMobile,
  estimateAvailableWallets,
  WalletExtensionNotFoundError,
  capitalize,
  mobileWallets,
  formatSupportedWallets,
  nativeWallets,
  flintDeepLink,
} from '@cardano-foundation/cardano-connect-with-wallet-core';
import Color from 'color';
import {
  DesktopMenuItem,
  Menu,
  MenuItem,
  MenuItemIcon,
} from './StyledListElements';
import { IWalletInfo } from '@fabianbormann/cardano-peer-connect/dist/src/types';
import ModalDialog from '../ModalDialog/ModalDialog';
import { getMobileOS } from 'src/common';

const ConnectWalletList = ({
  supportedWallets = ['Flint', 'Nami', 'Eternl', 'Yoroi', 'NuFi', 'Lace'],
  primaryColor,
  borderRadius,
  gap,
  showUnavailableWallets = UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,
  alwaysVisibleWallets = [],
  customCSS,
  peerConnectEnabled = true,
  peerConnectSubtitle,
  peerConnectCustomCSS,
  additionalPeerConnectTrackerUrls = [],
  dAppName = 'Awesome DApp',
  dAppUrl = 'http://awesome-dapp-url.tld/',
  limitNetwork,
  onConnect,
  onConnectError,
}: ConnectWalletListProps) => {
  const {
    connect,
    dAppConnect,
    disconnect,
    initDappConnect,
    installedExtensions,
    connectedCip45Wallet,
    meerkatAddress,
  } = useCardano({
    limitNetwork: limitNetwork,
  });

  const [showModalDialog, setShowModalDialog] = useState(false);

  useEffect(() => {
    if (peerConnectEnabled && dAppConnect.current === null) {
      const verifyConnection = (
        walletInfo: IWalletInfo,
        callback: (granted: boolean, autoconnect: boolean) => void
      ) => {
        if (walletInfo.requestAutoconnect) {
          const accessAndAutoConnect = window.confirm(
            `Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`
          );

          callback(accessAndAutoConnect, accessAndAutoConnect);
        } else {
          callback(
            window.confirm(
              `Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`
            ),
            true
          );
        }
      };

      const onApiInject = (name: string, address: string): void => {
        connectWallet(name);
      };

      const onApiEject = (name: string, address: string): void => {
        disconnect();
      };

      const onP2PConnect = (
        address: string,
        walletInfo?: IWalletInfo
      ): void => {
        setShowModalDialog(false);
      };

      initDappConnect(
        dAppName,
        dAppUrl,
        verifyConnection,
        onApiInject,
        onApiEject,
        additionalPeerConnectTrackerUrls,
        onP2PConnect
      );
    }
  }, []);

  const isMobile = checkIsMobile();
  const availableWallets = estimateAvailableWallets(
    peerConnectEnabled && connectedCip45Wallet.current?.name
      ? [connectedCip45Wallet.current.name, ...supportedWallets]
      : supportedWallets,
    showUnavailableWallets,
    alwaysVisibleWallets,
    installedExtensions
  );

  const connectWallet = async (walletName: string) => {
    const onSuccess = () => {
      if (typeof onConnect === 'function') {
        onConnect(walletName);
      }
    };

    const onError = (error: Error) => {
      if (typeof onConnectError === 'function') {
        onConnectError(walletName, error);
      } else {
        if (error instanceof WalletExtensionNotFoundError) {
          const chromeStoreUrl = 'https://chrome.google.com/webstore/detail/';
          if (walletName.toLowerCase() === 'nami') {
            window.open(
              `${chromeStoreUrl}nami/lpfcbjknijpeeillifnkikgncikgfhdo`
            );
          } else if (walletName.toLowerCase() === 'flint') {
            window.open(
              `${chromeStoreUrl}flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj`
            );
          } else if (walletName.toLowerCase() === 'typhon') {
            window.open(
              `${chromeStoreUrl}typhon-wallet/kfdniefadaanbjodldohaedphafoffoh`
            );
          } else if (walletName.toLowerCase() === 'yoroi') {
            window.open(
              `${chromeStoreUrl}yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb`
            );
          } else if (walletName.toLowerCase() === 'eternl') {
            window.open(
              `${chromeStoreUrl}eternl/kmhcihpebfmpgmihbkipmjlmmioameka`
            );
          } else if (walletName.toLowerCase() === 'gerowallet') {
            window.open(
              `${chromeStoreUrl}gerowallet/bgpipimickeadkjlklgciifhnalhdjhe`
            );
          } else if (walletName.toLowerCase() === 'nufi') {
            window.open(
              `${chromeStoreUrl}nufi/gpnihlnnodeiiaakbikldcihojploeca`
            );
          } else if (walletName.toLowerCase() === 'lace') {
            window.open(
              `${chromeStoreUrl}lace/gafhhkghbfjjkeiendhlofajokpaflmk`
            );
          } else {
            alert(
              `Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`
            );
          }
        } else {
          alert(`Something went wrong. Please try again later.`);
        }
      }
    };

    connect(walletName, onSuccess, onError);
  };

  const connectMobileWallet = async (walletName: string) => {
    if (!isMobile) {
      connectWallet(walletName);
    }

    if (!mobileWallets.includes(walletName.toLowerCase())) {
      return;
    }

    if (walletName.toLowerCase() === 'flint') {
      if (isWalletInstalled('flint')) {
        connectWallet(walletName);
      } else {
        window.location.href = `${flintDeepLink}${encodeURIComponent(
          window.location.href
        )}`;
      }
    }

    if (['eternl', 'vespr', 'begin'].includes(walletName.toLowerCase())) {
      if (isWalletInstalled(walletName)) {
        connectWallet(walletName);
      } else {
        const nativeWallet = walletName.toLowerCase() as
          | 'eternl'
          | 'vespr'
          | 'begin';
        if (getMobileOS() === 'iOS') {
          window.location.href = nativeWallets[nativeWallet].playStoreUrl;
        } else if (getMobileOS() === 'Android') {
          window.location.href = nativeWallets[nativeWallet].appStoreUrl;
        } else {
          alert('Please install the wallet from the app store.');
        }
      }
    }
  };

  const themeColorObject = primaryColor
    ? Color(primaryColor)
    : Color('#0538AF');

  return (
    <>
      {peerConnectEnabled && (
        <ModalDialog
          handleClose={() => setShowModalDialog(false)}
          content={meerkatAddress}
          icon={dAppConnect.current?.getIdenticon()}
          visible={showModalDialog}
          primaryColor={themeColorObject.hex()}
          subtitle={peerConnectSubtitle}
          customCSS={peerConnectCustomCSS}
        />
      )}

      <Menu customCSS={customCSS || ''} data-testid="connect-wallet-list">
        {peerConnectEnabled && (
          <MenuItem
            gap={gap || 0}
            key="peer-connect"
            borderRadius={borderRadius || 0}
            primaryColor={themeColorObject.hex()}
            primaryColorLight={themeColorObject.mix(Color('white'), 0.9).hex()}
            onClick={() => setShowModalDialog(true)}
          >
            <MenuItemIcon src={getWalletIcon('peer-connect')} />
            P2P Wallet
          </MenuItem>
        )}
        {availableWallets ? (
          availableWallets.map((availableWallet) => {
            if (
              isMobile &&
              !mobileWallets.includes(availableWallet.toLowerCase())
            ) {
              return (
                <DesktopMenuItem
                  primaryColor={themeColorObject.hex()}
                  primaryColorLight={themeColorObject
                    .mix(Color('white'), 0.9)
                    .hex()}
                  borderRadius={borderRadius || 0}
                  gap={gap || 0}
                  key={availableWallet}
                >
                  <MenuItemIcon src={getWalletIcon(availableWallet)} />
                  {capitalize(availableWallet)}
                  <span>Desktop Only</span>
                </DesktopMenuItem>
              );
            }

            return (
              <MenuItem
                primaryColor={themeColorObject.hex()}
                primaryColorLight={themeColorObject
                  .mix(Color('white'), 0.9)
                  .hex()}
                borderRadius={borderRadius || 0}
                gap={gap || 0}
                key={availableWallet}
                onClick={() => connectMobileWallet(availableWallet)}
              >
                <MenuItemIcon
                  src={getWalletIcon(availableWallet)}
                ></MenuItemIcon>
                {capitalize(availableWallet)}
              </MenuItem>
            );
          })
        ) : (
          <span>{`Please install a wallet browser extension (${formatSupportedWallets(
            supportedWallets
          )} are supported)`}</span>
        )}
      </Menu>
    </>
  );
};

export default ConnectWalletList;
