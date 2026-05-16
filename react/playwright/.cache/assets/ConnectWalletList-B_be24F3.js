import { y as yt, r as reactExports, c as checkIsMobile, e as estimateAvailableWallets, U as UnavailableWalletVisibility, W as WalletExtensionNotFoundError, g as getWalletConfig, a as chromeStoreUrl, m as mobileWallets, i as isWalletInstalled, b as generateCip158DeepLink, j as jsxRuntimeExports, d as getWalletIcon, f as capitalize, h as formatSupportedWallets } from './index-Dcr_zcAl.js';
import { m as useCardano, n as getMobileOS, C as Color, M as ModalDialog } from './common-DRPlBVDz.js';

const Menu = yt("div").withConfig({
  shouldForwardProp: (prop) => !["customCSS"].includes(prop)
})`
  font-family: sans-serif;
  min-width: 160px;
  max-width: 240px;
  width: fit-content;
  z-index: 1;
  ${(props) => props.customCSS}
`;
const MenuItem = yt("button").withConfig({
  shouldForwardProp: (prop) => !["primaryColor", "primaryColorLight", "borderRadius", "gap"].includes(
    prop
  )
})`
  color: ${(props) => props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  cursor: pointer;
  border-color: ${(props) => props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-family: sans-serif;

  ${(props) => props.gap && props.gap > 0 ? `margin-bottom: ${props.gap}px;
         border-bottom: 1px solid ${props.primaryColor};` : `&:first-child {
          border-bottom: none;
        }
        
        &:last-child {
          border: 1px solid ${props.primaryColor};
        }`}

  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  ${(props) => props.borderRadius && (!props.gap || props.gap < 1) && `border-radius: unset;
      &:first-child {
    border-top-left-radius: ${props.borderRadius}px;
    border-top-right-radius: ${props.borderRadius}px;
      }
      
      &:last-child {
    border-bottom-left-radius: ${props.borderRadius}px;
    border-bottom-right-radius: ${props.borderRadius}px;
      }
    `}  

  &:hover {
    background-color: ${(props) => props.primaryColorLight};
  }
`;
const MenuItemIcon = yt.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
const DesktopMenuItem = yt("span").withConfig({
  shouldForwardProp: (prop) => !["primaryColor", "primaryColorLight", "borderRadius", "gap"].includes(
    prop
  )
})`
  color: #333;
  position: relative;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-color: #333;
  border-style: solid;
  border-width: 1px;
  background-color: #e3e3e3;
  overflow: hidden;
  border-bottom: none;

  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  ${(props) => props.gap && props.gap > 0 ? `margin-bottom: ${props.gap}px;
         border-bottom: 1px solid #333;` : `&:first-child {
          border-bottom: none;
        }
        
        &:last-child {
          border-bottom: 1px solid #333;
        }`}

  ${(props) => props.borderRadius && (!props.gap || props.gap < 1) && `border-radius: unset;
      &:first-child {
    border-top-left-radius: ${props.borderRadius}px;
    border-top-right-radius: ${props.borderRadius}px;
      }
      
      &:last-child {
    border-bottom-left-radius: ${props.borderRadius}px;
    border-bottom-right-radius: ${props.borderRadius}px;
      }
    `}  

  & > span {
    text-transform: uppercase;
    font-size: 0.5rem;
    position: absolute;
    right: 0;
    width: 100%;
    padding: 3px;
    background: #777;
    color: #fff;
    text-align: center;
    transform: rotate(-35deg);
    translate: 25%;
  }

  & ${MenuItemIcon} {
    filter: brightness(0);
  }
`;

