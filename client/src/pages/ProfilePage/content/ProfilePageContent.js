import React from 'react';

import { Main, Container } from 'reusableStyles';
import Preloader from 'components/Preloader';

import HeadingBlock from './HeadingBlock';
import AdditionalBlock from './AdditionalBlock';
import PostsBlock from './PostsBlock';
import { ProfileHeaderImage, ProfileContentContainer } from './styles';
import { useContextProfilePage } from '../context';

const ProfilePageContent = () => {
  const { requestData, loading } = useContextProfilePage();
  return (
    <Main>
      {loading ? <Preloader /> : requestData && (
        <>
          <ProfileHeaderImage />
          <Container>
            <HeadingBlock />
            <ProfileContentContainer>
              <AdditionalBlock />
              <PostsBlock avatar={requestData.avatar} />
            </ProfileContentContainer>
          </Container>
        </>
      )}
    </Main>
  );
};

export default ProfilePageContent;
