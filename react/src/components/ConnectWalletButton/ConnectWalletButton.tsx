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
  formatSupportedWallets,
  mobileWallets,
  getWalletConfig,
  generateCip158DeepLink,
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
    'TyphonCip30',
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
  cip158Enabled = true,
  peerConnectSubtitle,
  peerConnectCustomCSS,
  dAppName = 'Awesome DApp',
  dAppUrl = 'http://awesome-dapp-url.tld/',
  extensions,
  onConnect,
  onDisconnect,
  onSignMessage,
  showAccountBalance = false,
  onStakeAddressClick,
  onConnectError = (walletName: string, error: Error, level: 'error' | 'warn' = 'error') => alert(`${level}: ${error.message} (${walletName})`),
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
    peerConnectAddress,
    connectedCip45Wallet,
  } = useCardano({ limitNetwork: limitNetwork });

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
        console.warn(error);
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
            const displayName =
              getWalletConfig(availableWallet)?.displayName ?? availableWallet;

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
                    {capitalize(displayName)}
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
                  {capitalize(displayName)}
                </MenuItem>
              </DropdownMenu.Item>
            );
          })
        ) : (
          <span id="connect-wallet-hint">{`Please install a wallet browser extension (${formatSupportedWallets(
            supportedWallets,
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
          content={peerConnectAddress}
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
