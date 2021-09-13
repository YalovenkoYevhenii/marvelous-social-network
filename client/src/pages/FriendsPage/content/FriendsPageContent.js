import React, { useEffect, useState, useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Main, Container, MessageBlock } from 'reusableStyles';
import FriendBlock from 'components/FriendBlock';
import useRequest from 'hooks/useRequest';
import Preloader from 'components/Preloader';

import { useContextFriendsPage } from '../context';
import { FriendsPageContentContainer, StyledSearchBar, StyledButton } from './styles';

const FriendsPageContent = () => {
  const { getRequestOptions } = useContextFriendsPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();
  const [searchType, setSearchType] = useState(true);
  const [query, setQuery] = useState(null);
  const [page] = useState(1);

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=${page}&limit=4&query=${query}` });
  }, []);

  const handlerChangeSearchType = useCallback(value => () => {
    setSearchType(value);
  }, []);

  const handlerSearchBarRequest = (value) => {
    setQuery(value);
  };

  return (
    <Main>
      <Container>
        <FriendsPageContentContainer>
          <ButtonGroup variant="contained">
            <StyledButton
              color={searchType ? 'secondary' : 'white'}
              onClick={handlerChangeSearchType(true)}
            >
              Друзья

            </StyledButton>
            <StyledButton
              color={searchType ? 'white' : 'secondary'}
              onClick={handlerChangeSearchType(false)}
            >
              Все пользователи

            </StyledButton>
          </ButtonGroup>
          <StyledSearchBar onChange={handlerSearchBarRequest} placeholder={searchType ? 'Искать друзей' : 'Искать пользователей'} />
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
          {requestData?.content.length === 0 && (
          <MessageBlock>
            Пользователей не найдено
          </MessageBlock>
          )}
        </FriendsPageContentContainer>
      </Container>
    </Main>
  );
};

export default FriendsPageContent;
