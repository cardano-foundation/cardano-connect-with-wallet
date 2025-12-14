import React from 'react';
import { ConnectWalletButtonProps } from '../../types';
import {
  Dropdown,
  Menu,
  MenuItem,
  MenuItemIcon,
  Button,
  DesktopMenuItem,
} from './StyledButtonElements';
import { useCardano } from '../../hooks';
import Color from 'color';
import {
  getWalletIcon,
  isWalletInstalled,
  checkIsMobile,
  estimateAvailableWallets,
  WalletExtensionNotFoundError,
  UnavailableWalletVisibility,
  capitalize,
  chromeStoreUrl,
  flintDeepLink,
  formatSupportedWallets,
  mobileWallets,
  nativeWallets,
  chromeWalletExtensions,
} from '@cardano-foundation/cardano-connect-with-wallet-core';
import { useEffect, useState } from 'react';
import ModalDialog from '../ModalDialog/ModalDialog';
import { IWalletInfo } from '@fabianbormann/cardano-peer-connect/dist/src/types';
import { getMobileOS } from '../../common';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const ConnectWalletButton = ({
  label,
  disabled,
  message,
  supportedWallets = [
    'Flint',
    'Nami',
    'Eternl',
    'Yoroi',
    'Typhon',
    'NuFi',
    'Lace',
  ],
  showUnavailableWallets = UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,
  alwaysVisibleWallets = [],
  primaryColor,
  borderRadius = 15,
  customCSS,
  customActions = [],
  hideActionMenu = false,
  afterComponent,
  beforeComponent,
  limitNetwork,
  peerConnectEnabled = true,
  peerConnectSubtitle,
  peerConnectCustomCSS,
  additionalPeerConnectTrackerUrls = [],
  dAppName = 'Awesome DApp',
  dAppUrl = 'http://awesome-dapp-url.tld/',
  onConnect,
  onDisconnect,
  onSignMessage,
  showAccountBalance = false,
  onStakeAddressClick,
  onConnectError,
}: ConnectWalletButtonProps) => {
  const {
    isEnabled,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
    isConnected,
    installedExtensions,
    enabledWallet,
    accountBalance,
    dAppConnect,
    initDappConnect,
    meerkatAddress,
    connectedCip45Wallet,
  } = useCardano({ limitNetwork: limitNetwork });

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
          if (walletName.toLowerCase() === 'nami') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.NAMI.name}/${chromeWalletExtensions.NAMI.id}`
            );
          } else if (walletName.toLowerCase() === 'flint') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.FLINT.name}/${chromeWalletExtensions.FLINT.id}`
            );
          } else if (walletName.toLowerCase() === 'typhon') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.TYPHON.name}/${chromeWalletExtensions.TYPHON.id}`
            );
          } else if (walletName.toLowerCase() === 'yoroi') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.YOROI.name}/${chromeWalletExtensions.YOROI.id}`
            );
          } else if (walletName.toLowerCase() === 'eternl') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.ETERNL.name}/${chromeWalletExtensions.ETERNL.id}`
            );
          } else if (walletName.toLowerCase() === 'gerowallet') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.GEROWALLET.name}/${chromeWalletExtensions.GEROWALLET.id}`
            );
          } else if (walletName.toLowerCase() === 'nufi') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.NUFI.name}/${chromeWalletExtensions.NUFI.id}`
            );
          } else if (walletName.toLowerCase() === 'lace') {
            window.open(
              `${chromeStoreUrl}${chromeWalletExtensions.LACE.name}/${chromeWalletExtensions.LACE.id}`
            );
          } else {
            alert(
              `Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`
            );
          }
        } else {
          alert(`Something went wrong. Please try again later.`);
          console.warn(error);
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
          window.location.href = nativeWallets[nativeWallet].appStoreUrl;
        } else if (getMobileOS() === 'Android') {
          window.location.href = nativeWallets[nativeWallet].playStoreUrl;
        } else {
          alert('Please install the wallet from the app store.');
        }
      }
    }
  };

  const themeColorObject = primaryColor
    ? Color(primaryColor)
    : Color('#0538AF');

  const getDefaultButtonTitle = () => {
    if (showAccountBalance) {
      const balanceWithTwoDecimalPlaces =
        Math.round(accountBalance * 100) / 100;
      return `₳ ${balanceWithTwoDecimalPlaces}`;
    }
    return `${stakeAddress!.slice(0, 12)}...`;
  };

  const buttonTitle =
    stakeAddress && isConnected
      ? getDefaultButtonTitle()
      : label || 'Connect Wallet';

  const clickStakeAddress = () => {
    if (
      stakeAddress &&
      isConnected &&
      typeof onStakeAddressClick === 'function'
    ) {
      onStakeAddressClick(stakeAddress);
    }
  };

  const renderWalletMenu = () => (
    <DropdownMenu.Content asChild>
      <Menu id="connect-wallet-menu">
        {peerConnectEnabled && (
          <DropdownMenu.Item asChild onSelect={() => setShowModalDialog(true)}>
            <MenuItem
              gap={0}
              borderRadius={borderRadius}
              primaryColor={themeColorObject.hex()}
              primaryColorLight={themeColorObject
                .mix(Color('white'), 0.9)
                .hex()}
            >
              <MenuItemIcon src={getWalletIcon('peer-connect')} />
              P2P Wallet
            </MenuItem>
          </DropdownMenu.Item>
        )}
        {availableWallets ? (
          availableWallets.map((availableWallet) => {
            if (
              isMobile &&
              !mobileWallets.includes(availableWallet.toLowerCase())
            ) {
              return (
                <DropdownMenu.Item asChild key={availableWallet} disabled>
                  <DesktopMenuItem
                    borderRadius={borderRadius}
                    key={availableWallet}
                  >
                    <MenuItemIcon src={getWalletIcon(availableWallet)} />
                    {capitalize(availableWallet)}
                    <span>Desktop Only</span>
                  </DesktopMenuItem>
                </DropdownMenu.Item>
              );
            }

            return (
              <DropdownMenu.Item
                asChild
                key={availableWallet}
                onSelect={() => connectMobileWallet(availableWallet)}
              >
                <MenuItem
                  gap={0}
                  borderRadius={borderRadius}
                  primaryColor={themeColorObject.hex()}
                  primaryColorLight={themeColorObject
                    .mix(Color('white'), 0.9)
                    .hex()}
                >
                  <MenuItemIcon src={getWalletIcon(availableWallet)} />
                  {capitalize(availableWallet)}
                </MenuItem>
              </DropdownMenu.Item>
            );
          })
        ) : (
          <span id="connect-wallet-hint">{`Please install a wallet browser extension (${formatSupportedWallets(
            supportedWallets
          )} are supported)`}</span>
        )}
      </Menu>
    </DropdownMenu.Content>
  );

  const renderActionMenu = () =>
    hideActionMenu ? null : (
      <DropdownMenu.Content asChild>
        <Menu id="connect-wallet-menu">
          {typeof message === 'string' && (
            <DropdownMenu.Item
              asChild
              onSelect={() => signMessage(message, onSignMessage)}
            >
              <MenuItem
                gap={0}
                borderRadius={borderRadius}
                primaryColor={themeColorObject.hex()}
                primaryColorLight={themeColorObject
                  .mix(Color('white'), 0.9)
                  .hex()}
              >
                Sign a message
              </MenuItem>
            </DropdownMenu.Item>
          )}
          {customActions.map((customAction, index) => (
            <DropdownMenu.Item
              asChild
              key={`custom-action-${index}`}
              onSelect={customAction.onClick}
            >
              <MenuItem
                gap={0}
                borderRadius={borderRadius}
                primaryColor={themeColorObject.hex()}
                primaryColorLight={themeColorObject
                  .mix(Color('white'), 0.9)
                  .hex()}
              >
                {customAction.label}
              </MenuItem>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Item
            asChild
            onSelect={() => {
              disconnect();
              if (typeof onDisconnect === 'function') {
                onDisconnect();
              }
            }}
          >
            <MenuItem
              gap={0}
              borderRadius={borderRadius}
              primaryColor={themeColorObject.hex()}
              primaryColorLight={themeColorObject
                .mix(Color('white'), 0.9)
                .hex()}
            >
              Disconnect
            </MenuItem>
          </DropdownMenu.Item>
        </Menu>
      </DropdownMenu.Content>
    );

  if (typeof beforeComponent === 'undefined' && enabledWallet) {
    const walletIcon = getWalletIcon(enabledWallet);
    beforeComponent = (
      <img
        height={24}
        width={24}
        style={{ marginRight: '8px' }}
        src={walletIcon}
        alt={`${enabledWallet}-icon`}
      />
    );
  }

  return (
    <Dropdown
      id="connect-wallet-dropdown"
      customCSS={customCSS || ''}
      borderRadius={0}
      primaryColor={themeColorObject.hex()}
    >
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

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            customCSS=""
            id="connect-wallet-button"
            onClick={clickStakeAddress}
            borderRadius={borderRadius}
            primaryColor={themeColorObject.hex()}
            disabled={disabled}
          >
            {beforeComponent}
            {buttonTitle}
            {afterComponent}
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          {!disabled &&
            (isEnabled && isConnected
              ? renderActionMenu()
              : renderWalletMenu())}
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Dropdown>
  );
};

export default ConnectWalletButton;
