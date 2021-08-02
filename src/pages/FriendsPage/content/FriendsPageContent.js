import React from 'react';

import { Main, Container } from '../../../reusableStyles';
import FriendBlock from '../../../components/FriendBlock';

import { FriendsPageContentContainer, StyledSearchBar } from './styles';

const FriendsPageContent = () => (
  <Main>
    <Container>
      <FriendsPageContentContainer>
        <StyledSearchBar placeholder="Искать друзей" />
      </FriendsPageContentContainer>
      <FriendsPageContentContainer>
        <FriendBlock />
      </FriendsPageContentContainer>
    </Container>
  </Main>
);

export default FriendsPageContent;
