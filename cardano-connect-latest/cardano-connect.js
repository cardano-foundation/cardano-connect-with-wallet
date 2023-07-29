const Core =
  typeof CardanoConnectWithWalletCore !== 'undefined'
    ? CardanoConnectWithWalletCore
    : undefined;

class CardanoConnectWallet {
  constructor(
    parent,
    {
      label = 'Connect Wallet',
      showAccountBalance = false,
      showEnabledWalletIcon = true,
      peerConnectEnabled = false,
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
      message = undefined,
      dAppName = 'Awesome DApp',
      dAppUrl = 'http://awesome-dapp-url.tld/',
    } = {}
  ) {
    if (typeof parent === 'undefined') {
      throw new Error(
        'CardanoConnect parent is not defined. Please provide a parent element.'
      );
    }

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
    parent.appendChild(this.dropdown);

    if (peerConnectEnabled) {
      if (typeof CardanoPeerConnect === 'undefined') {
        throw new Error(
          'CardanoPeerConnect is not defined. Disable peerConnectEnabled or make sure you have included the script tag in your html file: <script src="https://fabianbormann.github.io/cardano-peer-connect/bundle.min.js"></script>"'
        );
      }

      const verifyConnection = (walletInfo, callback) => {
        callback(
          window.confirm(
            `Do you want to connect to wallet ${walletInfo.address}?`
          ),
          true
        );
      };

      const onApiInject = (name, address) => {
        this.wallet.connectToWallet(name);
      };

      const onApiEject = (name, address) => {
        this.wallet.disconnect();
      };

      this.dAppConnect = new CardanoPeerConnect.DAppPeerConnect({
        dAppInfo: {
          name: dAppName,
          url: dAppUrl,
        },
        verifyConnection: verifyConnection,
        onApiInject: onApiInject,
        onApiEject: onApiEject,
      });

      this.dAppConnect.generateIdenticon();

      this.modal = document.createElement('div');
      this.modal.className = 'connect-wallet-modal';

      this.modalContent = document.createElement('div');
      this.modalContent.className = 'connect-wallet-modal-content';

      this.qrCode = document.createElement('div');
      this.dAppConnect.generateQRCode(this.qrCode);

      this.modalContent.appendChild(this.qrCode);

      this.info = document.createElement('p');
      this.info.innerHTML =
        'You can use a CIP45 compliant mobile wallet on your smartphone (e.g. Eternl) to connect a P2P wallet';
      this.info.style = 'max-width: 300px;';
      this.modalContent.appendChild(this.info);

      this.modal.appendChild(this.modalContent);
      this.modal.onclick = () => {
        this.modal.style.display = 'none';
      };

      document.getElementsByTagName('body')[0].appendChild(this.modal);
    }

    this.showAccountBalance = showAccountBalance;
    this.showEnabledWalletIcon = showEnabledWalletIcon;
    this.message = message;
    this.supportedWallets = supportedWallets;
    this.showUnavailableWallets =
      showUnavailableWallets ||
      Core.UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE;
    this.alwaysVisibleWallets = alwaysVisibleWallets;
    this.peerConnectEnabled = peerConnectEnabled;

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
    this.label = label;

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

  createMenuItem(label, onClick, iconSrc, id) {
    const menuItem = document.createElement('span');
    menuItem.className = 'connect-wallet-menu-item';

    if (typeof onClick === 'function') {
      menuItem.onclick = onClick;
    }

    if (typeof id === 'string') {
      menuItem.id = id;
    }

    if (typeof iconSrc === 'string') {
      const icon = document.createElement('img');
      icon.src = iconSrc;
      icon.className = 'connect-wallet-menu-item-icon';
      menuItem.appendChild(icon);
    }

    menuItem.appendChild(document.createTextNode(label));
    return menuItem;
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
        : this.label;

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

    if (this.peerConnectEnabled) {
      this.menu.appendChild(
        this.createMenuItem(
          'P2P Wallet',
          () => {
            this.modal.style.display = 'block';
          },
          Core.getWalletIcon('peer-connect')
        )
      );
    }

    if (availableWallets.length === 0) {
      const label = `Please install a wallet browser extension (${Core.formatSupportedWallets(
        this.supportedWallets
      )} are supported)`;

      this.menu.appendChild(
        this.createMenuItem(label, null, null, 'connect-wallet-hint')
      );
    } else if (this.stakeAddress !== null) {
      if (typeof this.message === 'string') {
        this.menu.appendChild(
          this.createMenuItem('Sign Message', () => {
            this.wallet.signMessage(this.message);
          })
        );
      }

      this.menu.appendChild(
        this.createMenuItem('Disconnect', () => {
          this.wallet.disconnect();
        })
      );
    } else {
      for (const extension of availableWallets) {
        this.menu.appendChild(
          this.createMenuItem(
            Core.capitalize(extension),
            () => {
              this.wallet.connectToWallet(extension);
            },
            Core.getWalletIcon(extension)
          )
        );
      }
    }
  }
}
