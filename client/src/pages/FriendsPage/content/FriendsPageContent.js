import React, { useEffect } from 'react';

import { Main, Container } from 'reusableStyles';
import FriendBlock from 'components/FriendBlock';
import useRequest from 'hooks/useRequest';
import Preloader from 'components/Preloader';

import { useContextFriendsPage } from '../context';
import { FriendsPageContentContainer, StyledSearchBar } from './styles';

const FriendsPageContent = () => {
  const { getRequestOptions } = useContextFriendsPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=1&limit=4` });
  }, []);

  return (
    <Main>
      <Container>
        <FriendsPageContentContainer>
          <StyledSearchBar placeholder="Искать друзей" />
        </FriendsPageContentContainer>
        <FriendsPageContentContainer>
          {requestError && requestError.message}
          {loading ? <Preloader /> : requestData && requestData.content.map(({
            firstName, lastName, _id, avatar,
          }) => (
            <FriendBlock
              firstName={firstName}
              lastName={lastName}
              userId={_id}
              avatar={avatar}
              key={_id}
            />
          ))}
        </FriendsPageContentContainer>
      </Container>
    </Main>
  );
};

export default FriendsPageContent;