const ConnectWalletList = ({
  supportedWallets = [
    "Flint",
    "Nami",
    "Eternl",
    "Yoroi",
    "NuFi",
    "Lace",
    "TyphonCip30"
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
  dAppName = "Awesome DApp",
  dAppUrl = "http://awesome-dapp-url.tld/",
  extensions,
  limitNetwork,
  onConnect,
  onConnectError = (walletName, error, level = "error") => alert(`${level}: ${error.message} (${walletName})`)
}) => {
  const {
    connect,
    dAppConnect,
    disconnect,
    initDappConnect,
    installedExtensions,
    connectedCip45Wallet,
    peerConnectAddress
  } = useCardano({
    limitNetwork
  });
  const [showModalDialog, setShowModalDialog] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (peerConnectEnabled && dAppConnect.current === null) {
      const verifyConnection = (walletInfo, callback) => {
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
      const onApiInject = (name, address) => {
        connectWallet(name);
      };
      const onApiEject = (name, address) => {
        disconnect();
      };
      const onP2PConnect = (address, walletInfo) => {
        setShowModalDialog(false);
      };
      initDappConnect(
        dAppName,
        dAppUrl,
        verifyConnection,
        onApiInject,
        onApiEject,
        onP2PConnect
      );
    }
  }, []);
  const isMobile = checkIsMobile();
  const availableWallets = estimateAvailableWallets(
    peerConnectEnabled && connectedCip45Wallet.current?.name ? [connectedCip45Wallet.current.name, ...supportedWallets] : supportedWallets,
    showUnavailableWallets,
    alwaysVisibleWallets,
    installedExtensions
  );
  const connectWallet = async (walletName) => {
    const onSuccess = () => {
      if (typeof onConnect === "function") {
        onConnect(walletName);
      }
    };
    const onError = (error) => {
      if (error instanceof WalletExtensionNotFoundError) {
        const config = getWalletConfig(walletName);
        if (config?.chromeExtensionId && config?.chromeExtensionName) {
          window.open(
            `${chromeStoreUrl}${config.chromeExtensionName}/${config.chromeExtensionId}`
          );
        } else {
          onConnectError(walletName, error, "warn");
        }
      } else {
        onConnectError(walletName, error);
      }
    };
    connect(walletName, onSuccess, onError, extensions);
  };
  const connectMobileWallet = async (walletName) => {
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
        if (getMobileOS() === "iOS") {
          window.location.href = config.appStoreUrl;
        } else if (getMobileOS() === "Android") {
          window.location.href = config.playStoreUrl;
        }
      }, 2500);
      document.addEventListener(
        "visibilitychange",
        () => {
          if (document.visibilityState === "hidden") {
            clearTimeout(appStoreTimeout);
          }
        },
        { once: true }
      );
      window.location.href = deepLink;
      return;
    }
    if (getMobileOS() === "iOS") {
      window.location.href = config?.appStoreUrl ?? "";
    } else if (getMobileOS() === "Android") {
      window.location.href = config?.playStoreUrl ?? "";
    } else {
      onConnectError(walletName, new Error("Please install the wallet from the app store."), "warn");
    }
  };
  const themeColorObject = primaryColor ? Color(primaryColor) : Color("#0538AF");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    peerConnectEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalDialog,
      {
        handleClose: () => setShowModalDialog(false),
        content: peerConnectAddress,
        icon: dAppConnect.current?.getIdenticon(),
        visible: showModalDialog,
        primaryColor: themeColorObject.hex(),
        subtitle: peerConnectSubtitle,
        customCSS: peerConnectCustomCSS
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu, { customCSS: customCSS || "", "data-testid": "connect-wallet-list", children: [
      peerConnectEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        MenuItem,
        {
          gap: gap || 0,
          borderRadius: borderRadius || 0,
          primaryColor: themeColorObject.hex(),
          primaryColorLight: themeColorObject.mix(Color("white"), 0.9).hex(),
          onClick: () => setShowModalDialog(true),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemIcon, { src: getWalletIcon("peer-connect") }),
            "P2P Wallet"
          ]
        },
        "peer-connect"
      ),
      availableWallets ? availableWallets.map((availableWallet) => {
        const displayName = getWalletConfig(availableWallet)?.displayName ?? availableWallet;
        if (isMobile && !mobileWallets.includes(availableWallet.toLowerCase())) {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DesktopMenuItem,
            {
              primaryColor: themeColorObject.hex(),
              primaryColorLight: themeColorObject.mix(Color("white"), 0.9).hex(),
              borderRadius: borderRadius || 0,
              gap: gap || 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemIcon, { src: getWalletIcon(availableWallet) }),
                capitalize(displayName),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Desktop Only" })
              ]
            },
            availableWallet
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          MenuItem,
          {
            primaryColor: themeColorObject.hex(),
            primaryColorLight: themeColorObject.mix(Color("white"), 0.9).hex(),
            borderRadius: borderRadius || 0,
            gap: gap || 0,
            onClick: () => connectMobileWallet(availableWallet),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MenuItemIcon,
                {
                  src: getWalletIcon(availableWallet)
                }
              ),
              capitalize(displayName)
            ]
          },
          availableWallet
        );
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: `Please install a wallet browser extension (${formatSupportedWallets(
        supportedWallets
      )} are supported)` })
    ] })
  ] });
};

export { ConnectWalletList as default };
//# sourceMappingURL=ConnectWalletList-B_be24F3.js.map
