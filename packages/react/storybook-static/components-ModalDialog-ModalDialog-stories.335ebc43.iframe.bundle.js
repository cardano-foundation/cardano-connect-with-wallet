"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[201],{"./src/components/ModalDialog/ModalDialog.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultList:function(){return DefaultList}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_ModalDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx");__webpack_exports__.default={title:"Components/ModalDialog",component:_ModalDialog__WEBPACK_IMPORTED_MODULE_1__.Z};const DefaultList=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalDialog__WEBPACK_IMPORTED_MODULE_1__.Z,args)).bind({});DefaultList.args={content:"Hallo Hallo",visible:!0},DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"args => <ModalDialog {...args} />",...DefaultList.parameters?.docs?.source}}}},"./src/components/ModalDialog/ModalDialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ModalDialog_ModalDialog}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Modal=(0,styled_components_browser_esm.ZP)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
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
`;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/ModalDialog/StyledDialogElements.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{ModalContent.displayName="ModalContent",ModalContent.__docgenInfo={description:"",displayName:"ModalContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#ModalContent"]={docgenInfo:ModalContent.__docgenInfo,name:"ModalContent",path:"src/components/ModalDialog/StyledDialogElements.tsx#ModalContent"})}catch(__react_docgen_typescript_loader_error){}try{CopyInputContainer.displayName="CopyInputContainer",CopyInputContainer.__docgenInfo={description:"",displayName:"CopyInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#CopyInputContainer"]={docgenInfo:CopyInputContainer.__docgenInfo,name:"CopyInputContainer",path:"src/components/ModalDialog/StyledDialogElements.tsx#CopyInputContainer"})}catch(__react_docgen_typescript_loader_error){}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/StyledDialogElements.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/ModalDialog/StyledDialogElements.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("../node_modules/react-qrcode-logo/dist/index.js");const ModalDialog=props=>{const{visible:visible,content:content,handleClose:handleClose,qrStyle:qrStyle,eyeRadius:eyeRadius,icon:icon,subtitle:subtitle,primaryColor:primaryColor,customCSS:customCSS}=props,toastRef=(0,react.useRef)(null);return react.createElement(Modal,{onClick:()=>{"function"==typeof handleClose&&handleClose()},customCSS:customCSS||"",style:{display:visible?"block":"none"}},react.createElement(ModalContent,{"data-testid":"modal-content"},react.createElement(dist.QRCode,{removeQrCodeBehindLogo:!0,logoImage:icon||void 0,ecLevel:"H",eyeRadius:eyeRadius||0,qrStyle:qrStyle||"squares",value:content}),react.createElement(CopyInputContainer,{primaryColor:primaryColor||"#0538AF"},react.createElement("input",{type:"text",value:content,style:{textOverflow:"ellipsis"},readOnly:!0}),react.createElement("button",{onClick:event=>{event.stopPropagation(),navigator.clipboard.writeText(content),toastRef.current?.classList.add("show"),setTimeout((function(){toastRef.current?.classList.remove("show")}),3e3)}},"Copy")),react.createElement("p",{style:{maxWidth:300}},subtitle||"You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet."),react.createElement(Toast,{ref:toastRef},"P2P identifier copied to clipboard!")))};var ModalDialog_ModalDialog=ModalDialog;try{ModalDialog.displayName="ModalDialog",ModalDialog.__docgenInfo={description:"",displayName:"ModalDialog",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},customCSS:{defaultValue:null,description:"",name:"customCSS",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},qrStyle:{defaultValue:null,description:"",name:"qrStyle",required:!1,type:{name:"enum",value:[{value:'"squares"'},{value:'"dots"'}]}},eyeRadius:{defaultValue:null,description:"",name:"eyeRadius",required:!1,type:{name:"number"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string | null | undefined"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDialog/ModalDialog.tsx#ModalDialog"]={docgenInfo:ModalDialog.__docgenInfo,name:"ModalDialog",path:"src/components/ModalDialog/ModalDialog.tsx#ModalDialog"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ModalDialog-ModalDialog-stories.335ebc43.iframe.bundle.js.map