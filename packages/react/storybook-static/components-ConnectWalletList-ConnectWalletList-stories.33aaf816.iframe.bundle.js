"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[711],{"./src/components/ConnectWalletList/ConnectWalletList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cip95GovernanceList:function(){return Cip95GovernanceList},CustomList:function(){return CustomList},DefaultList:function(){return DefaultList},MultipleExtensionsList:function(){return MultipleExtensionsList},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ConnectWalletList_stories}});var react=__webpack_require__("../node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),core=__webpack_require__("../core/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
  font-family: sans-serif;
  min-width: 160px;
  max-width: 240px;
  width: fit-content;
  z-index: 1;
  ${props=>props.customCSS}
`,MenuItem=(0,styled_components_browser_esm.Ay)("button").withConfig({shouldForwardProp:prop=>!["primaryColor","primaryColorLight","borderRadius","gap"].includes(prop)})`
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
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-family: sans-serif;

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
`;var ModalDialog=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx"),common=__webpack_require__("./src/common.ts");const ConnectWalletList=({supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","NuFi","Lace","TyphonCip30"],primaryColor:primaryColor,borderRadius:borderRadius,gap:gap,showUnavailableWallets:showUnavailableWallets=core.gH.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],customCSS:customCSS,peerConnectEnabled:peerConnectEnabled=!0,cip158Enabled:cip158Enabled=!0,peerConnectSubtitle:peerConnectSubtitle,peerConnectCustomCSS:peerConnectCustomCSS,dAppName:dAppName="Awesome DApp",dAppUrl:dAppUrl="http://awesome-dapp-url.tld/",extensions:extensions,limitNetwork:limitNetwork,onConnect:onConnect,onConnectError:onConnectError=(walletName,error,level="error")=>alert(`${level}: ${error.message} (${walletName})`)})=>{const{connect:connect,dAppConnect:dAppConnect,disconnect:disconnect,initDappConnect:initDappConnect,installedExtensions:installedExtensions,connectedCip45Wallet:connectedCip45Wallet,peerConnectAddress:peerConnectAddress}=(0,hooks.o)({limitNetwork:limitNetwork}),[showModalDialog,setShowModalDialog]=(0,react.useState)(!1);(0,react.useEffect)(()=>{if(peerConnectEnabled&&null===dAppConnect.current){initDappConnect(dAppName,dAppUrl,(walletInfo,callback)=>{if(walletInfo.requestAutoconnect){const accessAndAutoConnect=window.confirm(`Do you want to automatically connect to wallet ${walletInfo.name} (${walletInfo.address})?`);callback(accessAndAutoConnect,accessAndAutoConnect)}else callback(window.confirm(`Do you want to connect to wallet ${walletInfo.name} (${walletInfo.address})?`),!0)},(name,address)=>{connectWallet(name)},(name,address)=>{disconnect()},(address,walletInfo)=>{setShowModalDialog(!1)})}},[]);const isMobile=(0,core.fZ)(),availableWallets=(0,core.A$)(peerConnectEnabled&&connectedCip45Wallet.current?.name?[connectedCip45Wallet.current.name,...supportedWallets]:supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,()=>{"function"==typeof onConnect&&onConnect(walletName)},error=>{if(error instanceof core.k7){const config=(0,core.Mv)(walletName);config?.chromeExtensionId&&config?.chromeExtensionName?window.open(`${core.v3}${config.chromeExtensionName}/${config.chromeExtensionId}`):onConnectError(walletName,error,"warn")}else onConnectError(walletName,error)},extensions)},themeColorObject=primaryColor?(0,color.A)(primaryColor):(0,color.A)("#0538AF");return react.createElement(react.Fragment,null,peerConnectEnabled&&react.createElement(ModalDialog.A,{handleClose:()=>setShowModalDialog(!1),content:peerConnectAddress,icon:dAppConnect.current?.getIdenticon(),visible:showModalDialog,primaryColor:themeColorObject.hex(),subtitle:peerConnectSubtitle,customCSS:peerConnectCustomCSS}),react.createElement(Menu,{customCSS:customCSS||"","data-testid":"connect-wallet-list"},peerConnectEnabled&&react.createElement(MenuItem,{gap:gap||0,key:"peer-connect",borderRadius:borderRadius||0,primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),onClick:()=>setShowModalDialog(!0)},react.createElement(MenuItemIcon,{src:(0,core.Hs)("peer-connect")}),"P2P Wallet"),availableWallets?availableWallets.map(availableWallet=>{const displayName=(0,core.Mv)(availableWallet)?.displayName??availableWallet;return isMobile&&!core.rK.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(displayName),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet,onClick:()=>(async walletName=>{if(!isMobile)return void connectWallet(walletName);if(!core.rK.includes(walletName.toLowerCase()))return;const config=(0,core.Mv)(walletName);if((0,core.ql)(walletName))connectWallet(walletName);else if(config?.mobileDeepLinkPrefix)window.location.href=`${config.mobileDeepLinkPrefix}${encodeURIComponent(window.location.href)}`;else{if(cip158Enabled&&config?.hasCIP158Support){const deepLink=(0,core.kU)(window.location.href),appStoreTimeout=setTimeout(()=>{"iOS"===(0,common.n)()?window.location.href=config.appStoreUrl:"Android"===(0,common.n)()&&(window.location.href=config.playStoreUrl)},2500);return document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&clearTimeout(appStoreTimeout)},{once:!0}),void(window.location.href=deepLink)}"iOS"===(0,common.n)()?window.location.href=config?.appStoreUrl??"":"Android"===(0,common.n)()?window.location.href=config?.playStoreUrl??"":onConnectError(walletName,new Error("Please install the wallet from the app store."),"warn")}})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(displayName))}):react.createElement("span",null,`Please install a wallet browser extension (${(0,core.mJ)(supportedWallets)} are supported)`)))};var ConnectWalletList_ConnectWalletList=ConnectWalletList;ConnectWalletList.__docgenInfo={description:"",methods:[],displayName:"ConnectWalletList",props:{supportedWallets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"",defaultValue:{value:"[\n  'Flint',\n  'Nami',\n  'Eternl',\n  'Yoroi',\n  'NuFi',\n  'Lace',\n  'TyphonCip30',\n]",computed:!1}},primaryColor:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"number"},description:""},gap:{required:!1,tsType:{name:"number"},description:""},showUnavailableWallets:{required:!1,tsType:{name:"UnavailableWalletVisibility"},description:"",defaultValue:{value:"UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE",computed:!0}},alwaysVisibleWallets:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"",defaultValue:{value:"[]",computed:!1}},customCSS:{required:!1,tsType:{name:"string"},description:""},limitNetwork:{required:!1,tsType:{name:"NetworkType"},description:""},peerConnectEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},cip158Enabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dAppUrl:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'http://awesome-dapp-url.tld/'",computed:!1}},dAppName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Awesome DApp'",computed:!1}},peerConnectSubtitle:{required:!1,tsType:{name:"string"},description:""},peerConnectCustomCSS:{required:!1,tsType:{name:"string"},description:""},extensions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:""},onConnect:{required:!1,tsType:{name:"signature",type:"function",raw:"(walletName: string) => void",signature:{arguments:[{type:{name:"string"},name:"walletName"}],return:{name:"void"}}},description:""},onConnectError:{required:!1,tsType:{name:"signature",type:"function",raw:"(walletName: string, error: Error, level?: 'error' | 'warn') => void",signature:{arguments:[{type:{name:"string"},name:"walletName"},{type:{name:"Error"},name:"error"},{type:{name:"union",raw:"'error' | 'warn'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warn'"}]},name:"level"}],return:{name:"void"}}},description:"",defaultValue:{value:"(walletName: string, error: Error, level: 'error' | 'warn' = 'error') => alert(`${level}: ${error.message} (${walletName})`)",computed:!1}}}};var ConnectWalletList_stories={title:"Components/ConnectWalletList",component:ConnectWalletList_ConnectWalletList};const DefaultList={args:{}},CustomList={args:{borderRadius:15,gap:8,primaryColor:"#96839f"}},Cip95GovernanceList={args:{extensions:[95],onConnect:_walletName=>{alert(`Connected to ${_walletName} with CIP-95 governance extension`)},onConnectError:(_walletName,error)=>{alert(error.message)}}},MultipleExtensionsList={args:{extensions:[95,103],onConnect:_walletName=>{alert(`Connected to ${_walletName} with CIP-95 and CIP-103 extensions`)},onConnectError:(_walletName,error)=>{alert(error.message)}}},__namedExportsOrder=["DefaultList","CustomList","Cip95GovernanceList","MultipleExtensionsList"];DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...DefaultList.parameters?.docs?.source}}},CustomList.parameters={...CustomList.parameters,docs:{...CustomList.parameters?.docs,source:{originalSource:"{\n  args: {\n    borderRadius: 15,\n    gap: 8,\n    primaryColor: '#96839f'\n  }\n}",...CustomList.parameters?.docs?.source}}},Cip95GovernanceList.parameters={...Cip95GovernanceList.parameters,docs:{...Cip95GovernanceList.parameters?.docs,source:{originalSource:"{\n  args: {\n    extensions: [95],\n    onConnect: _walletName => {\n      alert(`Connected to ${_walletName} with CIP-95 governance extension`);\n    },\n    onConnectError: (_walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...Cip95GovernanceList.parameters?.docs?.source}}},MultipleExtensionsList.parameters={...MultipleExtensionsList.parameters,docs:{...MultipleExtensionsList.parameters?.docs,source:{originalSource:"{\n  args: {\n    extensions: [95, 103],\n    onConnect: _walletName => {\n      alert(`Connected to ${_walletName} with CIP-95 and CIP-103 extensions`);\n    },\n    onConnectError: (_walletName, error) => {\n      alert(error.message);\n    }\n  }\n}",...MultipleExtensionsList.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ConnectWalletList-ConnectWalletList-stories.33aaf816.iframe.bundle.js.map