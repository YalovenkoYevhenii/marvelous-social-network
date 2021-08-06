import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Main, Container } from '../../../reusableStyles';
import FriendBlock from '../../../components/FriendBlock';
import { useContextFriendsPage } from '../context';

import { FriendsPageContentContainer, StyledSearchBar } from './styles';

const FriendsPageContent = () => {
  const { requestData, user } = useContextFriendsPage();
  const { url } = useRouteMatch();

  const userFriendsList = requestData.filter(item => (
    user?.friends?.find(userFriendId => item.id === userFriendId)
  ));
  return (
    <Main>
      <Container>
        <FriendsPageContentContainer>
          <StyledSearchBar placeholder="Искать друзей" />
        </FriendsPageContentContainer>
        <FriendsPageContentContainer>
          {userFriendsList.map(({ firstName, lastName, id }) => (
            <FriendBlock
              firstName={firstName}
              lastName={lastName}
              id={id}
              url={url}
              key={id}
            />
          ))}
        </FriendsPageContentContainer>
      </Container>
    </Main>
  );
};

export default FriendsPageContent;
