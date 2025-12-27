"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[919],{"./src/common.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getMobileOS(){if("userAgentData"in navigator){const platform=navigator.userAgentData?.platform;if("Android"===platform)return"Android"}const ua=navigator.userAgent;return/iPad|iPhone|iPod/.test(ua)?"iOS":/android/i.test(ua)?"Android":"unknown"}__webpack_require__.d(__webpack_exports__,{n:function(){return getMobileOS}})},"./src/components/ConnectWalletButton/ConnectWalletButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BalanceButton:function(){return BalanceButton},ButtonWithIcon:function(){return ButtonWithIcon},ComponentTitleButton:function(){return ComponentTitleButton},CustomButton:function(){return CustomButton},DefaultButton:function(){return DefaultButton},NoActionMenuButton:function(){return NoActionMenuButton},P2PButton:function(){return P2PButton},TestnetButton:function(){return TestnetButton},default:function(){return ConnectWalletButton_stories}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=styled_components_browser_esm.Ay.div`
  min-width: 180px;
  max-width: 240px;
  font-family: sans-serif;
  width: var(--radix-dropdown-menu-trigger-width);
  overflow: hidden;
  z-index: 10;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
  margin-top: 8px;
`,MenuItem=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius"].includes(prop)})`
  color: ${props=>props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-color: ${props=>props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover, &:focus, &[data-highlighted] {
    background-color: ${props=>props.primaryColorLight};
  }

  &:first-child {
    border-top-left-radius: ${props=>`${props.borderRadius}px;`}
    border-top-right-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom-right-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom: 1px solid ${props=>props.primaryColor};
  }
`,MenuItemIcon=styled_components_browser_esm.Ay.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,Button=(0,styled_components_browser_esm.Ay)("button").withConfig({shouldForwardProp:prop=>!["primaryColor","customCSS","borderRadius"].includes(prop)})`
  padding: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid ${props=>props.primaryColor};
  color: ${props=>props.primaryColor};
  background-color: white;

  ${props=>props.borderRadius&&`border-radius: ${props.borderRadius}px;`}

  &:disabled {
    border: 1px solid #333;
    color: #333;
    backgroundcolor: #eee;
  }
`,Dropdown=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["primaryColor","customCSS","borderRadius"].includes(prop)})`
  min-width: 180px;
  max-width: 240px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  padding-top: 8px;

  ${props=>props.customCSS}
`,DesktopMenuItem=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["borderRadius"].includes(prop)})`
  color: #333;
  position: relative;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-color: #333;
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: #e3e3e3;
  overflow: hidden;
  outline: none;

  &:first-child {
    border-top-left-radius: ${props=>`${props.borderRadius}px;`}
    border-top-right-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom-right-radius: ${props=>`${props.borderRadius}px;`}
    border-bottom: 1px solid #333;
  }

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
`;var hooks=__webpack_require__("./src/hooks/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),ModalDialog=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx"),common=__webpack_require__("./src/common.ts"),react_dropdown_menu_dist=__webpack_require__("../node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs");var ConnectWalletButton_ConnectWalletButton=_ref=>{let{label:label,disabled:disabled,message:message,supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","Typhon","NuFi","Lace"],showUnavailableWallets:showUnavailableWallets=dist.UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],primaryColor:primaryColor,borderRadius:borderRadius=15,customCSS:customCSS,customActions:customActions=[],hideActionMenu:hideActionMenu=!1,afterComponent:afterComponent,beforeComponent:beforeComponent,limitNetwork:limitNetwork,peerConnectEnabled:peerConnectEnabled=!0,peerConnectSubtitle:peerConnectSubtitle,peerConnectCustomCSS:peerConnectCustomCSS,additionalPeerConnectTrackerUrls:additionalPeerConnectTrackerUrls=[],dAppName:dAppName="Awesome DApp",dAppUrl:dAppUrl="http://awesome-dapp-url.tld/",onConnect:onConnect,onDisconnect:onDisconnect,onSignMessage:onSignMessage,showAccountBalance:showAccountBalance=!1,onStakeAddressClick:onStakeAddressClick,onConnectError:onConnectError}=_ref;const{isEnabled:isEnabled,stakeAddress:stakeAddress,signMessage:signMessage,connect:connect,disconnect:disconnect,isConnected:isConnected,installedExtensions:installedExtensions,enabledWallet:enabledWallet,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress,connectedCip45Wallet:connectedCip45Wallet}=(0,hooks.o)({limitNetwork:limitNetwork}),[showModalDialog,setShowModalDialog]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(peerConnectEnabled&&null===dAppConnect.current){initDappConnect(dAppName,dAppUrl,((walletInfo,callback)=>{if(walletInfo.requestAutoconnect){const accessAndAutoConnect=window.confirm(`Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`);callback(accessAndAutoConnect,accessAndAutoConnect)}else callback(window.confirm(`Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`),!0)}),((name,address)=>{connectWallet(name)}),((name,address)=>{disconnect()}),additionalPeerConnectTrackerUrls,((address,walletInfo)=>{setShowModalDialog(!1)}))}}),[]);const isMobile=(0,dist.checkIsMobile)(),availableWallets=(0,dist.estimateAvailableWallets)(peerConnectEnabled&&connectedCip45Wallet.current?.name?[connectedCip45Wallet.current.name,...supportedWallets]:supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{"function"==typeof onConnectError?onConnectError(walletName,error):error instanceof dist.WalletExtensionNotFoundError?"nami"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.NAMI.name}/${dist.chromeWalletExtensions.NAMI.id}`):"flint"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.FLINT.name}/${dist.chromeWalletExtensions.FLINT.id}`):"typhon"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.TYPHON.name}/${dist.chromeWalletExtensions.TYPHON.id}`):"yoroi"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.YOROI.name}/${dist.chromeWalletExtensions.YOROI.id}`):"eternl"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.ETERNL.name}/${dist.chromeWalletExtensions.ETERNL.id}`):"gerowallet"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.GEROWALLET.name}/${dist.chromeWalletExtensions.GEROWALLET.id}`):"nufi"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.NUFI.name}/${dist.chromeWalletExtensions.NUFI.id}`):"lace"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.LACE.name}/${dist.chromeWalletExtensions.LACE.id}`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`):(alert("Something went wrong. Please try again later."),console.warn(error))}))},themeColorObject=primaryColor?(0,color.A)(primaryColor):(0,color.A)("#0538AF"),buttonTitle=stakeAddress&&isConnected?(()=>{if(showAccountBalance){return`₳ ${Math.round(100*accountBalance)/100}`}return`${stakeAddress.slice(0,12)}...`})():label||"Connect Wallet";if(void 0===beforeComponent&&enabledWallet){const walletIcon=(0,dist.getWalletIcon)(enabledWallet);beforeComponent=react.createElement("img",{height:24,width:24,style:{marginRight:"8px"},src:walletIcon,alt:`${enabledWallet}-icon`})}return react.createElement(Dropdown,{id:"connect-wallet-dropdown",customCSS:customCSS||"",borderRadius:0,primaryColor:themeColorObject.hex()},peerConnectEnabled&&react.createElement(ModalDialog.A,{handleClose:()=>setShowModalDialog(!1),content:meerkatAddress,icon:dAppConnect.current?.getIdenticon(),visible:showModalDialog,primaryColor:themeColorObject.hex(),subtitle:peerConnectSubtitle,customCSS:peerConnectCustomCSS}),react.createElement(react_dropdown_menu_dist.bL,null,react.createElement(react_dropdown_menu_dist.l9,{asChild:!0},react.createElement(Button,{customCSS:"",id:"connect-wallet-button",onClick:()=>{stakeAddress&&isConnected&&"function"==typeof onStakeAddressClick&&onStakeAddressClick(stakeAddress)},borderRadius:borderRadius,primaryColor:themeColorObject.hex(),disabled:disabled},beforeComponent,buttonTitle,afterComponent)),react.createElement(react_dropdown_menu_dist.ZL,null,!disabled&&(isEnabled&&isConnected?hideActionMenu?null:react.createElement(react_dropdown_menu_dist.UC,{asChild:!0},react.createElement(Menu,{id:"connect-wallet-menu"},"string"==typeof message&&react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,onSelect:()=>signMessage(message,onSignMessage)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},"Sign a message")),customActions.map(((customAction,index)=>react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,key:`custom-action-${index}`,onSelect:customAction.onClick},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},customAction.label)))),react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,onSelect:()=>{disconnect(),"function"==typeof onDisconnect&&onDisconnect()}},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},"Disconnect")))):react.createElement(react_dropdown_menu_dist.UC,{asChild:!0},react.createElement(Menu,{id:"connect-wallet-menu"},peerConnectEnabled&&react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,onSelect:()=>setShowModalDialog(!0)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)("peer-connect")}),"P2P Wallet")),availableWallets?availableWallets.map((availableWallet=>isMobile&&!dist.mobileWallets.includes(availableWallet.toLowerCase())?react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,key:availableWallet,disabled:!0},react.createElement(DesktopMenuItem,{borderRadius:borderRadius,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet),react.createElement("span",null,"Desktop Only"))):react.createElement(react_dropdown_menu_dist.q7,{asChild:!0,key:availableWallet,onSelect:()=>(async walletName=>{if(isMobile||connectWallet(walletName),dist.mobileWallets.includes(walletName.toLowerCase())&&("flint"===walletName.toLowerCase()&&((0,dist.isWalletInstalled)("flint")?connectWallet(walletName):window.location.href=`${dist.flintDeepLink}${encodeURIComponent(window.location.href)}`),["eternl","vespr","begin"].includes(walletName.toLowerCase())))if((0,dist.isWalletInstalled)(walletName))connectWallet(walletName);else{const nativeWallet=walletName.toLowerCase();"iOS"===(0,common.n)()?window.location.href=dist.nativeWallets[nativeWallet].appStoreUrl:"Android"===(0,common.n)()?window.location.href=dist.nativeWallets[nativeWallet].playStoreUrl:alert("Please install the wallet from the app store.")}})(availableWallet)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet))))):react.createElement("span",{id:"connect-wallet-hint"},`Please install a wallet browser extension (${(0,dist.formatSupportedWallets)(supportedWallets)} are supported)`)))))))},ConnectWalletButton_stories={title:"Components/ConnectWalletButton",component:ConnectWalletButton_ConnectWalletButton};const Template=args=>react.createElement(ConnectWalletButton_ConnectWalletButton,args),DefaultButton=Template.bind({});DefaultButton.args={label:"Connect Wallet"};const CustomButton=Template.bind({});CustomButton.args={label:"Connect",message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},supportedWallets:["Nami","Flint","Lace"],onStakeAddressClick:stakeAddress=>console.log(stakeAddress)};const NoActionMenuButton=Template.bind({});NoActionMenuButton.args={label:"Connect with wallet",hideActionMenu:!0,onStakeAddressClick:stakeAddress=>alert(stakeAddress)};const ButtonWithIcon=Template.bind({});ButtonWithIcon.args={beforeComponent:react.createElement("div",{style:{backgroundColor:"black",marginRight:6,width:16,height:16}}),afterComponent:react.createElement("div",{style:{backgroundColor:"red",marginLeft:6,width:16,height:16}})};const ComponentTitleButton=Template.bind({});ComponentTitleButton.args={label:react.createElement("div",{style:{backgroundColor:"red",padding:16,borderRadius:"100%"}}),onConnect:()=>alert("connected")};const TestnetButton=Template.bind({});TestnetButton.args={limitNetwork:dist.NetworkType.TESTNET,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const BalanceButton=Template.bind({});BalanceButton.args={showAccountBalance:!0,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const P2PButton=Template.bind({});P2PButton.args={peerConnectEnabled:!0,message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},onConnectError:(walletName,error)=>{alert(error.message)}},DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...DefaultButton.parameters?.docs?.source}}},CustomButton.parameters={...CustomButton.parameters,docs:{...CustomButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...CustomButton.parameters?.docs?.source}}},NoActionMenuButton.parameters={...NoActionMenuButton.parameters,docs:{...NoActionMenuButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...NoActionMenuButton.parameters?.docs?.source}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ButtonWithIcon.parameters?.docs?.source}}},ComponentTitleButton.parameters={...ComponentTitleButton.parameters,docs:{...ComponentTitleButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ComponentTitleButton.parameters?.docs?.source}}},TestnetButton.parameters={...TestnetButton.parameters,docs:{...TestnetButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...TestnetButton.parameters?.docs?.source}}},BalanceButton.parameters={...BalanceButton.parameters,docs:{...BalanceButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...BalanceButton.parameters?.docs?.source}}},P2PButton.parameters={...P2PButton.parameters,docs:{...P2PButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...P2PButton.parameters?.docs?.source}}}},"./src/components/ModalDialog/ModalDialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ModalDialog_ModalDialog}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Modal=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  ${props=>props.customCSS}
`,ModalContent=styled_components_browser_esm.Ay.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #aeaeae;
  border-radius: 9px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);

  &:focus {
    outline: none;
  }
`,CopyInputContainer=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["primaryColor"].includes(prop)})`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px;
  width: 95%;
  max-width: 300px;

  & > input {
    flex: 1;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  & > button {
    background-color: ${props=>props.primaryColor};
    border-radius: 3px;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
  }
`,fadeInOut=styled_components_browser_esm.i7`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`,Toast=styled_components_browser_esm.Ay.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &.show {
    visibility: visible;
    animation: ${fadeInOut} 3s ease;
  }
