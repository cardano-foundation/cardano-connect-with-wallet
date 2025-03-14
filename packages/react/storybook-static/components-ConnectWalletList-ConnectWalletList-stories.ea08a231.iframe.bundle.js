"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[711],{"./src/components/ConnectWalletList/ConnectWalletList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomList:function(){return CustomList},DefaultList:function(){return DefaultList},default:function(){return ConnectWalletList_stories}});var react=__webpack_require__("../node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),core=__webpack_require__("../core/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
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
`;var ConnectWalletList_ConnectWalletList=_ref=>{let{supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","NuFi","Lace"],primaryColor:primaryColor,borderRadius:borderRadius,gap:gap,showUnavailableWallets:showUnavailableWallets=core.gH.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],customCSS:customCSS,limitNetwork:limitNetwork,onConnect:onConnect,onConnectError:onConnectError}=_ref;const{connect:connect,installedExtensions:installedExtensions}=(0,hooks.o)({limitNetwork:limitNetwork}),mobileWallets=["flint"],isMobile=(0,core.fZ)(),availableWallets=(0,core.A$)(supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{if("function"==typeof onConnectError)onConnectError(walletName,error);else if(error instanceof core.k7){const chromeStoreUrl="https://chrome.google.com/webstore/detail/";"nami"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nami/lpfcbjknijpeeillifnkikgncikgfhdo`):"flint"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj`):"typhon"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}typhon-wallet/kfdniefadaanbjodldohaedphafoffoh`):"yoroi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb`):"eternl"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}eternl/kmhcihpebfmpgmihbkipmjlmmioameka`):"gerowallet"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}gerowallet/bgpipimickeadkjlklgciifhnalhdjhe`):"nufi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nufi/gpnihlnnodeiiaakbikldcihojploeca`):"lace"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}lace/gafhhkghbfjjkeiendhlofajokpaflmk`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`)}else alert("Something went wrong. Please try again later.")}))},themeColorObject=primaryColor?(0,color.A)(primaryColor):(0,color.A)("#0538AF");return react.createElement(Menu,{customCSS:customCSS||"","data-testid":"connect-wallet-list"},availableWallets?availableWallets.map((availableWallet=>isMobile&&!mobileWallets.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(availableWallet),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix((0,color.A)("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet,onClick:()=>(async walletName=>{isMobile||connectWallet(walletName),mobileWallets.includes(walletName.toLowerCase())&&"flint"===walletName.toLowerCase()&&((0,core.ql)("flint")?connectWallet(walletName):window.location.href=`https://flint-wallet.app.link/browse?dappUrl=${encodeURIComponent(window.location.href)}`)})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,core.Hs)(availableWallet)}),(0,core.ZH)(availableWallet)))):react.createElement("span",null,`Please install a wallet browser extension (${(0,core.mJ)(supportedWallets)} are supported)`))},ConnectWalletList_stories={title:"Components/ConnectWalletList",component:ConnectWalletList_ConnectWalletList};const Template=args=>react.createElement(ConnectWalletList_ConnectWalletList,args),DefaultList=Template.bind({});DefaultList.args={};const CustomList=Template.bind({});CustomList.args={borderRadius:15,gap:8,primaryColor:"#96839f"},DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...DefaultList.parameters?.docs?.source}}},CustomList.parameters={...CustomList.parameters,docs:{...CustomList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...CustomList.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ConnectWalletList-ConnectWalletList-stories.ea08a231.iframe.bundle.js.map