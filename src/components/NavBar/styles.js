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
  activeStyle: { transform: 'scale(1.25)' },
})`
  color: white;
  text-decoration: none;
  display: block;
  font-size: 1.3rem;
  transition: all .05s;
  
  &:hover {
    transform: scale(1.2);
  }
`;
