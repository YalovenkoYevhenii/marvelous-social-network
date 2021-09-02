import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li`
  padding: 1rem 1.3rem;
`;

export const NavLinkStyled = styled(NavLink).attrs({
  activeStyle: { transform: 'scale(1.25)', textDecoration: 'underline' },
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

export const StyledButton = styled(Button)`
  color: white;
  font-size: 1.3rem;
  padding: 0;
  margin: 0;
  text-transform: lowercase;
  transition: all .05s;
  &:hover {
    transform: scale(1.2);
  }

`;
