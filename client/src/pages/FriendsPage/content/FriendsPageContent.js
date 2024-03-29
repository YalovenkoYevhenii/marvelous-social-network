import React, { useEffect, useState, useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Main, Container, MessageBlock } from 'reusableStyles';
import FriendBlock from 'components/FriendBlock';
import Preloader from 'components/Preloader';

import useRequest from 'hooks/useRequest';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { useContextFriendsPage } from '../context';
import { FriendsPageContentContainer, StyledSearchBar, StyledButton } from './styles';
/* import IncomingFriendsRequests from './IncomingFriendsRequests'; */

const FriendsPageContent = () => {
  const { getRequestOptions /* user */ } = useContextFriendsPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();
  const {
    targetRef, isIntersecting, isRanOut, setIsRanOut,
  } = useIntersectionObserver();
  const [usersData, setUsersData] = useState(null);
  const [searchType, setSearchType] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isSearchCanceled, setIsSearchCanceled] = useState(false);

  useEffect(() => {
    if (requestData) {
      setUsersData((prev) => {
        if (!prev) return requestData.content;
        return [...prev, ...requestData.content];
      });

      setIsRanOut(requestData.isRanOut);
    }
  }, [requestData]);

  useEffect(() => {
    if (!isRanOut && isIntersecting) {
      if (searchType) {
        setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=${page}&limit=3&query=${query}` });
      }

      if (!searchType) {
        setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_USERS}/?page=${page}&limit=3&query=${query}` });
      }
      setPage(prev => prev + 1);
    }
  }, [isIntersecting, searchType, isSearchCanceled]);

  const handlerChangeSearchType = useCallback(value => () => {
    setSearchType(value);
    setUsersData(null);
    setIsRanOut(false);
    setPage(1);
  }, []);

  const handlerSearchBarRequest = (value) => {
    setQuery(value);
  };

  const handlerFireSearch = () => {
    setUsersData(null);
    setIsRanOut(true);

    if (searchType) {
      setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_FRIENDS}/?page=1&limit=3&query=${query}` });
    }
    if (!searchType) {
      setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_USERS}/?page=1&limit=3&query=${query}` });
    }
    setPage(2);
  };

  const handlerCancelSearch = () => {
    setIsSearchCanceled(true);
    setUsersData(null);
    setIsRanOut(false);
    setPage(1);
    setQuery('');
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
            onCancelSearch={handlerCancelSearch}
          />
        </FriendsPageContentContainer>
        {/*         {user.incomingFriendsRequests.length !== 0 && (
          <IncomingFriendsRequests requests={user.incomingFriendsRequests} />
        )} */}
        <FriendsPageContentContainer ref={targetRef}>
          {requestError && requestError.message}
          {usersData?.map(({
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
          {loading && <Preloader />}
          {usersData?.length === 0 && (
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
