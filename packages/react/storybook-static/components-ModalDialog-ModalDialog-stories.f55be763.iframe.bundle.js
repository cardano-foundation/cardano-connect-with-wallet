"use strict";(self.webpackChunk_cardano_foundation_cardano_connect_with_wallet=self.webpackChunk_cardano_foundation_cardano_connect_with_wallet||[]).push([[415],{"./src/components/ModalDialog/ModalDialog.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultList:function(){return DefaultList}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_ModalDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ModalDialog/ModalDialog.tsx");__webpack_exports__.default={title:"Components/ModalDialog",component:_ModalDialog__WEBPACK_IMPORTED_MODULE_1__.A};const DefaultList=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalDialog__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});DefaultList.args={content:"Hallo Hallo",visible:!0},DefaultList.parameters={...DefaultList.parameters,docs:{...DefaultList.parameters?.docs,source:{originalSource:"args => <ModalDialog {...args} />",...DefaultList.parameters?.docs?.source}}}},"./src/components/ModalDialog/ModalDialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ModalDialog_ModalDialog}});var react=__webpack_require__("../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");const Modal=(0,styled_components_browser_esm.Ay)("div").withConfig({shouldForwardProp:prop=>!["customCSS"].includes(prop)})`
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
`;var dist=__webpack_require__("../node_modules/react-qrcode-logo/dist/index.js"),react_dialog_dist=__webpack_require__("../node_modules/@radix-ui/react-dialog/dist/index.mjs"),react_visually_hidden_dist=__webpack_require__("../node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");var ModalDialog_ModalDialog=props=>{const{visible:visible,content:content,handleClose:handleClose,qrStyle:qrStyle,eyeRadius:eyeRadius,icon:icon,subtitle:subtitle,primaryColor:primaryColor,customCSS:customCSS}=props,toastRef=(0,react.useRef)(null);return react.createElement(react_dialog_dist.bL,{open:visible,onOpenChange:open=>!open&&handleClose()},react.createElement(react_dialog_dist.ZL,null,react.createElement(react_dialog_dist.hJ,{asChild:!0},react.createElement(Modal,{customCSS:customCSS||""})),react.createElement(react_dialog_dist.UC,{asChild:!0},react.createElement(ModalContent,{"data-testid":"modal-content"},react.createElement(react_visually_hidden_dist.s6,null,react.createElement(react_dialog_dist.hE,null,"P2P Wallet Connection")),react.createElement(dist.QRCode,{removeQrCodeBehindLogo:!0,logoImage:icon||void 0,ecLevel:"H",eyeRadius:eyeRadius||0,qrStyle:qrStyle||"squares",value:content}),react.createElement(CopyInputContainer,{primaryColor:primaryColor||"#0538AF"},react.createElement("input",{type:"text",value:content,style:{textOverflow:"ellipsis"},readOnly:!0}),react.createElement("button",{onClick:event=>{event.stopPropagation(),navigator.clipboard.writeText(content),toastRef.current?.classList.add("show"),setTimeout((function(){toastRef.current?.classList.remove("show")}),3e3)}},"Copy")),react.createElement(react_dialog_dist.VY,{asChild:!0},react.createElement("p",{style:{maxWidth:300}},subtitle||"You can utilize a CIP45-compliant mobile wallet, such as Eternl, on your smartphone to establish a connection as a peer-to-peer wallet.")),react.createElement(Toast,{ref:toastRef},"P2P identifier copied to clipboard!")))))}}}]);
//# sourceMappingURL=components-ModalDialog-ModalDialog-stories.f55be763.iframe.bundle.js.map