const Core =
  typeof CardanoConnectWithWalletCore !== 'undefined'
    ? CardanoConnectWithWalletCore
    : undefined;

class CardanoConnectWallet {
  constructor(
    parentElement,
    showAccountBalance = false,
    showEnabledWalletIcon = true,
    displaySignMessage = true,
    showUnavailableWallets = undefined,
    supportedWallets = [
      'Flint',
      'Nami',
      'Eternl',
      'Yoroi',
      'Typhon',
      'NuFi',
      'Lace',
    ],
    alwaysVisibleWallets = [],
    message = 'Augusta Ada King, Countess of Lovelace'
  ) {
    if (typeof Core === 'undefined') {
      throw new Error(
        'CardanoConnectWithWalletCore is not defined. Make sure you have included the script tag in your html file: <script src="https://cardano-foundation.github.io/cardano-connect-with-wallet/bundle-latest/index.js></script>"'
      );
    }

    this.dropdown = document.createElement('div');
    this.dropdown.className = 'connect-wallet-dropdown';
    this.iconImage = document.createElement('img');
    this.button = document.createElement('button');
    this.button.className = 'connect-wallet-button';
    this.menu = document.createElement('div');
    this.menu.className = 'connect-wallet-menu';

    this.dropdown.append(this.button, this.menu);
    parentElement.appendChild(this.dropdown);

    this.showAccountBalance = showAccountBalance;
    this.showEnabledWalletIcon = showEnabledWalletIcon;
    this.displaySignMessage = displaySignMessage;
    this.message = message;
    this.supportedWallets = supportedWallets;
    this.showUnavailableWallets =
      showUnavailableWallets ||
      Core.UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE;
    this.alwaysVisibleWallets = alwaysVisibleWallets;

    this.wallet = Core.Wallet;

    this.isEnabled = false;
    this.isConnected = false;
    this.isConnecting = false;
    this.stakeAddress = null;
    this.enabledWallet = null;
    this.usedAddresses = null;
    this.unusedAddresses = null;
    this.installedExtensions = [];
    this.accountBalance = null;
    this.lastConnectedWallet = null;
    this.meerkatAddress = null;

    this.wallet.addEventListener('enabledWallet', (enabledWallet) => {
      this.enabledWallet = enabledWallet;
      this.updateDropdownMenu();
    });

    this.wallet.addEventListener(
      'installedWalletExtensions',
      (installedExtensions) => {
        this.installedExtensions = installedExtensions;
        this.updateDropdownMenu();
      }
    );

    this.wallet.addEventListener('stakeAddress', (stakeAddress) => {
      this.stakeAddress = stakeAddress;
      this.updateDropdownMenu();
    });

    this.wallet.addEventListener('connected', (isConnected) => {
      this.isConnected = isConnected;
      this.updateDropdownMenu();
    });

    this.wallet.startInjectWalletListener();
    this.updateDropdownMenu();
  }

  updateDropdownMenu() {
    const isMobile = Core.checkIsMobile();
    const availableWallets = Core.estimateAvailableWallets(
      this.supportedWallets,
      this.showUnavailableWallets,
      this.alwaysVisibleWallets,
      this.installedExtensions
    );

    const getDefaultButtonTitle = () => {
      if (this.showAccountBalance) {
        const balanceWithTwoDecimalPlaces =
          Math.round(this.accountBalance * 100) / 100;
        return `₳ ${balanceWithTwoDecimalPlaces}`;
      }
      return `${this.stakeAddress.slice(0, 12)}...`;
    };

    const buttonTitle =
      this.stakeAddress && this.isConnected
        ? getDefaultButtonTitle()
        : 'Connect Wallet';

    this.button.innerHTML = '';

    if (this.showEnabledWalletIcon && this.isConnected && this.enabledWallet) {
      const walletIcon = Core.getWalletIcon(this.enabledWallet);
      this.iconImage.height = 24;
      this.iconImage.width = 24;
      this.iconImage.style = 'margin-right: 8px';
      this.iconImage.src = walletIcon;
      this.iconImage.alt = `${this.enabledWallet}-icon`;
    } else {
      this.iconImage = document.createElement('img');
    }

    this.button.appendChild(this.iconImage);
    this.button.appendChild(document.createTextNode(buttonTitle));

    this.menu.innerHTML = '';

    if (availableWallets.length === 0) {
      const menuItem = document.createElement('span');
      menuItem.className = 'connect-wallet-menu-item';
      menuItem.id = 'connect-wallet-hint';
      menuItem.innerHTML = `Please install a wallet browser extension (${Core.formatSupportedWallets(
        this.supportedWallets
      )} are supported)`;

      this.menu.appendChild(menuItem);
    } else if (this.stakeAddress !== null) {
      if (this.displaySignMessage) {
        const menuItem = document.createElement('span');
        menuItem.className = 'connect-wallet-menu-item';

        menuItem.appendChild(document.createTextNode('Sign Message'));
        menuItem.onclick = () => {
          this.wallet.signMessage(this.message);
        };

        this.menu.appendChild(menuItem);
      }

      const menuItem = document.createElement('span');
      menuItem.className = 'connect-wallet-menu-item';

      menuItem.appendChild(document.createTextNode('Disconnect'));
      menuItem.onclick = () => {
        this.wallet.disconnect();
      };

      this.menu.appendChild(menuItem);
    } else {
      for (const extension of availableWallets) {
        const icon = document.createElement('img');
        icon.src = Core.getWalletIcon(extension);
        icon.className = 'connect-wallet-menu-item-icon';

        const menuItem = document.createElement('span');
        menuItem.className = 'connect-wallet-menu-item';
        menuItem.appendChild(icon);
        menuItem.appendChild(
          document.createTextNode(Core.capitalize(extension))
        );

        menuItem.onclick = () => {
          this.wallet.connectToWallet(extension);
        };

        this.menu.appendChild(menuItem);
      }
    }
  }
}