`;var dist=__webpack_require__("../node_modules/react-qrcode-logo/dist/index.js"),react_dialog_dist=__webpack_require__("../node_modules/@radix-ui/react-dialog/dist/index.mjs"),react_visually_hidden_dist=__webpack_require__("../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");var ModalDialog_ModalDialog=props=>{const{visible:visible,content:content,handleClose:handleClose,qrStyle:qrStyle,eyeRadius:eyeRadius,icon:icon,subtitle:subtitle,primaryColor:primaryColor,customCSS:customCSS}=props,toastRef=(0,react.useRef)(null);return react.createElement(react_dialog_dist.bL,{open:visible,onOpenChange:open=>!open&&handleClose()},react.createElement(react_dialog_dist.ZL,null,react.createElement(react_dialog_dist.hJ,{asChild:!0},react.createElement(Modal,{customCSS:customCSS||""})),react.createElement(react_dialog_dist.UC,{asChild:!0},react.createElement(ModalContent,{"data-testid":"modal-content"},react.createElement(react_visually_hidden_dist.s6,null,react.createElement(react_dialog_dist.hE,null,"P2P Wallet Connection")),react.createElement(dist.QRCode,{removeQrCodeBehindLogo:!0,logoImage:icon||void 0,ecLevel:"H",eyeRadius:eyeRadius||0,qrStyle:qrStyle||"squares",value:content}),react.createElement(CopyInputContainer,{primaryColor:primaryColor||"#0538AF"},react.createElement("input",{type:"text",value:content,style:{textOverflow:"ellipsis"},readOnly:!0}),react.createElement("button",{onClick:event=>{event.stopPropagation(),navigator.clipboard.writeText(content),toastRef.current?.classList.add("show"),setTimeout((function(){toastRef.current?.classList.remove("show")}),3e3)}},"Copy")),react.createElement(react_dialog_dist.VY,{asChild:!0},react.createElement("p",{style:{maxWidth:300}},subtitle||"You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet.")),react.createElement(Toast,{ref:toastRef},"P2P identifier copied to clipboard!")))))}},"./src/hooks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return hooks_useCardano}});var react=__webpack_require__("../node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),cardano_peer_connect_dist=__webpack_require__("../node_modules/@fabianbormann/cardano-peer-connect/dist/index.js");var hooks_useCardano=function useCardano(props){const dAppConnect=(0,react.useRef)(null),cip45Connected=(0,react.useRef)(!1),cip45Address=(0,react.useRef)(null),cip45Identicon=(0,react.useRef)(null),connectedCip45Wallet=(0,react.useRef)(null),[meerkatAddress,setMeerkatAddress]=(0,react.useState)(dist.Wallet.meerkatAddressObserver.get()),[isEnabled,setIsEnabled]=(0,react.useState)(dist.Wallet.enabledObserver.get()),[isConnecting,setIsConnecting]=(0,react.useState)(dist.Wallet.isConnectingObserver.get()),[enabledWallet,setEnabledWallet]=(0,react.useState)(dist.Wallet.enabledWalletObserver.get()),[stakeAddress,setStakeAddress]=(0,react.useState)(dist.Wallet.stakeAddressObserver.get()),[usedAddresses,setUsedAddresses]=(0,react.useState)(dist.Wallet.usedAddressesObserver.get()),[unusedAddresses,setUnusedAddresses]=(0,react.useState)(dist.Wallet.unusedAddressesObserver.get()),[accountBalance,setAccountBalance]=(0,react.useState)(dist.Wallet.accountBalanceObserver.get()),[installedExtensions,setInstalledExtensions]=(0,react.useState)(dist.Wallet.installedWalletExtensionsObserver.get()),[isConnected,setIsConnected]=(0,react.useState)(dist.Wallet.isConnected.get()),[lastConnectedWallet,setLastConnectedWallet]=(0,react.useState)(dist.Wallet.lastConnectedWallet.get()),limitNetwork=props?.limitNetwork||dist.NetworkType.MAINNET;(0,react.useEffect)((()=>(dist.Wallet.checkEnabled(limitNetwork).catch((error=>{console.error(error),disconnect()})),dist.Wallet.subscribeToObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress),()=>{dist.Wallet.unsubscribeFromObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress)})),[]);const initDappConnect=(0,react.useCallback)(((dAppName,dAppUrl,verifyConnection,onApiInject,onApiEject,additionalPeerConnectTrackerUrls,onConnect)=>{dAppConnect.current=new cardano_peer_connect_dist.DAppPeerConnect({dAppInfo:{name:dAppName,url:dAppUrl},announce:[...additionalPeerConnectTrackerUrls,"wss://tracker.openwebtorrent.com","wss://dev.btt.cf-identity-wallet.metadata.dev.cf-deployments.org","wss://tracker.de-0.eternl.art","wss://tracker.us-0.eternl.art","wss://tracker.files.fm:7073/announce","ws://tracker.files.fm:7072/announce","wss://tracker.openwebtorrent.com:443/announce"],verifyConnection:verifyConnection,onApiInject:onApiInject,onApiEject:onApiEject,onConnect:(address,walletInfo)=>{cip45Connected.current=!0,cip45Address.current=address,cip45Identicon.current=dAppConnect.current?.getIdenticon()??null,walletInfo&&(connectedCip45Wallet.current=walletInfo),"function"==typeof onConnect&&onConnect(address,walletInfo)},onDisconnect:()=>{cip45Connected.current=!1,cip45Address.current=null,cip45Identicon.current=null},useWalletDiscovery:!0}),setMeerkatAddress(dAppConnect.current.getAddress())}),[]),disconnect=(0,react.useCallback)((()=>{dist.Wallet.disconnect()}),[]),connectToWallet=(0,react.useCallback)((async function(walletName){let retries=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,retryIntervalInMs=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;try{await dist.Wallet.connectToWallet(walletName,limitNetwork,retries,retryIntervalInMs)}catch(error){console.error(error)}}),[limitNetwork]),checkEnabled=(0,react.useCallback)((async()=>{try{await dist.Wallet.checkEnabled(limitNetwork)}catch(error){console.error(error),disconnect()}}),[lastConnectedWallet]),signMessage=(0,react.useCallback)((async(message,onSignMessage,onSignError)=>{dist.Wallet.signMessage(message,onSignMessage,onSignError)}),[isEnabled,enabledWallet,limitNetwork]),connect=(0,react.useCallback)((async(walletName,onConnect,onError)=>{if(isConnecting)return;const errorHandler=void 0===onError?error=>console.error(error):onError;dist.Wallet.connect(walletName,limitNetwork,onConnect,errorHandler)}),[connectToWallet,isConnecting]);return(0,react.useEffect)((()=>{isConnected&&checkEnabled()}),[isConnected]),(0,react.useEffect)((()=>(dist.Wallet.startInjectWalletListener(),()=>{dist.Wallet.stopInjectWalletListener()})),[]),{isEnabled:isEnabled,isConnected:isConnected,isConnecting:isConnecting,enabledWallet:enabledWallet,stakeAddress:stakeAddress,usedAddresses:usedAddresses,unusedAddresses:unusedAddresses,signMessage:signMessage,connect:connect,disconnect:disconnect,installedExtensions:installedExtensions,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress,cip45Connected:cip45Connected,cip45Address:cip45Address,cip45Identicon:cip45Identicon,connectedCip45Wallet:connectedCip45Wallet}}}}]);
//# sourceMappingURL=components-ConnectWalletButton-ConnectWalletButton-stories.ac54390e.iframe.bundle.js.map