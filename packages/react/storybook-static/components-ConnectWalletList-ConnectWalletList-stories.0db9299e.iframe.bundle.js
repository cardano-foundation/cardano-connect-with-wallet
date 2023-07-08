"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[255],{"./src/components/ConnectWalletList/ConnectWalletList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomList:function(){return CustomList},DefaultList:function(){return DefaultList},default:function(){return ConnectWalletList_stories}});var react=__webpack_require__("../node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),core=__webpack_require__("../core/index.ts"),color=__webpack_require__("../node_modules/color/index.js"),color_default=__webpack_require__.n(color),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Menu=styled_components_browser_esm.ZP.div`
  font-family: sans-serif;
  min-width: 160px;
  max-width: 240px;
  width: fit-content;
  z-index: 1;
  ${props=>props.customCSS}
`,MenuItem=styled_components_browser_esm.ZP.span`
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
`,MenuItemIcon=styled_components_browser_esm.ZP.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
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
`;try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletList/StyledListElements.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/ConnectWalletList/StyledListElements.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletList/StyledListElements.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/ConnectWalletList/StyledListElements.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}try{MenuItemIcon.displayName="MenuItemIcon",MenuItemIcon.__docgenInfo={description:"",displayName:"MenuItemIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletList/StyledListElements.tsx#MenuItemIcon"]={docgenInfo:MenuItemIcon.__docgenInfo,name:"MenuItemIcon",path:"src/components/ConnectWalletList/StyledListElements.tsx#MenuItemIcon"})}catch(__react_docgen_typescript_loader_error){}try{DesktopMenuItem.displayName="DesktopMenuItem",DesktopMenuItem.__docgenInfo={description:"",displayName:"DesktopMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletList/StyledListElements.tsx#DesktopMenuItem"]={docgenInfo:DesktopMenuItem.__docgenInfo,name:"DesktopMenuItem",path:"src/components/ConnectWalletList/StyledListElements.tsx#DesktopMenuItem"})}catch(__react_docgen_typescript_loader_error){}const ConnectWalletList=_ref=>{let{supportedWallets:supportedWallets=["Flint","Nami","Eternl","Yoroi","NuFi","Lace"],primaryColor:primaryColor,borderRadius:borderRadius,gap:gap,showUnavailableWallets:showUnavailableWallets=core.G9.SHOW_UNAVAILABLE_ON_MOBILE,alwaysVisibleWallets:alwaysVisibleWallets=[],customCSS:customCSS,limitNetwork:limitNetwork,onConnect:onConnect,onConnectError:onConnectError}=_ref;const{connect:connect,installedExtensions:installedExtensions}=(0,hooks.U)({limitNetwork:limitNetwork}),mobileWallets=["flint"],isMobile=(0,core.SB)(),availableWallets=(0,core.lV)(supportedWallets,showUnavailableWallets,alwaysVisibleWallets,installedExtensions),connectWallet=async walletName=>{connect(walletName,(()=>{"function"==typeof onConnect&&onConnect(walletName)}),(error=>{if("function"==typeof onConnectError)onConnectError(walletName,error);else if(error instanceof core.w1){const chromeStoreUrl="https://chrome.google.com/webstore/detail/";"nami"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nami/lpfcbjknijpeeillifnkikgncikgfhdo`):"flint"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj`):"typhon"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}typhon-wallet/kfdniefadaanbjodldohaedphafoffoh`):"yoroi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb`):"eternl"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}eternl/kmhcihpebfmpgmihbkipmjlmmioameka`):"gerowallet"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}gerowallet/bgpipimickeadkjlklgciifhnalhdjhe`):"nufi"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}nufi/gpnihlnnodeiiaakbikldcihojploeca`):"lace"===walletName.toLowerCase()?window.open(`${chromeStoreUrl}lace/gafhhkghbfjjkeiendhlofajokpaflmk`):alert(`Please make sure you are using a modern browser and the ${walletName} browser extension has been installed.`)}else alert("Something went wrong. Please try again later.")}))},themeColorObject=primaryColor?color_default()(primaryColor):color_default()("#0538AF");return react.createElement(Menu,{customCSS:customCSS||"","data-testid":"connect-wallet-list"},availableWallets?availableWallets.map((availableWallet=>isMobile&&!mobileWallets.includes(availableWallet.toLowerCase())?react.createElement(DesktopMenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet},react.createElement(MenuItemIcon,{src:(0,core.ow)(availableWallet)}),(0,core.kC)(availableWallet),react.createElement("span",null,"Desktop Only")):react.createElement(MenuItem,{primaryColor:themeColorObject.hex(),primaryColorLight:themeColorObject.mix(color_default()("white"),.9).hex(),borderRadius:borderRadius||0,gap:gap||0,key:availableWallet,onClick:()=>(async walletName=>{isMobile||connectWallet(walletName),mobileWallets.includes(walletName.toLowerCase())&&"flint"===walletName.toLowerCase()&&((0,core.Ww)("flint")?connectWallet(walletName):window.location.href=`https://flint-wallet.app.link/browse?dappUrl=${encodeURIComponent(window.location.href)}`)})(availableWallet)},react.createElement(MenuItemIcon,{src:(0,core.ow)(availableWallet)}),(0,core.kC)(availableWallet)))):react.createElement("span",null,`Please install a wallet browser extension (${(0,core.Rf)(supportedWallets)} are supported)`))};var ConnectWalletList_ConnectWalletList=ConnectWalletList;try{ConnectWalletList.displayName="ConnectWalletList",ConnectWalletList.__docgenInfo={description:"",displayName:"ConnectWalletList",props:{supportedWallets:{defaultValue:{value:"['Flint', 'Nami', 'Eternl', 'Yoroi', 'NuFi', 'Lace']"},description:"",name:"supportedWallets",required:!1,type:{name:"string[]"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}},showUnavailableWallets:{defaultValue:{value:"UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE"},description:"",name:"showUnavailableWallets",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},alwaysVisibleWallets:{defaultValue:{value:"[]"},description:"",name:"alwaysVisibleWallets",required:!1,type:{name:"string[]"}},customCSS:{defaultValue:null,description:"",name:"customCSS",required:!1,type:{name:"string"}},limitNetwork:{defaultValue:null,description:"",name:"limitNetwork",required:!1,type:{name:"enum",value:[{value:'"mainnet"'},{value:'"testnet"'}]}},onConnect:{defaultValue:null,description:"",name:"onConnect",required:!1,type:{name:"((walletName: string) => void)"}},onConnectError:{defaultValue:null,description:"",name:"onConnectError",required:!1,type:{name:"((walletName: string, error: Error) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ConnectWalletList/ConnectWalletList.tsx#ConnectWalletList"]={docgenInfo:ConnectWalletList.__docgenInfo,name:"ConnectWalletList",path:"src/components/ConnectWalletList/ConnectWalletList.tsx#ConnectWalletList"})}catch(__react_docgen_typescript_loader_error){}var ConnectWalletList_stories={title:"Components/ConnectWalletList",component:ConnectWalletList_ConnectWalletList};const Template=args=>react.createElement(ConnectWalletList_ConnectWalletList,args),DefaultList=Template.bind({});DefaultList.args={};const CustomList=Template.bind({});CustomList.args={borderRadius:15,gap:8,primaryColor:"#96839f"},DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...DefaultList.parameters?.docs?.source}}},CustomList.parameters={...CustomList.parameters,docs:{...CustomList.parameters?.docs,source:{originalSource:"args => <ConnectWalletList {...args} />",...CustomList.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-ConnectWalletList-ConnectWalletList-stories.0db9299e.iframe.bundle.js.map