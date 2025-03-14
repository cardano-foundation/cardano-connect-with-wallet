"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[919],{"./src/components/ConnectWalletButton/ConnectWalletButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BalanceButton:function(){return BalanceButton},ButtonWithIcon:function(){return ButtonWithIcon},ComponentTitleButton:function(){return ComponentTitleButton},CustomButton:function(){return CustomButton},DefaultButton:function(){return DefaultButton},NoActionMenuButton:function(){return NoActionMenuButton},P2PButton:function(){return P2PButton},TestnetButton:function(){return TestnetButton},default:function(){return ConnectWalletButton_stories}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=styled_components_browser_esm.Ay.div`
  display: none;
  position: absolute;
  margin-top: 8px;
  font-family: sans-serif;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`,MenuItem=(0,styled_components_browser_esm.Ay)("span").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius"].includes(prop)})`
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

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
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

  &:hover ${Menu} {
    display: block;
  }

  &:hover ${Button} {
    background-color: ${props=>props.primaryColor};
    color: white;
  }
`,DesktopMenuItem=(0,styled_components_browser_esm.Ay)("span").withConfig({shouldForwardProp:prop=>!["borderRadius"].includes(prop)})`
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
`;var hooks=__webpack_require__("./src/hooks/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),core=__webpack_require__("../core/index.ts"),ModalDialog=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx");var ConnectWalletButton_ConnectWalletButton=_ref=>{let{label:label,disabled:disabled,message:message,supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","Typhon","NuFi","Lace"],showUnavailableWallets:showUnavailableWallets=core.gH.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],primaryColor:primaryColor,borderRadius:borderRadius=15,customCSS:customCSS,customActions:customActions=[],hideActionMenu:hideActionMenu=!1,afterComponent:afterComponent,beforeComponent:beforeComponent,limitNetwork:limitNetwork,peerConnectEnabled:peerConnectEnabled=!1,peerConnectSubtitle:peerConnectSubtitle,peerConnectCustomCSS:peerConnectCustomCSS,onConnect:onConnect,onDisconnect:onDisconnect,onSignMessage:onSignMessage,showAccountBalance:showAccountBalance=!1,onStakeAddressClick:onStakeAddressClick,onConnectError:onConnectError,additionalPeerConnectTrackerUrls:additionalPeerConnectTrackerUrls=[],dAppName:dAppName="Awesome DApp",dAppUrl:dAppUrl="http://awesome-dapp-url.tld/"}=_ref;const{isEnabled:isEnabled,stakeAddress:stakeAddress,signMessage:signMessage,connect:connect,disconnect:disconnect,isConnected:isConnected,installedExtensions:installedExtensions,enabledWallet:enabledWallet,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress,connectedCip45Wallet:connectedCip45Wallet}=(0,hooks.o)({limitNetwork:limitNetwork}),[showModalDialog,setShowModalDialog]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(peerConnectEnabled&&null===dAppConnect.current){initDappConnect(dAppName,dAppUrl,((walletInfo,callback)=>{if(walletInfo.requestAutoconnect){const accessAndAutoConnect=window.confirm(`Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`);callback(accessAndAutoConnect,accessAndAutoConnect)}else callback(window.confirm(`Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`),!0)}),((name,address)=>{connectWallet(name)}),((name,address)=>{disconnect()}),additionalPeerConnectTrackerUrls,((address,walletInfo)=>{setShowModalDialog(!1)}))}}),[]);const isMobile=(0,core.fZ)(),availableWallets=(0,core.A$)(peerConnectEnabled&&connectedCip45Wallet.current?.name?[connectedCip45Wallet.current.name,...supportedWallets]:supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{"function"==typeof onConnectError?onConnectError(walletName,error):error instanceof core.k7?"nami"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.NAMI.name}/${core.Y3.NAMI.id}`):"flint"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.FLINT.name}/${core.Y3.FLINT.id}`):"typhon"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.TYPHON.name}/${core.Y3.TYPHON.id}`):"yoroi"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.YOROI.name}/${core.Y3.YOROI.id}`):"eternl"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.ETERNL.name}/${core.Y3.ETERNL.id}`):"gerowallet"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.GEROWALLET.name}/${core.Y3.GEROWALLET.id}`):"nufi"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.NUFI.name}/${core.Y3.NUFI.id}`):"lace"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.LACE.name}/${core.Y3.LACE.id}`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`):(alert("Something went wrong. Please try again later."),console.warn(error))}))},themeColorObject=primaryColor?(0,color.A)(primaryColor):(0,color.A)("#0538AF"),buttonTitle=stakeAddress&&isConnected?(()=>{if(showAccountBalance){return`₳ ${Math.round(100*accountBalance)/100}`}return`${stakeAddress.slice(0,12)}...`})():label||"Connect Wallet",walletMenu=react.createElement(Menu,{id:"connect-wallet-menu"},peerConnectEnabled&&react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),onClick:()=>setShowModalDialog(!0)},react.createElement(MenuItemIcon,{src:(0,core.Hs)("peer-connect")}),"P2P Wallet"),availableWallets?availableWallets.map((availableWallet=>isMobile&&!core.rK.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{borderRadius:borderRadius,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(availableWallet),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),key:availableWallet,onClick:()=>(async walletName=>{isMobile||connectWallet(walletName),core.rK.includes(walletName.toLowerCase())&&"flint"===walletName.toLowerCase()&&((0,core.ql)("flint")?connectWallet(walletName):window.location.href=`${core.qB}${encodeURIComponent(window.location.href)}`)})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(availableWallet)))):react.createElement("span",{id:"connect-wallet-hint"},`Please install a wallet browser extension (${(0,core.mJ)(supportedWallets)} are supported)`)),actionMenu=hideActionMenu?null:react.createElement(Menu,{id:"connect-wallet-menu"},"string"==typeof message&&react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),onClick:()=>signMessage(message,onSignMessage)},"Sign a message"),customActions.map(((customAction,index)=>react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,key:`custom-action-${index}`,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),onClick:customAction.onClick},customAction.label))),react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),onClick:()=>{disconnect(),"function"==typeof onDisconnect&&onDisconnect()}},"Disconnect"));if(void 0===beforeComponent&&enabledWallet){const walletIcon=(0,core.Hs)(enabledWallet);beforeComponent=react.createElement("img",{height:24,width:24,style:{marginRight:"8px"},src:walletIcon,alt:`${enabledWallet}-icon`})}return react.createElement(Dropdown,{id:"connect-wallet-dropdown",customCSS:customCSS||"",borderRadius:0,primaryColor:themeColorObject.hex()},peerConnectEnabled&&react.createElement(ModalDialog.A,{handleClose:()=>setShowModalDialog(!1),content:meerkatAddress,icon:dAppConnect.current?.getIdenticon(),visible:showModalDialog,primaryColor:themeColorObject.hex(),subtitle:peerConnectSubtitle,customCSS:peerConnectCustomCSS}),react.createElement(Button,{customCSS:"",id:"connect-wallet-button",onClick:()=>{stakeAddress&&isConnected&&"function"==typeof onStakeAddressClick&&onStakeAddressClick(stakeAddress)},borderRadius:borderRadius,primaryColor:themeColorObject.hex()},beforeComponent,buttonTitle,afterComponent),!disabled&&(isEnabled&&isConnected?actionMenu:walletMenu))},ConnectWalletButton_stories={title:"Components/ConnectWalletButton",component:ConnectWalletButton_ConnectWalletButton};const Template=args=>react.createElement(ConnectWalletButton_ConnectWalletButton,args),DefaultButton=Template.bind({});DefaultButton.args={label:"Connect Wallet"};const CustomButton=Template.bind({});CustomButton.args={label:"Connect",message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},supportedWallets:["Nami","Flint","Lace"],onStakeAddressClick:stakeAddress=>console.log(stakeAddress)};const NoActionMenuButton=Template.bind({});NoActionMenuButton.args={label:"Connect with wallet",hideActionMenu:!0,onStakeAddressClick:stakeAddress=>alert(stakeAddress)};const ButtonWithIcon=Template.bind({});ButtonWithIcon.args={beforeComponent:react.createElement("div",{style:{backgroundColor:"black",marginRight:6,width:16,height:16}}),afterComponent:react.createElement("div",{style:{backgroundColor:"red",marginLeft:6,width:16,height:16}})};const ComponentTitleButton=Template.bind({});ComponentTitleButton.args={label:react.createElement("div",{style:{backgroundColor:"red",padding:16,borderRadius:"100%"}}),onConnect:()=>alert("connected")};const TestnetButton=Template.bind({});TestnetButton.args={limitNetwork:core.z1.TESTNET,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const BalanceButton=Template.bind({});BalanceButton.args={showAccountBalance:!0,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const P2PButton=Template.bind({});P2PButton.args={peerConnectEnabled:!0,message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},onConnectError:(walletName,error)=>{alert(error.message)}},DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...DefaultButton.parameters?.docs?.source}}},CustomButton.parameters={...CustomButton.parameters,docs:{...CustomButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...CustomButton.parameters?.docs?.source}}},NoActionMenuButton.parameters={...NoActionMenuButton.parameters,docs:{...NoActionMenuButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...NoActionMenuButton.parameters?.docs?.source}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ButtonWithIcon.parameters?.docs?.source}}},ComponentTitleButton.parameters={...ComponentTitleButton.parameters,docs:{...ComponentTitleButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ComponentTitleButton.parameters?.docs?.source}}},TestnetButton.parameters={...TestnetButton.parameters,docs:{...TestnetButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...TestnetButton.parameters?.docs?.source}}},BalanceButton.parameters={...BalanceButton.parameters,docs:{...BalanceButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...BalanceButton.parameters?.docs?.source}}},P2PButton.parameters={...P2PButton.parameters,docs:{...P2PButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...P2PButton.parameters?.docs?.source}}}},"./src/components/ModalDialog/ModalDialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ModalDialog_ModalDialog}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Modal=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  ${props=>props.customCSS}
`,ModalContent=styled_components_browser_esm.Ay.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #aeaeae;
  border-radius: 9px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;var dist=__webpack_require__("../node_modules/react-qrcode-logo/dist/index.js");var ModalDialog_ModalDialog=props=>{const{visible:visible,content:content,handleClose:handleClose,qrStyle:qrStyle,eyeRadius:eyeRadius,icon:icon,subtitle:subtitle,primaryColor:primaryColor,customCSS:customCSS}=props,toastRef=(0,react.useRef)(null);return react.createElement(Modal,{onClick:()=>{"function"==typeof handleClose&&handleClose()},customCSS:customCSS||"",style:{display:visible?"block":"none"}},react.createElement(ModalContent,{"data-testid":"modal-content"},react.createElement(dist.QRCode,{removeQrCodeBehindLogo:!0,logoImage:icon||void 0,ecLevel:"H",eyeRadius:eyeRadius||0,qrStyle:qrStyle||"squares",value:content}),react.createElement(CopyInputContainer,{primaryColor:primaryColor||"#0538AF"},react.createElement("input",{type:"text",value:content,style:{textOverflow:"ellipsis"},readOnly:!0}),react.createElement("button",{onClick:event=>{event.stopPropagation(),navigator.clipboard.writeText(content),toastRef.current?.classList.add("show"),setTimeout((function(){toastRef.current?.classList.remove("show")}),3e3)}},"Copy")),react.createElement("p",{style:{maxWidth:300}},subtitle||"You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet."),react.createElement(Toast,{ref:toastRef},"P2P identifier copied to clipboard!")))}}}]);
//# sourceMappingURL=components-ConnectWalletButton-ConnectWalletButton-stories.cc2be76f.iframe.bundle.js.map