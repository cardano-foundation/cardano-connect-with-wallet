"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[919],{"./src/components/ConnectWalletButton/ConnectWalletButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BalanceButton:function(){return BalanceButton},ButtonWithIcon:function(){return ButtonWithIcon},Cip95GovernanceButton:function(){return Cip95GovernanceButton},ComponentTitleButton:function(){return ComponentTitleButton},CustomButton:function(){return CustomButton},DefaultButton:function(){return DefaultButton},MultipleExtensionsButton:function(){return MultipleExtensionsButton},NoActionMenuButton:function(){return NoActionMenuButton},P2PButton:function(){return P2PButton},TestnetButton:function(){return TestnetButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ConnectWalletButton_stories}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=styled_components_browser_esm.Ay.div`
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
`;var hooks=__webpack_require__("./src/hooks/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),core=__webpack_require__("../core/index.ts"),ModalDialog=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx"),common=__webpack_require__("./src/common.ts"),dist=__webpack_require__("../node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs");const ConnectWalletButton=({label:label,disabled:disabled,message:message,supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","TyphonCip30","NuFi","Lace"],showUnavailableWallets:showUnavailableWallets=core.gH.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],primaryColor:primaryColor,borderRadius:borderRadius=15,customCSS:customCSS,customActions:customActions=[],hideActionMenu:hideActionMenu=!1,afterComponent:afterComponent,beforeComponent:beforeComponent,limitNetwork:limitNetwork,peerConnectEnabled:peerConnectEnabled=!0,peerConnectSubtitle:peerConnectSubtitle,peerConnectCustomCSS:peerConnectCustomCSS,additionalPeerConnectTrackerUrls:additionalPeerConnectTrackerUrls=[],dAppName:dAppName="Awesome DApp",dAppUrl:dAppUrl="http://awesome-dapp-url.tld/",extensions:extensions,onConnect:onConnect,onDisconnect:onDisconnect,onSignMessage:onSignMessage,showAccountBalance:showAccountBalance=!1,onStakeAddressClick:onStakeAddressClick,onConnectError:onConnectError})=>{const{isEnabled:isEnabled,stakeAddress:stakeAddress,signMessage:signMessage,connect:connect,disconnect:disconnect,isConnected:isConnected,installedExtensions:installedExtensions,enabledWallet:enabledWallet,accountBalance:accountBalance,dAppConnect:dAppConnect,initDappConnect:initDappConnect,meerkatAddress:meerkatAddress,connectedCip45Wallet:connectedCip45Wallet}=(0,hooks.o)({limitNetwork:limitNetwork}),[showModalDialog,setShowModalDialog]=(0,react.useState)(!1);(0,react.useEffect)(()=>{if(peerConnectEnabled&&null===dAppConnect.current){initDappConnect(dAppName,dAppUrl,(walletInfo,callback)=>{if(walletInfo.requestAutoconnect){const accessAndAutoConnect=window.confirm(`Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`);callback(accessAndAutoConnect,accessAndAutoConnect)}else callback(window.confirm(`Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`),!0)},(name,address)=>{connectWallet(name)},(name,address)=>{disconnect()},additionalPeerConnectTrackerUrls,(address,walletInfo)=>{setShowModalDialog(!1)})}},[]);const isMobile=(0,core.fZ)(),availableWallets=(0,core.A$)(peerConnectEnabled&&connectedCip45Wallet.current?.name?[connectedCip45Wallet.current.name,...supportedWallets]:supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,()=>{"function"==typeof onConnect&&onConnect(walletName)},error=>{"function"==typeof onConnectError?onConnectError(walletName,error):error instanceof core.k7?"nami"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.NAMI.name}/${core.Y3.NAMI.id}`):"flint"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.FLINT.name}/${core.Y3.FLINT.id}`):"typhoncip30"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.TYPHON.name}/${core.Y3.TYPHON.id}`):"yoroi"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.YOROI.name}/${core.Y3.YOROI.id}`):"eternl"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.ETERNL.name}/${core.Y3.ETERNL.id}`):"gerowallet"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.GEROWALLET.name}/${core.Y3.GEROWALLET.id}`):"nufi"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.NUFI.name}/${core.Y3.NUFI.id}`):"lace"===walletName.toLowerCase()?window.open(`${core.v3}${core.Y3.LACE.name}/${core.Y3.LACE.id}`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`):(alert("Something went wrong. Please try again later."),console.warn(error))},extensions)},themeColorObject=primaryColor?(0,color.A)(primaryColor):(0,color.A)("#0538AF"),buttonTitle=stakeAddress&&isConnected?(()=>{if(showAccountBalance){return`₳ ${Math.round(100*accountBalance)/100}`}return`${stakeAddress.slice(0,12)}...`})():label||"Connect Wallet";if(void 0===beforeComponent&&enabledWallet){const walletIcon=(0,core.Hs)(enabledWallet);beforeComponent=react.createElement("img",{height:24,width:24,style:{marginRight:"8px"},src:walletIcon,alt:`${enabledWallet}-icon`})}return react.createElement(Dropdown,{id:"connect-wallet-dropdown",customCSS:customCSS||"",borderRadius:0,primaryColor:themeColorObject.hex()},peerConnectEnabled&&react.createElement(ModalDialog.A,{handleClose:()=>setShowModalDialog(!1),content:meerkatAddress,icon:dAppConnect.current?.getIdenticon(),visible:showModalDialog,primaryColor:themeColorObject.hex(),subtitle:peerConnectSubtitle,customCSS:peerConnectCustomCSS}),react.createElement(dist.bL,null,react.createElement(dist.l9,{asChild:!0},react.createElement(Button,{customCSS:"",id:"connect-wallet-button",onClick:()=>{stakeAddress&&isConnected&&"function"==typeof onStakeAddressClick&&onStakeAddressClick(stakeAddress)},borderRadius:borderRadius,primaryColor:themeColorObject.hex(),disabled:disabled},beforeComponent,buttonTitle,afterComponent)),react.createElement(dist.ZL,null,!disabled&&(isEnabled&&isConnected?hideActionMenu?null:react.createElement(dist.UC,{asChild:!0},react.createElement(Menu,{id:"connect-wallet-menu"},"string"==typeof message&&react.createElement(dist.q7,{asChild:!0,onSelect:()=>signMessage(message,onSignMessage)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},"Sign a message")),customActions.map((customAction,index)=>react.createElement(dist.q7,{asChild:!0,key:`custom-action-${index}`,onSelect:customAction.onClick},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},customAction.label))),react.createElement(dist.q7,{asChild:!0,onSelect:()=>{disconnect(),"function"==typeof onDisconnect&&onDisconnect()}},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},"Disconnect")))):react.createElement(dist.UC,{asChild:!0},react.createElement(Menu,{id:"connect-wallet-menu"},peerConnectEnabled&&react.createElement(dist.q7,{asChild:!0,onSelect:()=>setShowModalDialog(!0)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},react.createElement(MenuItemIcon,{src:(0,core.Hs)("peer-connect")}),"P2P Wallet")),availableWallets?availableWallets.map(availableWallet=>{let displayName=availableWallet;return"typhoncip30"===availableWallet.toLowerCase()&&(displayName="Typhon"),isMobile&&!core.rK.includes(availableWallet.toLowerCase())?react.createElement(dist.q7,{asChild:!0,key:availableWallet,disabled:!0},react.createElement(DesktopMenuItem,{borderRadius:borderRadius,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(displayName),react.createElement("span",null,"Desktop Only"))):react.createElement(dist.q7,{asChild:!0,key:availableWallet,onSelect:()=>(async walletName=>{if(isMobile){if(core.rK.includes(walletName.toLowerCase())&&("flint"===walletName.toLowerCase()&&((0,core.ql)("flint")?connectWallet(walletName):window.location.href=`${core.qB}${encodeURIComponent(window.location.href)}`),["eternl","vespr","begin"].includes(walletName.toLowerCase())))if((0,core.ql)(walletName))connectWallet(walletName);else{const nativeWallet=walletName.toLowerCase();"iOS"===(0,common.n)()?window.location.href=core.qO[nativeWallet].appStoreUrl:"Android"===(0,common.n)()?window.location.href=core.qO[nativeWallet].playStoreUrl:alert("Please install the wallet from the app store.")}}else connectWallet(walletName)})(availableWallet)},react.createElement(MenuItem,{gap:0,borderRadius:borderRadius,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex()},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(displayName)))}):react.createElement("span",{id:"connect-wallet-hint"},`Please install a wallet browser extension (${(0,core.mJ)(supportedWallets)} are supported)`)))))))};var ConnectWalletButton_ConnectWalletButton=ConnectWalletButton;ConnectWalletButton.__docgenInfo={description:"",methods:[],displayName:"ConnectWalletButton",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},message:{required:!1,tsType:{name:"string"},description:""},supportedWallets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"",defaultValue:{value:"[\n  'Flint',\n  'Nami',\n  'Eternl',\n  'Yoroi',\n  'TyphonCip30',\n  'NuFi',\n  'Lace',\n]",computed:!1}},showUnavailableWallets:{required:!1,tsType:{name:"UnavailableWalletVisibility"},description:"",defaultValue:{value:"UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE",computed:!0}},alwaysVisibleWallets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"",defaultValue:{value:"[]",computed:!1}},primaryColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},showAccountBalance:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customCSS:{required:!1,tsType:{name:"string"},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  label: string;\n  onClick: () => void;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"Array<Action>"},description:"",defaultValue:{value:"[]",computed:!1}},beforeComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},afterComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideActionMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},limitNetwork:{required:!1,tsType:{name:"NetworkType"},description:""},peerConnectEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dAppUrl:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://awesome-dapp-url.tld/'",computed:!1}},dAppName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Awesome DApp'",computed:!1}},peerConnectSubtitle:{required:!1,tsType:{name:"string"},description:""},peerConnectCustomCSS:{required:!1,tsType:{name:"string"},description:""},additionalPeerConnectTrackerUrls:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"",defaultValue:{value:"[]",computed:!1}},extensions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:""},onConnect:{required:!1,tsType:{name:"signature",type:"function",raw:"(walletName: string) => void",signature:{arguments:[{type:{name:"string"},name:"walletName"}],return:{name:"void"}}},description:""},onDisconnect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSignMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(signature: string, key: string | undefined) => void",signature:{arguments:[{type:{name:"string"},name:"signature"},{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"key"}],return:{name:"void"}}},description:""},onStakeAddressClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stakeAddress: string) => void",signature:{arguments:[{type:{name:"string"},name:"stakeAddress"}],return:{name:"void"}}},description:""},onConnectError:{required:!1,tsType:{name:"signature",type:"function",raw:"(walletName: string, error: Error) => void",signature:{arguments:[{type:{name:"string"},name:"walletName"},{type:{name:"Error"},name:"error"}],return:{name:"void"}}},description:""}}};var ConnectWalletButton_stories={title:"Components/ConnectWalletButton",component:ConnectWalletButton_ConnectWalletButton};const DefaultButton={args:{label:"Connect Wallet"}},CustomButton={args:{label:"Connect",message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},supportedWallets:["Nami","Flint","Lace"],onStakeAddressClick:stakeAddress=>console.log(stakeAddress)}},NoActionMenuButton={args:{label:"Connect with wallet",hideActionMenu:!0,onStakeAddressClick:stakeAddress=>alert(stakeAddress)}},ButtonWithIcon={args:{beforeComponent:react.createElement("div",{style:{backgroundColor:"black",marginRight:6,width:16,height:16}}),afterComponent:react.createElement("div",{style:{backgroundColor:"red",marginLeft:6,width:16,height:16}})}},ComponentTitleButton={args:{label:react.createElement("div",{style:{backgroundColor:"red",padding:16,borderRadius:"100%"}}),onConnect:()=>alert("connected")}},TestnetButton={args:{limitNetwork:core.z1.TESTNET,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}}},BalanceButton={args:{showAccountBalance:!0,message:"Augusta Ada King, Countess of Lovelace",onConnectError:(walletName,error)=>{alert(error.message)}}},P2PButton={args:{peerConnectEnabled:!0,message:"Augusta Ada King, Countess of Lovelace",onSignMessage:(signature,key)=>{console.log(signature),console.log(key),alert(signature)},onConnectError:(walletName,error)=>{alert(error.message)}}},Cip95GovernanceButton={args:{label:"Connect (CIP-95)",extensions:[95],onConnect:walletName=>{alert(`Connected to ${walletName} with CIP-95 governance extension`)},onConnectError:(walletName,error)=>{alert(error.message)}}},MultipleExtensionsButton={args:{label:"Connect (CIP-95 + CIP-103)",extensions:[95,103],onConnect:walletName=>{alert(`Connected to ${walletName} with CIP-95 and CIP-103 extensions`)},onConnectError:(walletName,error)=>{alert(error.message)}}},__namedExportsOrder=["DefaultButton","CustomButton","NoActionMenuButton","ButtonWithIcon","ComponentTitleButton","TestnetButton","BalanceButton","P2PButton","Cip95GovernanceButton","MultipleExtensionsButton"];DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Connect Wallet'\n  }\n}",...DefaultButton.parameters?.docs?.source}}},CustomButton.parameters={...CustomButton.parameters,docs:{...CustomButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Connect',\n    message: 'Augusta Ada King, Countess of Lovelace',\n    onSignMessage: (signature, key) => {\n      console.log(signature);\n      console.log(key);\n      alert(signature);\n    },\n    supportedWallets: ['Nami', 'Flint', 'Lace'],\n    onStakeAddressClick: stakeAddress => console.log(stakeAddress)\n  }\n}",...CustomButton.parameters?.docs?.source}}},NoActionMenuButton.parameters={...NoActionMenuButton.parameters,docs:{...NoActionMenuButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Connect with wallet',\n    hideActionMenu: true,\n    onStakeAddressClick: stakeAddress => alert(stakeAddress)\n  }\n}",...NoActionMenuButton.parameters?.docs?.source}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    beforeComponent: <div style={{\n      backgroundColor: 'black',\n      marginRight: 6,\n      width: 16,\n      height: 16\n    }}></div>,\n    afterComponent: <div style={{\n      backgroundColor: 'red',\n      marginLeft: 6,\n      width: 16,\n      height: 16\n    }}></div>\n  }\n}",...ButtonWithIcon.parameters?.docs?.source}}},ComponentTitleButton.parameters={...ComponentTitleButton.parameters,docs:{...ComponentTitleButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: <div style={{\n      backgroundColor: 'red',\n      padding: 16,\n      borderRadius: '100%'\n    }}></div>,\n    onConnect: () => alert('connected')\n  }\n}",...ComponentTitleButton.parameters?.docs?.source}}},TestnetButton.parameters={...TestnetButton.parameters,docs:{...TestnetButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    limitNetwork: NetworkType.TESTNET,\n    message: 'Augusta Ada King, Countess of Lovelace',\n    onConnectError: (walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...TestnetButton.parameters?.docs?.source}}},BalanceButton.parameters={...BalanceButton.parameters,docs:{...BalanceButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    showAccountBalance: true,\n    message: 'Augusta Ada King, Countess of Lovelace',\n    onConnectError: (walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...BalanceButton.parameters?.docs?.source}}},P2PButton.parameters={...P2PButton.parameters,docs:{...P2PButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    peerConnectEnabled: true,\n    message: 'Augusta Ada King, Countess of Lovelace',\n    onSignMessage: (signature, key) => {\n      console.log(signature);\n      console.log(key);\n      alert(signature);\n    },\n    onConnectError: (walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...P2PButton.parameters?.docs?.source}}},Cip95GovernanceButton.parameters={...Cip95GovernanceButton.parameters,docs:{...Cip95GovernanceButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Connect (CIP-95)',\n    extensions: [95],\n    onConnect: walletName => {\n      alert(`Connected to ${walletName} with CIP-95 governance extension`);\n    },\n    onConnectError: (walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...Cip95GovernanceButton.parameters?.docs?.source}}},MultipleExtensionsButton.parameters={...MultipleExtensionsButton.parameters,docs:{...MultipleExtensionsButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Connect (CIP-95 + CIP-103)',\n    extensions: [95, 103],\n    onConnect: walletName => {\n      alert(`Connected to ${walletName} with CIP-95 and CIP-103 extensions`);\n    },\n    onConnectError: (walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...MultipleExtensionsButton.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ConnectWalletButton-ConnectWalletButton-stories.96870bac.iframe.bundle.js.map