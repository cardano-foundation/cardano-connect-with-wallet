class CardanoConnectWallet {
  constructor(parentElement, showAccountBalance = false) {
    if (typeof CardanoConnectWithWalletCore === 'undefined') {
      throw new Error(
        'CardanoConnectWithWalletCore is not defined. Make sure you have included the script tag in your html file.'
      );
    }

    this.dropdown = document.createElement('div');
    this.dropdown.className = 'connect-wallet-dropdown';
    this.button = document.createElement('button');
    this.button.className = 'connect-wallet-button';
    this.menu = document.createElement('div');
    this.menu.className = 'connect-wallet-menu';

    this.dropdown.append(this.button, this.menu);
    parentElement.appendChild(this.dropdown);

    this.showAccountBalance = showAccountBalance;

    this.wallet = CardanoConnectWithWalletCore.Wallet;

    this.isEnabled = false;
    this.isConnected = false;
    this.isConnecting = false;
    this.stakeAddress = null;
    this.enabledWallet = null;
    this.usedAddresses = null;
    this.unusedAddresses = null;
    this.installedExtensions = null;
    this.accountBalance = null;
    this.lastConnectedWallet = null;
    this.meerkatAddress = null;

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
    if (!this.installedExtensions) {
      return;
    }

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
    this.button.appendChild(document.createTextNode(buttonTitle));

    this.menu.innerHTML = '';

    if (this.stakeAddress !== null) {
      const menuItem = document.createElement('span');
      menuItem.className = 'connect-wallet-menu-item';

      menuItem.appendChild(document.createTextNode('Disconnect'));
      menuItem.onclick = () => {
        this.wallet.disconnect();
      };

      this.menu.appendChild(menuItem);
    } else {
      for (const extension of this.installedExtensions) {
        const icon = document.createElement('img');
        icon.src = CardanoConnectWithWalletCore.getWalletIcon(extension);
        icon.className = 'connect-wallet-menu-item-icon';

        const menuItem = document.createElement('span');
        menuItem.className = 'connect-wallet-menu-item';
        menuItem.appendChild(icon);
        menuItem.appendChild(
          document.createTextNode(
            CardanoConnectWithWalletCore.capitalize(extension)
          )
        );

        menuItem.onclick = () => {
          this.wallet.connectToWallet(extension);
        };

        this.menu.appendChild(menuItem);
      }
    }
  }
}
