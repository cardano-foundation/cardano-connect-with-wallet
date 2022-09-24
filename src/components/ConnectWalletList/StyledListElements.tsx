import styled from 'styled-components';
import {
  MenuItemStyle,
  CustomStyle,
  DesktopMenuItemStyle,
} from '../../global/types';

export const Menu = styled.div`
  font-family: sans-serif;
  min-width: 160px;
  max-width: 240px;
  width: fit-content;
  z-index: 1;
  ${(props: CustomStyle) => props.customCSS}
`;

export const MenuItem = styled.span`
  color: ${(props: MenuItemStyle) => props.primaryColor};
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  cursor: pointer;
  border-color: ${(props: MenuItemStyle) => props.primaryColor};
  border-style: solid;
  border-width: 1px;
  background-color: white;

  ${(props: MenuItemStyle) =>
    props.gap && props.gap > 0
      ? `margin-bottom: ${props.gap}px;`
      : `&:first-child {
          border-bottom: none;
        }
        
        &:last-child {
          border-top: none;
        }`}

  ${(props: MenuItemStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  ${(props: MenuItemStyle) =>
    props.borderRadius &&
    (!props.gap || props.gap < 1) &&
    `border-radius: unset;
      &:first-child {
    border-top-left-radius: ${props.borderRadius}px;
    border-top-right-radius: ${props.borderRadius}px;
      }
      
      &:last-child {
    border-bottom-left-radius: ${props.borderRadius}px;
    border-bottom-right-radius: ${props.borderRadius}px;
      }
    `}  

  &:hover {
    background-color: ${(props: MenuItemStyle) => props.primaryColorLight};
  }
`;

export const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
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
  background-color: #e3e3e3;
  overflow: hidden;
  border-bottom: none;

  ${(props: MenuItemStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  ${(props: MenuItemStyle) =>
    props.gap && props.gap > 0
      ? `margin-bottom: ${props.gap}px;
         border-bottom: 1px solid #333;`
      : `&:first-child {
          border-bottom: none;
        }
        
        &:last-child {
          border-bottom: 1px solid #333;
        }`}

  ${(props: MenuItemStyle) =>
    props.borderRadius &&
    (!props.gap || props.gap < 1) &&
    `border-radius: unset;
      &:first-child {
    border-top-left-radius: ${props.borderRadius}px;
    border-top-right-radius: ${props.borderRadius}px;
      }
      
      &:last-child {
    border-bottom-left-radius: ${props.borderRadius}px;
    border-bottom-right-radius: ${props.borderRadius}px;
      }
    `}  

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
