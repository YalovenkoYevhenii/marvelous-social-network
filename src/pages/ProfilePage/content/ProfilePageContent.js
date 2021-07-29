/* eslint-disable react/self-closing-comp */
import React from 'react';

import { Main, Container } from '../../../reusableStyles';

import HeadingBlock from './HeadingBlock';
import AdditionalBlock from './AdditionalBlock';
/* import PostsBlock from './PostsBlock'; */
import { ProfileHeaderImage, ProfileInnerContainer } from './styles';

const ProfilePageContent = () => (
  <Main>
    <ProfileHeaderImage />
    <Container>
      <HeadingBlock />
      <ProfileInnerContainer>
        <AdditionalBlock />
      </ProfileInnerContainer>
    </Container>
  </Main>
);

export default ProfilePageContent;
