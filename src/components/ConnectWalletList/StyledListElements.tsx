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
  opacity: 0.8;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  cursor: pointer;
  border-color: ${(props: MenuItemStyle) => props.primaryColor};
  border-style: solid;
  border-width: 1px;

  ${(props: MenuItemStyle) =>
    props.gap
      ? `margin-bottom: ${props.gap}px;`
      : `&:first-child {
        border-bottom: none;
    }`}

  ${(props: MenuItemStyle) =>
    props.borderRadius && `border-radius: ${props.borderRadius}px;`}

  &:hover {
    opacity: 1;
    background-color: ${(props: MenuItemStyle) => props.primaryColorLight};
  }
`;

export const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
