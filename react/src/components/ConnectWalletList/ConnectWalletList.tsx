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
  chromeStoreUrl,
  getWalletConfig,
  generateCip158DeepLink,
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
import { getMobileOS } from '../../common';

const ConnectWalletList = ({
  supportedWallets = [
    'Flint',
    'Nami',
    'Eternl',
    'Yoroi',
    'NuFi',
    'Lace',
    'TyphonCip30',
  ],
  primaryColor,
  borderRadius,
  gap,
  showUnavailableWallets = UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,
  alwaysVisibleWallets = [],
  customCSS,
  peerConnectEnabled = true,
  cip158Enabled = true,
  peerConnectSubtitle,
  peerConnectCustomCSS,
  dAppName = 'Awesome DApp',
  dAppUrl = 'http://awesome-dapp-url.tld/',
  extensions,
  limitNetwork,
  onConnect,
  onConnectError = (walletName: string, error: Error, level: 'error' | 'warn' = 'error') => alert(`${level}: ${error.message} (${walletName})`),
}: ConnectWalletListProps) => {
  const {
    connect,
    dAppConnect,
    disconnect,
    initDappConnect,
    installedExtensions,
    connectedCip45Wallet,
    peerConnectAddress,
  } = useCardano({
    limitNetwork: limitNetwork,
  });

  const [showModalDialog, setShowModalDialog] = useState(false);

  useEffect(() => {
    if (peerConnectEnabled && dAppConnect.current === null) {
      const verifyConnection = (
        walletInfo: IWalletInfo,
        callback: (granted: boolean, autoconnect: boolean) => void,
      ) => {
        if (walletInfo.requestAutoconnect) {
          const accessAndAutoConnect = window.confirm(
            `Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`,
          );

          callback(accessAndAutoConnect, accessAndAutoConnect);
        } else {
          callback(
            window.confirm(
              `Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`,
            ),
            true,
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
        walletInfo?: IWalletInfo,
      ): void => {
        setShowModalDialog(false);
      };

      initDappConnect(
        dAppName,
        dAppUrl,
        verifyConnection,
        onApiInject,
        onApiEject,
        onP2PConnect,
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
    installedExtensions,
  );

  const connectWallet = async (walletName: string) => {
    const onSuccess = () => {
      if (typeof onConnect === 'function') {
        onConnect(walletName);
      }
    };

    const onError = (error: Error) => {
      if (error instanceof WalletExtensionNotFoundError) {
        const config = getWalletConfig(walletName);
        if (config?.chromeExtensionId && config?.chromeExtensionName) {
          window.open(
            `${chromeStoreUrl}${config.chromeExtensionName}/${config.chromeExtensionId}`,
          );
        } else {
          onConnectError(walletName, error, 'warn');
        }
      } else {
        onConnectError(walletName, error);
      }
    };

    connect(walletName, onSuccess, onError, extensions);
  };

  const connectMobileWallet = async (walletName: string) => {
    if (!isMobile) {
      connectWallet(walletName);
      return;
    }

    if (!mobileWallets.includes(walletName.toLowerCase())) {
      return;
    }

    const config = getWalletConfig(walletName);

    if (isWalletInstalled(walletName)) {
      connectWallet(walletName);
      return;
    }

    if (config?.mobileDeepLinkPrefix) {
      window.location.href = `${config.mobileDeepLinkPrefix}${encodeURIComponent(window.location.href)}`;
      return;
    }

    if (cip158Enabled && config?.hasCIP158Support) {
      const deepLink = generateCip158DeepLink(window.location.href);

      const appStoreTimeout = setTimeout(() => {
        if (getMobileOS() === 'iOS') {
          window.location.href = config.appStoreUrl!;
        } else if (getMobileOS() === 'Android') {
          window.location.href = config.playStoreUrl!;
        }
      }, 2500);

      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.visibilityState === 'hidden') {
            clearTimeout(appStoreTimeout);
          }
        },
        { once: true },
      );

      window.location.href = deepLink;
      return;
    }

    if (getMobileOS() === 'iOS') {
      window.location.href = config?.appStoreUrl ?? '';
    } else if (getMobileOS() === 'Android') {
      window.location.href = config?.playStoreUrl ?? '';
    } else {
      onConnectError(walletName, new Error('Please install the wallet from the app store.'), 'warn');
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
          content={peerConnectAddress}
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
            const displayName =
              getWalletConfig(availableWallet)?.displayName ?? availableWallet;
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
                  {capitalize(displayName)}
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
                {capitalize(displayName)}
              </MenuItem>
            );
          })
        ) : (
          <span>{`Please install a wallet browser extension (${formatSupportedWallets(
            supportedWallets,
          )} are supported)`}</span>
        )}
      </Menu>
    </>
  );
};

export default ConnectWalletList;
