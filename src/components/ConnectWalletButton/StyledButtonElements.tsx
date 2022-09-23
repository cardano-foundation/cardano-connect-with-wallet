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
  width: 160px;
  z-index: 2;
`;

export const MenuItem = styled.span`
  color: ${(props: MenuItemStyle) => props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  opacity: 0.6;
  align-items: center;
  cursor: pointer;
  border-color: ${(props: MenuItemStyle) => props.primaryColor};
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: white;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${(props: MenuItemStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  &:hover {
    opacity: 1;
    background-color: ${(props: MenuItemStyle) => props.primaryColorLight};
  }

  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
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
  width: 100%;
  border: 1px solid ${(props: ButtonStyle) => props.primaryColor};
  border-radius: 16px;
  color: ${(props: ButtonStyle) => props.primaryColor};
  background-color: white;

  &:disabled {
    border: 1px solid #333;
    color: #333;
    backgroundcolor: #eee;
  }
`;

export const Dropdown = styled.div`
  width: 160px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;

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
  opacity: 0.6;
  align-items: center;
  cursor: pointer;
  border-color: #333;
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  background-color: #e3e3e3;
  overflow: hidden;

  ${(props: DesktopMenuItemStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  &:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom: 1px solid #333;
  }

  & > span {
    text-transform: uppercase;
    font-size: 0.5rem;
    position: absolute;
    right: 0;
    width: 100%;
    padding: 3px;
    background: black;
    color: #fff;
    text-align: center;
    transform: rotate(-35deg);
    translate: 25%;
  }

  & ${MenuItemIcon} {
    filter: brightness(0);
  }
`;
