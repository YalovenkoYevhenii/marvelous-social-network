import React from 'react';

import { Main, Container } from '../../../reusableStyles';

import HeadingBlock from './HeadingBlock';
import AdditionalBlock from './AdditionalBlock';
import PostsBlock from './PostsBlock';
import { ProfileHeaderImage, ProfileContentContainer } from './styles';

const ProfilePageContent = () => (
  <Main>
    <ProfileHeaderImage />
    <Container>
      <HeadingBlock />
      <ProfileContentContainer>
        <AdditionalBlock />
        <PostsBlock />
      </ProfileContentContainer>
    </Container>
  </Main>
);

export default ProfilePageContent;
