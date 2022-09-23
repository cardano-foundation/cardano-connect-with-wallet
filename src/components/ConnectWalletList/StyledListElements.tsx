import styled from 'styled-components';
import { MenuItemStyle, CustomStyle } from '../../global/types';

export const Menu = styled.div`
  font-family: sans-serif;
  max-width: 180px;
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
