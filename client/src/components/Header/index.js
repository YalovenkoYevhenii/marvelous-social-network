import React from 'react';

import logo from '../../assets/icons/logo.svg';
import { StyledLink } from '../../reusableStyles';
import { ROOT_PATH } from '../../constants/routes';
import NavBar from '../NavBar';

import { StyledHeader, HeaderContent, Logo } from './styles';

const Header = () => (
  <StyledHeader>
    <HeaderContent>
      <StyledLink to={ROOT_PATH}>
        <Logo src={logo} alt="logotype" />
      </StyledLink>
      <NavBar />
    </HeaderContent>
  </StyledHeader>
);

export default Header;
