import styled from 'styled-components';
import { MenuItemStyle, ButtonStyle, DesktopMenuItemStyle } from '../../types';

export const Menu = styled.div`
  display: none;
  position: absolute;
  margin-top: 8px;
  font-family: sans-serif;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`;

export const MenuItem = styled('span').withConfig({
  shouldForwardProp: (prop) =>
    !['primaryColor', 'primaryColorLight', 'borderRadius'].includes(prop),
})<MenuItemStyle>`
  color: ${(props) => props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-color: ${(props) => props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${(props) => props.primaryColorLight};
  }

  &:first-child {
    border-top-left-radius: ${(props) => `${props.borderRadius}px;`}
    border-top-right-radius: ${(props) => `${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${(props) => `${props.borderRadius}px;`}
    border-bottom-right-radius: ${(props) => `${props.borderRadius}px;`}
    border-bottom: 1px solid ${(props) => props.primaryColor};
  }
`;

export const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) =>
    !['primaryColor', 'customCSS', 'borderRadius'].includes(prop),
})<ButtonStyle>`
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
  border: 1px solid ${(props) => props.primaryColor};
  color: ${(props) => props.primaryColor};
  background-color: white;

  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  &:disabled {
    border: 1px solid #333;
    color: #333;
    backgroundcolor: #eee;
  }
`;

export const Dropdown = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['primaryColor', 'customCSS', 'borderRadius'].includes(prop),
})<ButtonStyle>`
  min-width: 180px;
  max-width: 240px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  padding-top: 8px;

  ${(props) => props.customCSS}

  &:hover ${Menu} {
    display: block;
  }

  &:hover ${Button} {
    background-color: ${(props) => props.primaryColor};
    color: white;
  }
`;

export const DesktopMenuItem = styled.span<DesktopMenuItemStyle>`
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
    border-top-left-radius: ${(props) => `${props.borderRadius}px;`}
    border-top-right-radius: ${(props) => `${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${(props) => `${props.borderRadius}px;`}
    border-bottom-right-radius: ${(props) => `${props.borderRadius}px;`}
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
`;
