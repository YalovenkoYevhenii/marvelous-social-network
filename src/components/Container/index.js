import React from 'react';

import { StyledContainer } from './styled';

// TODO:remain this one or use component from reusible styled components

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

export default Container;
