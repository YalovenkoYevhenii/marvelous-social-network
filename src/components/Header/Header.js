import React from 'react';
import { StyledHeader } from './styled';

import NavBar from '../NavBar/NavBar';

const Header = () => {
  const probe = 'Logotype';
  return (
    <StyledHeader>
      <div>
        {probe}
      </div>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
