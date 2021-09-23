import React, { useEffect, useState, useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Main, Container, MessageBlock } from 'reusableStyles';
import FriendBlock from 'components/FriendBlock';
import Preloader from 'components/Preloader';

import useRequest from 'hooks/useRequest';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { useContextFriendsPage } from '../context';
import { FriendsPageContentContainer, StyledSearchBar, StyledButton } from './styles';

const FriendsPageContent = () => {
  const { getRequestOptions } = useContextFriendsPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();
  const {
    targetRef, isIntersecting, isRanOut, setIsRanOut,
  } = useIntersectionObserver();
  const [searchType, setSearchType] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (requestData?.isRanOut) {
      setIsRanOut(true);
    }
  }, [requestData]);

  useEffect(() => {
    if (searchType) {
      if (!isRanOut && isIntersecting) {
        setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=${page}&limit=4&query=${query}` });
        setPage(prev => prev + 1);
      }
    }

    if (!searchType) {
      if (!isRanOut && isIntersecting) {
        setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_USERS}/?page=${page}&limit=4&query=${query}` });
        setPage(prev => prev + 1);
      }
    }
  }, [isIntersecting, searchType]);

  const handlerChangeSearchType = useCallback(value => () => {
    setSearchType(value);
    setPage(1);
  }, []);

  const handlerSearchBarRequest = (value) => {
    setQuery(value);
  };

  const handlerFireSearch = () => {
    setPage(1);
    if (searchType) {
      setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=${page}&limit=4&query=${query}` });
      setPage(prev => prev + 1);
    }
    if (!searchType) {
      setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_USERS}/?page=${page}&limit=4&query=${query}` });
      setPage(prev => prev + 1);
    }
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
          <StyledSearchBar
            onChange={handlerSearchBarRequest}
            placeholder={searchType ? 'Искать друзей' : 'Искать пользователей'}
            onRequestSearch={handlerFireSearch}
          />
        </FriendsPageContentContainer>
        <FriendsPageContentContainer ref={targetRef}>
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
