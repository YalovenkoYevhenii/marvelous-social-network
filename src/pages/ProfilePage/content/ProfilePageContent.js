import React from 'react';

import { Main, Container } from '../../../reusableStyles';

import AvatarBlock from './AvatarBlock';
import InfoBlock from './InfoBlock';
import PostsBlock from './PostsBlock';
import { ProfileHeading } from './styles';

const ProfilePageContent = () => (
  <Main>
    <Container>
      <ProfileHeading>
        <AvatarBlock />
        <InfoBlock />
      </ProfileHeading>
      <PostsBlock />
    </Container>
  </Main>
);

export default ProfilePageContent;
