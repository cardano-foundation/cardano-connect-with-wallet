import { capitalize, formatSupportedWallets } from '../../common';
import { ConnectWalletListProps, SignErrorCode } from '../../global/types';
import { useCardano, useLocalStorage } from '../../hooks';
import { getInstalledWalletExtensions } from '../../utils';
import Color from 'color';
import { Menu, MenuItem, MenuItemIcon } from './StyledListElements';

const ConnectWalletList = ({
  supportedWallets = ['Nami', 'Eternl', 'Flint', 'Yoroi'],
  onConnect,
  primaryColor,
  borderRadius,
  gap,
  customCSS,
}: ConnectWalletListProps) => {
  const [walletConnected, setWalletConnected] = useLocalStorage(
    'cf-wallet-connected',
    false
  );

  const cardano = (window as any).cardano;
  const availableWallets = getInstalledWalletExtensions(supportedWallets);
  const { connect } = useCardano();

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

  const themeColorObject = primaryColor
    ? Color(primaryColor)
    : Color('#0538AF');

  return (
    <Menu customCSS={customCSS}>
      {availableWallets ? (
        availableWallets.map((availableWallet) => (
          <MenuItem
            primaryColor={themeColorObject.hex()}
            primaryColorLight={themeColorObject.alpha(0.1).hexa()}
            borderRadius={borderRadius}
            gap={gap}
            key={availableWallet}
            onClick={() => connectWallet(availableWallet)}
          >
            <MenuItemIcon src={cardano[availableWallet].icon}></MenuItemIcon>
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
};

export default ConnectWalletList;
