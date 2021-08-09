import React from 'react';

import { Main, Container } from '../../../reusableStyles';
import FriendBlock from '../../../components/FriendBlock';
import { useContextFriendsPage } from '../context';
import { PROFILE_PATH } from '../../../constants/routes';

import { FriendsPageContentContainer, StyledSearchBar } from './styles';

const FriendsPageContent = () => {
  const { requestData, user } = useContextFriendsPage();
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
              url={PROFILE_PATH}
              key={id}
            />
          ))}
        </FriendsPageContentContainer>
      </Container>
    </Main>
  );
};

export default FriendsPageContent;
