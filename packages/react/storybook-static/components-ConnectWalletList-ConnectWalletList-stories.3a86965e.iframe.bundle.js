"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[711],{"./src/hooks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return hooks_useCardano}});var react=__webpack_require__("../node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),cardano_peer_connect_dist=__webpack_require__("../node_modules/@fabianbormann/cardano-peer-connect/dist/index.js");var hooks_useCardano=function useCardano(props){const dAppConnect=(0,react.useRef)(null),cip45Connected=(0,react.useRef)(!1),cip45Address=(0,react.useRef)(null),cip45Identicon=(0,react.useRef)(null),connectedCip45Wallet=(0,react.useRef)(null),[meerkatAddress,setMeerkatAddress]=(0,react.useState)(dist.Wallet.meerkatAddressObserver.get()),[isEnabled,setIsEnabled]=(0,react.useState)(dist.Wallet.enabledObserver.get()),[isConnecting,setIsConnecting]=(0,react.useState)(dist.Wallet.isConnectingObserver.get()),[enabledWallet,setEnabledWallet]=(0,react.useState)(dist.Wallet.enabledWalletObserver.get()),[stakeAddress,setStakeAddress]=(0,react.useState)(dist.Wallet.stakeAddressObserver.get()),[usedAddresses,setUsedAddresses]=(0,react.useState)(dist.Wallet.usedAddressesObserver.get()),[unusedAddresses,setUnusedAddresses]=(0,react.useState)(dist.Wallet.unusedAddressesObserver.get()),[accountBalance,setAccountBalance]=(0,react.useState)(dist.Wallet.accountBalanceObserver.get()),[installedExtensions,setInstalledExtensions]=(0,react.useState)(dist.Wallet.installedWalletExtensionsObserver.get()),[isConnected,setIsConnected]=(0,react.useState)(dist.Wallet.isConnected.get()),[lastConnectedWallet,setLastConnectedWallet]=(0,react.useState)(dist.Wallet.lastConnectedWallet.get()),limitNetwork=props?.limitNetwork||dist.NetworkType.MAINNET;(0,react.useEffect)((()=>(dist.Wallet.checkEnabled(limitNetwork).catch((error=>{console.error(error),disconnect()})),dist.Wallet.subscribeToObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress),()=>{dist.Wallet.unsubscribeFromObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress)})),[]);const initDappConnect=(0,react.useCallback)(((dAppName,dAppUrl,verifyConnection,onApiInject,onApiEject,additionalPeerConnectTrackerUrls,onConnect)=>{dAppConnect.current=new cardano_peer_connect_dist.DAppPeerConnect({dAppInfo:{name:dAppName,url:dAppUrl},announce:[...additionalPeerConnectTrackerUrls,"wss://tracker.openwebtorrent.com","wss://dev.tracker.cf-identity-wallet.metadata.dev.cf-deployments.org","wss://tracker.de-0.eternl.art","wss://tracker.us-0.eternl.art","wss://tracker.files.fm:7073/announce","ws://tracker.files.fm:7072/announce","wss://tracker.openwebtorrent.com:443/announce"],verifyConnection:verifyConnection,onApiInject:onApiInject,onApiEject:onApiEject,onConnect:(address,walletInfo)=>{cip45Connected.current=!0,cip45Address.current=address,cip45Identicon.current=dAppConnect.current?.getIdenticon()??null,walletInfo&&(connectedCip45Wallet.current=walletInfo),"function"==typeof onConnect&&onConnect(address,walletInfo)},onDisconnect:()=>{cip45Connected.current=!1,cip45Address.current=null,cip45Identicon.current=null},useWalletDiscovery:!0}),setMeerkatAddress(dAppConnect.current.getAddress())}),[]),disconnect=(0,react.useCallback)((()=>{dist.Wallet.disconnect()}),[]),connectToWallet=(0,react.useCallback)((async function(walletName){let retries=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,retryIntervalInMs=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;try{await dist.Wallet.connectToWallet(walletName,limitNetwork,retries,retryIntervalInMs)}catch(error){console.error(error)}}),[limitNetwork]),checkEnabled=(0,react.useCallback)((async()=>{try{await dist.Wallet.checkEnabled(limitNetwork)}catch(error){console.error(error),disconnect()}}),[lastConnectedWallet]),signMessage=(0,react.useCallback)((async(message,onSignMessage,onSignError)=>{dist.Wallet.signMessage(message,onSignMessage,onSignError)}),[isEnabled,enabledWallet,limitNetwork]),connect=(0,react.useCallback)((async(walletName,onConnect,onError)=>{if(isConnecting)return;const errorHandler=void 0===onError?error=>console.error(error):onError;dist.Wallet.connect(walletName,limitNetwork,onConnect,errorHandler)}),[connectToWallet,isConnecting]);return(0,react.useEffect)((()=>{isConnected&&checkEnabled()}),[isConnected]),(0,react.useEffect)((()=>(dist.Wallet.startInjectWalletListener(),()=>{dist.Wallet.stopInjectWalletListener()})),[]),{isEnabled:isEnabled,isConnected:isConnected,isConnecting:isConnecting,enabledWallet:enabledWallet,stakeAddress:stakeAddress,usedAddresses:usedAddresses,unusedAddresses:unusedAddresses,signMessage:signMessage,connect:connect,disconnect:disconnect,installedExtensions:installedExtensions,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress,cip45Connected:cip45Connected,cip45Address:cip45Address,cip45Identicon:cip45Identicon,connectedCip45Wallet:connectedCip45Wallet}}},"./src/components/ConnectWalletList/ConnectWalletList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomList:function(){return CustomList},DefaultList:function(){return DefaultList},default:function(){return ConnectWalletList_stories}});var react=__webpack_require__("../node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),color=__webpack_require__("../node_modules/color/index.js"),color_default=__webpack_require__.n(color),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
  font-family: sans-serif;
  min-width: 160px;
  max-width: 240px;
  width: fit-content;
  z-index: 1;
  ${props=>props.customCSS}
`,MenuItem=(0,styled_components_browser_esm.Ay)("span").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius","gap"].includes(prop)})`
  color: ${props=>props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  cursor: pointer;
  border-color: ${props=>props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;

  ${props=>props.gap&&props.gap>0?`margin-bottom: ${props.gap}px;\n         border-bottom: 1px solid ${props.primaryColor};`:`&:first-child {\n          border-bottom: none;\n        }\n        \n        &:last-child {\n          border: 1px solid ${props.primaryColor};\n        }`}

  ${props=>props.borderRadius&&`border-radius: ${props.borderRadius}px;`}

  ${props=>props.borderRadius&&(!props.gap||props.gap<1)&&`border-radius: unset;\n      &:first-child {\n    border-top-left-radius: ${props.borderRadius}px;\n    border-top-right-radius: ${props.borderRadius}px;\n      }\n      \n      &:last-child {\n    border-bottom-left-radius: ${props.borderRadius}px;\n    border-bottom-right-radius: ${props.borderRadius}px;\n      }\n    `}  

  &:hover {
    background-color: ${props=>props.primaryColorLight};
  }
`,MenuItemIcon=styled_components_browser_esm.Ay.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,DesktopMenuItem=(0,styled_components_browser_esm.Ay)("span").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius","gap"].includes(prop)})`
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

  ${props=>props.borderRadius&&`border-radius: ${props.borderRadius}px;`}

  ${props=>props.gap&&props.gap>0?`margin-bottom: ${props.gap}px;\n         border-bottom: 1px solid #333;`:"&:first-child {\n          border-bottom: none;\n        }\n        \n        &:last-child {\n          border-bottom: 1px solid #333;\n        }"}

  ${props=>props.borderRadius&&(!props.gap||props.gap<1)&&`border-radius: unset;\n      &:first-child {\n    border-top-left-radius: ${props.borderRadius}px;\n    border-top-right-radius: ${props.borderRadius}px;\n      }\n      \n      &:last-child {\n    border-bottom-left-radius: ${props.borderRadius}px;\n    border-bottom-right-radius: ${props.borderRadius}px;\n      }\n    `}  

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
`;var ConnectWalletList_ConnectWalletList=_ref=>{let{supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","NuFi","Lace"],primaryColor:primaryColor,borderRadius:borderRadius,gap:gap,showUnavailableWallets:showUnavailableWallets=dist.UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],customCSS:customCSS,limitNetwork:limitNetwork,onConnect:onConnect,onConnectError:onConnectError}=_ref;const{connect:connect,installedExtensions:installedExtensions}=(0,hooks.o)({limitNetwork:limitNetwork}),mobileWallets=["flint"],isMobile=(0,dist.checkIsMobile)(),availableWallets=(0,dist.estimateAvailableWallets)(supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{if("function"==typeof onConnectError)onConnectError(walletName,error);else if(error instanceof dist.WalletExtensionNotFoundError){const chromeStoreUrl="https://chrome.google.com/webstore/detail/";"nami"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nami/lpfcbjknijpeeillifnkikgncikgfhdo`):"flint"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj`):"typhon"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}typhon-wallet/kfdniefadaanbjodldohaedphafoffoh`):"yoroi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb`):"eternl"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}eternl/kmhcihpebfmpgmihbkipmjlmmioameka`):"gerowallet"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}gerowallet/bgpipimickeadkjlklgciifhnalhdjhe`):"nufi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nufi/gpnihlnnodeiiaakbikldcihojploeca`):"lace"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}lace/gafhhkghbfjjkeiendhlofajokpaflmk`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`)}else alert("Something went wrong. Please try again later.")}))},themeColorObject=primaryColor?color_default()(primaryColor):color_default()("#0538AF");return react.createElement(Menu,{customCSS:customCSS||"","data-testid":"connect-wallet-list"},availableWallets?availableWallets.map((availableWallet=>isMobile&&!mobileWallets.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet,onClick:()=>(async walletName=>{isMobile||connectWallet(walletName),mobileWallets.includes(walletName.toLowerCase())&&"flint"===walletName.toLowerCase()&&((0,dist.isWalletInstalled)("flint")?connectWallet(walletName):window.location.href=`https://flint-wallet.app.link/browse?dappUrl=${encodeURIComponent(window.location.href)}`)})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet)))):react.createElement("span",null,`Please install a wallet browser extension (${(0,dist.formatSupportedWallets)(supportedWallets)} are supported)`))},ConnectWalletList_stories={title:"Components/ConnectWalletList",component:ConnectWalletList_ConnectWalletList};const Template=args=>react.createElement(ConnectWalletList_ConnectWalletList,args),DefaultList=Template.bind({});DefaultList.args={};const CustomList=Template.bind({});CustomList.args={borderRadius:15,gap:8,primaryColor:"#96839f"},DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...DefaultList.parameters?.docs?.source}}},CustomList.parameters={...CustomList.parameters,docs:{...CustomList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...CustomList.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ConnectWalletList-ConnectWalletList-stories.3a86965e.iframe.bundle.js.map