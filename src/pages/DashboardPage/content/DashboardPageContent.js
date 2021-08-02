import React from 'react';

import { Main, Container } from '../../../reusableStyles';
import PostBlock from '../../../components/PostBlock';

import { DashboardContentContainer } from './styles';

export const DashboardPageContent = () => (
  <Main>
    <Container>
      <DashboardContentContainer>
        <PostBlock />
      </DashboardContentContainer>
    </Container>
  </Main>
);
