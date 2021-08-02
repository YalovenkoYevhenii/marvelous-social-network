/* eslint-disable react/self-closing-comp */
import React from 'react';

import { Main, Container } from '../../../reusableStyles';
import useFetch from '../../../hooks/useFetch';

import HeadingBlock from './HeadingBlock';
import AdditionalBlock from './AdditionalBlock';
import PostsBlock from './PostsBlock';
import { ProfileHeaderImage, ProfileContentContainer } from './styles';

const ProfilePageContent = () => {
  const { requestData } = useFetch('http://localhost:3000/users?_page=2&_limit=2', 'GET');
  console.log(requestData);
  return (
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
};

export default ProfilePageContent;
