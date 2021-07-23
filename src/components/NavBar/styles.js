/* eslint-disable no-undef */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li`
  padding: 1rem;
`;

export const NavLinkStyled = styled(NavLink).attrs({
  activeStyle: { color: 'red' },
})`
  color: white;
  text-decoration: none;
  display: block;
  font-size: 1.3rem;
  
  &:hover {
    color: orange;
  }
`;
