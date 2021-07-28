import React from 'react';

import { StyledHeader, HeaderContent, Logo } from './styles';
import logo from '../../assets/icons/logo.svg';
import { StyledLink } from '../../reusableStyles';

import NavBar from '../NavBar';

const Header = () => (
  <StyledHeader>
    <HeaderContent>
      <StyledLink>
        <Logo src={logo} alt="logotype" />
      </StyledLink>
      <NavBar />
    </HeaderContent>
  </StyledHeader>
);

export default Header;
