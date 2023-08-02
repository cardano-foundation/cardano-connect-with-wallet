"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[96],{"./src/components/ConnectWalletButton/ConnectWalletButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BalanceButton:function(){return BalanceButton},ButtonWithIcon:function(){return ButtonWithIcon},ComponentTitleButton:function(){return ComponentTitleButton},CustomButton:function(){return CustomButton},DefaultButton:function(){return DefaultButton},NoActionMenuButton:function(){return NoActionMenuButton},P2PButton:function(){return P2PButton},TestnetButton:function(){return TestnetButton},default:function(){return ConnectWalletButton_stories}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=styled_components_browser_esm.ZP.div`
  display: none;
  position: absolute;
  margin-top: 8px;
  font-family: sans-serif;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`,MenuItem=(0,styled_components_browser_esm.ZP)("span").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius"].includes(prop)})`
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
`,MenuItemIcon=styled_components_browser_esm.ZP.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,Button=(0,styled_components_browser_esm.ZP)("button").withConfig({shouldForwardProp:prop=>!["primaryColor","customCSS","borderRadius"].includes(prop)})`
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
`,Dropdown=(0,styled_components_browser_esm.ZP)("div").withConfig({shouldForwardProp:prop=>!["primaryColor","customCSS","borderRadius"].includes(prop)})`
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
`,DesktopMenuItem=styled_components_browser_esm.ZP.span`
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
`;try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}try{MenuItemIcon.displayName="MenuItemIcon",MenuItemIcon.__docgenInfo={description:"",displayName:"MenuItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#MenuItemIcon"]={docgenInfo:MenuItemIcon.__docgenInfo,name:"MenuItemIcon",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#MenuItemIcon"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}try{DesktopMenuItem.displayName="DesktopMenuItem",DesktopMenuItem.__docgenInfo={description:"",displayName:"DesktopMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/StyledButtonElements.tsx#DesktopMenuItem"]={docgenInfo:DesktopMenuItem.__docgenInfo,name:"DesktopMenuItem",path:"src/components/ConnectWalletButton/StyledButtonElements.tsx#DesktopMenuItem"})}catch(__react_docgen_typescript_loader_error){}var hooks=__webpack_require__("./src/hooks/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),color_default=__webpack_require__.n(color),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),ModalDialog=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx");const ConnectWalletButton=_ref=>{let{label:label,disabled:disabled,message:message,supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","Typhon","NuFi","Lace"],showUnavailableWallets:showUnavailableWallets=dist.UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],primaryColor:primaryColor,borderRadius:borderRadius=15,customCSS:customCSS,customActions:customActions=[],hideActionMenu:hideActionMenu=!1,afterComponent:afterComponent,beforeComponent:beforeComponent,limitNetwork:limitNetwork,peerConnectEnabled:peerConnectEnabled=!1,peerConnectSubtitle:peerConnectSubtitle,peerConnectCustomCSS:peerConnectCustomCSS,onConnect:onConnect,onDisconnect:onDisconnect,onSignMessage:onSignMessage,showAccountBalance:showAccountBalance=!1,onStakeAddressClick:onStakeAddressClick,onConnectError:onConnectError,dAppName:dAppName="Awesome DApp",dAppUrl:dAppUrl="http://awesome-dapp-url.tld/"}=_ref;const{isEnabled:isEnabled,stakeAddress:stakeAddress,signMessage:signMessage,connect:connect,disconnect:disconnect,isConnected:isConnected,installedExtensions:installedExtensions,enabledWallet:enabledWallet,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress}=(0,hooks.U)({limitNetwork:limitNetwork}),[showModalDialog,setShowModalDialog]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(peerConnectEnabled&&null===dAppConnect.current){initDappConnect(dAppName,dAppUrl,((walletInfo,callback)=>{callback(window.confirm(`Do you want to connect to wallet ${walletInfo.address}?`),!0)}),((name,address)=>{connect(name)}),((name,address)=>{disconnect()}))}}),[]);const isMobile=(0,dist.checkIsMobile)(),availableWallets=(0,dist.estimateAvailableWallets)(supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{"function"==typeof onConnectError?onConnectError(walletName,error):error instanceof dist.WalletExtensionNotFoundError?"nami"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.NAMI.name}/${dist.chromeWalletExtensions.NAMI.id}`):"flint"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.FLINT.name}/${dist.chromeWalletExtensions.FLINT.id}`):"typhon"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.TYPHON.name}/${dist.chromeWalletExtensions.TYPHON.id}`):"yoroi"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.YOROI.name}/${dist.chromeWalletExtensions.YOROI.id}`):"eternl"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.ETERNL.name}/${dist.chromeWalletExtensions.ETERNL.id}`):"gerowallet"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.GEROWALLET.name}/${dist.chromeWalletExtensions.GEROWALLET.id}`):"nufi"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.NUFI.name}/${dist.chromeWalletExtensions.NUFI.id}`):"lace"===walletName.toLowerCase()?window.open(`${dist.chromeStoreUrl}${dist.chromeWalletExtensions.LACE.name}/${dist.chromeWalletExtensions.LACE.id}`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`):(alert("Something went wrong. Please try again later."),console.warn(error))}))},themeColorObject=primaryColor?color_default()(primaryColor):color_default()("#0538AF"),buttonTitle=stakeAddress&&isConnected?(()=>{if(showAccountBalance){return`₳ ${Math.round(100*accountBalance)/100}`}return`${stakeAddress.slice(0,12)}...`})():label||"Connect Wallet",walletMenu=react.createElement(Menu,{id:"connect-wallet-menu"},peerConnectEnabled&&react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),onClick:()=>setShowModalDialog(!0)},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)("peer-connect")}),"P2P Wallet"),availableWallets?availableWallets.map((availableWallet=>isMobile&&!dist.mobileWallets.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{borderRadius:borderRadius,key:availableWallet},"x",react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),key:availableWallet,onClick:()=>(async walletName=>{isMobile||connectWallet(walletName),dist.mobileWallets.includes(walletName.toLowerCase())&&"flint"===walletName.toLowerCase()&&((0,dist.isWalletInstalled)("flint")?connectWallet(walletName):window.location.href=`${dist.flintDeepLink}${encodeURIComponent(window.location.href)}`)})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,dist.getWalletIcon)(availableWallet)}),(0,dist.capitalize)(availableWallet)))):react.createElement("span",{id:"connect-wallet-hint"},`Please install a wallet browser extension (${(0,dist.formatSupportedWallets)(supportedWallets)} are supported)`)),actionMenu=hideActionMenu?null:react.createElement(Menu,{id:"connect-wallet-menu"},"string"==typeof message&&react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),onClick:()=>signMessage(message,onSignMessage)},"Sign a message"),customActions.map(((customAction,index)=>react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,key:`custom-action-${index}`,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),onClick:customAction.onClick},customAction.label))),react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),onClick:()=>{disconnect(),"function"==typeof onDisconnect&&onDisconnect()}},"Disconnect"));if(void 0===beforeComponent&&enabledWallet){const walletIcon=(0,dist.getWalletIcon)(enabledWallet);beforeComponent=react.createElement("img",{height:24,width:24,style:{marginRight:"8px"},src:walletIcon,alt:`${enabledWallet}-icon`})}return react.createElement(Dropdown,{id:"connect-wallet-dropdown",customCSS:customCSS||"",borderRadius:0,primaryColor:themeColorObject.hex()},peerConnectEnabled&&react.createElement(ModalDialog.Z,{handleClose:()=>setShowModalDialog(!1),content:meerkatAddress,icon:dAppConnect.current?.getIdenticon(),visible:showModalDialog,primaryColor:themeColorObject.hex(),subtitle:peerConnectSubtitle,customCSS:peerConnectCustomCSS}),react.createElement(Button,{customCSS:"",id:"connect-wallet-button",onClick:()=>{stakeAddress&&isConnected&&"function"==typeof onStakeAddressClick&&onStakeAddressClick(stakeAddress)},borderRadius:borderRadius,primaryColor:themeColorObject.hex()},beforeComponent,buttonTitle,afterComponent),!disabled&&(isEnabled&&isConnected?actionMenu:walletMenu))};var ConnectWalletButton_ConnectWalletButton=ConnectWalletButton;try{ConnectWalletButton.displayName="ConnectWalletButton",ConnectWalletButton.__docgenInfo={description:"",displayName:"ConnectWalletButton",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},supportedWallets:{defaultValue:{value:"[\n    'Flint',\n    'Nami',\n    'Eternl',\n    'Yoroi',\n    'Typhon',\n    'NuFi',\n    'Lace',\n  ]"},description:"",name:"supportedWallets",required:!1,type:{name:"string[]"}},showUnavailableWallets:{defaultValue:{value:"UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE"},description:"",name:"showUnavailableWallets",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},alwaysVisibleWallets:{defaultValue:{value:"[]"},description:"",name:"alwaysVisibleWallets",required:!1,type:{name:"string[]"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:{value:"15"},description:"",name:"borderRadius",required:!1,type:{name:"number"}},showAccountBalance:{defaultValue:{value:"false"},description:"",name:"showAccountBalance",required:!1,type:{name:"boolean"}},customCSS:{defaultValue:null,description:"",name:"customCSS",required:!1,type:{name:"string"}},customActions:{defaultValue:{value:"[]"},description:"",name:"customActions",required:!1,type:{name:"Action[]"}},beforeComponent:{defaultValue:null,description:"",name:"beforeComponent",required:!1,type:{name:"Element"}},afterComponent:{defaultValue:null,description:"",name:"afterComponent",required:!1,type:{name:"Element"}},hideActionMenu:{defaultValue:{value:"false"},description:"",name:"hideActionMenu",required:!1,type:{name:"boolean"}},limitNetwork:{defaultValue:null,description:"",name:"limitNetwork",required:!1,type:{name:"enum",value:[{value:'"mainnet"'},{value:'"testnet"'}]}},peerConnectEnabled:{defaultValue:{value:"false"},description:"",name:"peerConnectEnabled",required:!1,type:{name:"boolean"}},dAppUrl:{defaultValue:{value:"http://awesome-dapp-url.tld/"},description:"",name:"dAppUrl",required:!1,type:{name:"string"}},dAppName:{defaultValue:{value:"Awesome DApp"},description:"",name:"dAppName",required:!1,type:{name:"string"}},peerConnectSubtitle:{defaultValue:null,description:"",name:"peerConnectSubtitle",required:!1,type:{name:"string"}},peerConnectCustomCSS:{defaultValue:null,description:"",name:"peerConnectCustomCSS",required:!1,type:{name:"string"}},onConnect:{defaultValue:null,description:"",name:"onConnect",required:!1,type:{name:"((walletName: string) => void)"}},onDisconnect:{defaultValue:null,description:"",name:"onDisconnect",required:!1,type:{name:"(() => void)"}},onSignMessage:{defaultValue:null,description:"",name:"onSignMessage",required:!1,type:{name:"((signature: string, key: string) => void)"}},onStakeAddressClick:{defaultValue:null,description:"",name:"onStakeAddressClick",required:!1,type:{name:"((stakeAddress: string) => void)"}},onConnectError:{defaultValue:null,description:"",name:"onConnectError",required:!1,type:{name:"((walletName: string, error: Error) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletButton/ConnectWalletButton.tsx#ConnectWalletButton"]={docgenInfo:ConnectWalletButton.__docgenInfo,name:"ConnectWalletButton",path:"src/components/ConnectWalletButton/ConnectWalletButton.tsx#ConnectWalletButton"})}catch(__react_docgen_typescript_loader_error){}var ConnectWalletButton_stories={title:"Components/ConnectWalletButton",component:ConnectWalletButton_ConnectWalletButton};const Template=args=>react.createElement(ConnectWalletButton_ConnectWalletButton,args),DefaultButton=Template.bind({});DefaultButton.args={label:"Connect Wallet"};const CustomButton=Template.bind({});CustomButton.args={label:"Connect",message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},supportedWallets:["Nami","Flint","Lace"],onStakeAddressClick:stakeAddress=>console.log(stakeAddress)};const NoActionMenuButton=Template.bind({});NoActionMenuButton.args={label:"Connect with wallet",hideActionMenu:!0,onStakeAddressClick:stakeAddress=>alert(stakeAddress)};const ButtonWithIcon=Template.bind({});ButtonWithIcon.args={beforeComponent:react.createElement("div",{style:{backgroundColor:"black",marginRight:6,width:16,height:16}}),afterComponent:react.createElement("div",{style:{backgroundColor:"red",marginLeft:6,width:16,height:16}})};const ComponentTitleButton=Template.bind({});ComponentTitleButton.args={label:react.createElement("div",{style:{backgroundColor:"red",padding:16,borderRadius:"100%"}}),onConnect:()=>alert("connected")};const TestnetButton=Template.bind({});TestnetButton.args={limitNetwork:dist.NetworkType.TESTNET,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const BalanceButton=Template.bind({});BalanceButton.args={showAccountBalance:!0,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}};const P2PButton=Template.bind({});P2PButton.args={peerConnectEnabled:!0,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}},DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...DefaultButton.parameters?.docs?.source}}},CustomButton.parameters={...CustomButton.parameters,docs:{...CustomButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...CustomButton.parameters?.docs?.source}}},NoActionMenuButton.parameters={...NoActionMenuButton.parameters,docs:{...NoActionMenuButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...NoActionMenuButton.parameters?.docs?.source}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ButtonWithIcon.parameters?.docs?.source}}},ComponentTitleButton.parameters={...ComponentTitleButton.parameters,docs:{...ComponentTitleButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...ComponentTitleButton.parameters?.docs?.source}}},TestnetButton.parameters={...TestnetButton.parameters,docs:{...TestnetButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...TestnetButton.parameters?.docs?.source}}},BalanceButton.parameters={...BalanceButton.parameters,docs:{...BalanceButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...BalanceButton.parameters?.docs?.source}}},P2PButton.parameters={...P2PButton.parameters,docs:{...P2PButton.parameters?.docs,source:{originalSource:"args => <ConnectWalletButton {...args} />",...P2PButton.parameters?.docs?.source}}}},"./src/components/ModalDialog/ModalDialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ModalDialog_ModalDialog}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Modal=(0,styled_components_browser_esm.ZP)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
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
`,ModalContent=styled_components_browser_esm.ZP.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #aeaeae;
  border-radius: 9px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`,CopyInputContainer=(0,styled_components_browser_esm.ZP)("div").withConfig({shouldForwardProp:prop=>!["primaryColor"].includes(prop)})`
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
`,fadeInOut=styled_components_browser_esm.F4`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`,Toast=styled_components_browser_esm.ZP.div`
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
`;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/ModalDialog/StyledDialogElements.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{ModalContent.displayName="ModalContent",ModalContent.__docgenInfo={description:"",displayName:"ModalContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#ModalContent"]={docgenInfo:ModalContent.__docgenInfo,name:"ModalContent",path:"src/components/ModalDialog/StyledDialogElements.tsx#ModalContent"})}catch(__react_docgen_typescript_loader_error){}try{CopyInputContainer.displayName="CopyInputContainer",CopyInputContainer.__docgenInfo={description:"",displayName:"CopyInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#CopyInputContainer"]={docgenInfo:CopyInputContainer.__docgenInfo,name:"CopyInputContainer",path:"src/components/ModalDialog/StyledDialogElements.tsx#CopyInputContainer"})}catch(__react_docgen_typescript_loader_error){}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/ModalDialog/StyledDialogElements.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("../node_modules/react-qrcode-logo/dist/index.js");const ModalDialog=props=>{const{visible:visible,content:content,handleClose:handleClose,qrStyle:qrStyle,eyeRadius:eyeRadius,icon:icon,subtitle:subtitle,primaryColor:primaryColor,customCSS:customCSS}=props,toastRef=(0,react.useRef)(null);return react.createElement(Modal,{onClick:()=>{"function"==typeof handleClose&&handleClose()},customCSS:customCSS||"",style:{display:visible?"block":"none"}},react.createElement(ModalContent,{"data-testid":"modal-content"},react.createElement(dist.QRCode,{removeQrCodeBehindLogo:!0,logoImage:icon||void 0,ecLevel:"H",eyeRadius:eyeRadius||0,qrStyle:qrStyle||"squares",value:content}),react.createElement(CopyInputContainer,{primaryColor:primaryColor||"#0538AF"},react.createElement("input",{type:"text",value:content,style:{textOverflow:"ellipsis"},readOnly:!0}),react.createElement("button",{onClick:event=>{event.stopPropagation(),navigator.clipboard.writeText(content),toastRef.current?.classList.add("show"),setTimeout((function(){toastRef.current?.classList.remove("show")}),3e3)}},"Copy")),react.createElement("p",{style:{maxWidth:300}},subtitle||"You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet."),react.createElement(Toast,{ref:toastRef},"P2P identifier copied to clipboard!")))};var ModalDialog_ModalDialog=ModalDialog;try{ModalDialog.displayName="ModalDialog",ModalDialog.__docgenInfo={description:"",displayName:"ModalDialog",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},customCSS:{defaultValue:null,description:"",name:"customCSS",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},qrStyle:{defaultValue:null,description:"",name:"qrStyle",required:!1,type:{name:"enum",value:[{value:'"squares"'},{value:'"dots"'}]}},eyeRadius:{defaultValue:null,description:"",name:"eyeRadius",required:!1,type:{name:"number"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | null | undefined"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/ModalDialog.tsx#ModalDialog"]={docgenInfo:ModalDialog.__docgenInfo,name:"ModalDialog",path:"src/components/ModalDialog/ModalDialog.tsx#ModalDialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return hooks_useCardano}});var react=__webpack_require__("../node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@cardano-foundation/cardano-connect-with-wallet-core/dist/index.js"),cardano_peer_connect_dist=__webpack_require__("../node_modules/@fabianbormann/cardano-peer-connect/dist/index.js");var hooks_useCardano=function useCardano(props){const dAppConnect=(0,react.useRef)(null),[meerkatAddress,setMeerkatAddress]=(0,react.useState)(dist.Wallet.meerkatAddressObserver.get()),[isEnabled,setIsEnabled]=(0,react.useState)(dist.Wallet.enabledObserver.get()),[isConnecting,setIsConnecting]=(0,react.useState)(dist.Wallet.isConnectingObserver.get()),[enabledWallet,setEnabledWallet]=(0,react.useState)(dist.Wallet.enabledWalletObserver.get()),[stakeAddress,setStakeAddress]=(0,react.useState)(dist.Wallet.stakeAddressObserver.get()),[usedAddresses,setUsedAddresses]=(0,react.useState)(dist.Wallet.usedAddressesObserver.get()),[unusedAddresses,setUnusedAddresses]=(0,react.useState)(dist.Wallet.unusedAddressesObserver.get()),[accountBalance,setAccountBalance]=(0,react.useState)(dist.Wallet.accountBalanceObserver.get()),[installedExtensions,setInstalledExtensions]=(0,react.useState)(dist.Wallet.installedWalletExtensionsObserver.get()),[isConnected,setIsConnected]=(0,react.useState)(dist.Wallet.isConnected.get()),[lastConnectedWallet,setLastConnectedWallet]=(0,react.useState)(dist.Wallet.lastConnectedWallet.get()),limitNetwork=props?.limitNetwork||dist.NetworkType.MAINNET;(0,react.useEffect)((()=>(dist.Wallet.checkEnabled(limitNetwork).catch((error=>{console.error(error),disconnect()})),dist.Wallet.subscribeToObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress),()=>{dist.Wallet.unsubscribeFromObservables(setIsEnabled,setIsConnecting,setEnabledWallet,setStakeAddress,setUsedAddresses,setUnusedAddresses,setInstalledExtensions,setAccountBalance,setIsConnected,setLastConnectedWallet,setMeerkatAddress)})),[]);const initDappConnect=(0,react.useCallback)(((dAppName,dAppUrl,verifyConnection,onApiInject,onApiEject)=>{dAppConnect.current=new cardano_peer_connect_dist.DAppPeerConnect({dAppInfo:{name:dAppName,url:dAppUrl},verifyConnection:verifyConnection,onApiInject:onApiInject,onApiEject:onApiEject}),dAppConnect.current.generateIdenticon(),setMeerkatAddress(dAppConnect.current.getAddress())}),[]),disconnect=(0,react.useCallback)((()=>{dist.Wallet.disconnect()}),[]),connectToWallet=(0,react.useCallback)((async function(walletName){let retries=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,retryIntervalInMs=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;try{await dist.Wallet.connectToWallet(walletName,limitNetwork,retries,retryIntervalInMs)}catch(error){console.error(error)}}),[limitNetwork]),checkEnabled=(0,react.useCallback)((async()=>{try{await dist.Wallet.checkEnabled(limitNetwork)}catch(error){console.error(error),disconnect()}}),[lastConnectedWallet]),signMessage=(0,react.useCallback)((async(message,onSignMessage,onSignError)=>{dist.Wallet.signMessage(message,onSignMessage,onSignError)}),[isEnabled,enabledWallet,limitNetwork]),connect=(0,react.useCallback)((async(walletName,onConnect,onError)=>{if(isConnecting)return;const errorHandler=void 0===onError?error=>console.error(error):onError;dist.Wallet.connect(walletName,limitNetwork,onConnect,errorHandler)}),[connectToWallet,isConnecting]);return(0,react.useEffect)((()=>{isConnected&&checkEnabled()}),[isConnected]),(0,react.useEffect)((()=>(dist.Wallet.startInjectWalletListener(),()=>{dist.Wallet.stopInjectWalletListener()})),[]),{isEnabled:isEnabled,isConnected:isConnected,isConnecting:isConnecting,enabledWallet:enabledWallet,stakeAddress:stakeAddress,usedAddresses:usedAddresses,unusedAddresses:unusedAddresses,signMessage:signMessage,connect:connect,disconnect:disconnect,installedExtensions:installedExtensions,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress}}}}]);
//# sourceMappingURL=components-ConnectWalletButton-ConnectWalletButton-stories.c32f110d.iframe.bundle.js.map