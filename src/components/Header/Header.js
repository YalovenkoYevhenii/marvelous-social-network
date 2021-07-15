/* eslint-disable global-require */
import React from 'react';
import { StyledHeader, HeaderContent } from './styled';

import NavBar from '../NavBar/NavBar';

const Header = () => {
  const probe = 'Logotype';
  return (
    <StyledHeader>
      <HeaderContent>
        <div>
          {probe}
        </div>
        <NavBar />
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
