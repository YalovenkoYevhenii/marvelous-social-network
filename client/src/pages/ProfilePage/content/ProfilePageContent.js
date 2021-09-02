import React from 'react';

import { Main, Container } from 'reusableStyles';
import Preloader from 'components/Preloader';

import HeadingBlock from './HeadingBlock';
import AdditionalBlock from './AdditionalBlock';
import PostsBlock from './PostsBlock';
import { ProfileHeaderImage, ProfileContentContainer } from './styles';
import { useContextProfilePage } from '../context';

const ProfilePageContent = () => {
  const { requestData, requestError, loading } = useContextProfilePage();
  return (
    <Main>
      {requestError && <div>Something went wrong. Please Try Again</div>}
      {loading ? <Preloader /> : requestData && (
        <>
          <ProfileHeaderImage />
          <Container>
            <HeadingBlock />
            <ProfileContentContainer>
              <AdditionalBlock />
              <PostsBlock />
            </ProfileContentContainer>
          </Container>
        </>
      )}
    </Main>
  );
};

export default ProfilePageContent;
