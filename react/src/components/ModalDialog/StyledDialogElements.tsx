import { CopyInputContainerProps, CustomStyle } from 'src/types';
import styled, { keyframes } from 'styled-components';

export const Modal = styled('div').withConfig({
  shouldForwardProp: (prop) => !['customCSS'].includes(prop),
})<CustomStyle>`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  ${(props) => props.customCSS}
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #aeaeae;
  border-radius: 9px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyInputContainer = styled('div').withConfig({
  shouldForwardProp: (prop) => !['primaryColor'].includes(prop),
})<CopyInputContainerProps>`
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
    background-color: ${(props) => props.primaryColor};
    border-radius: 3px;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`;

export const Toast = styled.div`
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
`;
