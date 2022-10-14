import styled from 'styled-components';
import {
  MenuItemStyle,
  ButtonStyle,
  DesktopMenuItemStyle,
} from '../../global/types';

export const Menu = styled.div`
  display: none;
  position: absolute;
  margin-top: 8px;
  font-family: sans-serif;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`;

export const MenuItem = styled.span`
  color: ${(props: MenuItemStyle) => props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-color: ${(props: MenuItemStyle) => props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${(props: MenuItemStyle) => props.primaryColorLight};
  }

  &:first-child {
    border-top-left-radius: ${(props: MenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-top-right-radius: ${(props: MenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${(props: MenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-bottom-right-radius: ${(props: MenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-bottom: 1px solid ${(props: MenuItemStyle) => props.primaryColor};
  }
`;

export const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Button = styled.button`
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
  border: 1px solid ${(props: ButtonStyle) => props.primaryColor};
  color: ${(props: ButtonStyle) => props.primaryColor};
  background-color: white;

  ${(props: ButtonStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  &:disabled {
    border: 1px solid #333;
    color: #333;
    backgroundcolor: #eee;
  }
`;

export const Dropdown = styled.div`
  min-width: 160px;
  max-width: 240px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  padding-top: 8px;

  ${(props: ButtonStyle) => props.customCSS}

  &:hover ${Menu} {
    display: block;
  }

  &:hover ${Button} {
    background-color: ${(props: ButtonStyle) => props.primaryColor};
    color: white;
  }
`;

export const DesktopMenuItem = styled.span`
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
    border-top-left-radius: ${(props: DesktopMenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-top-right-radius: ${(props: DesktopMenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: ${(props: DesktopMenuItemStyle) =>
      `${props.borderRadius}px;`}
    border-bottom-right-radius: ${(props: DesktopMenuItemStyle) =>
      `${props.borderRadius}px;`}
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
