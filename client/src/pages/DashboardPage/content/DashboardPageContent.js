import React, { useEffect, useState } from 'react';

import useRequest from 'hooks/useRequest';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import { Main, Container, MessageBlock } from 'reusableStyles';
import PostBlock from 'components/PostBlock';
import Preloader from 'components/Preloader';
import Toast from 'components/Toast';

import { useContextDashboardPage } from '../context';
import { DashboardContentContainer } from './styles';

export const DashboardPageContent = () => {
  const {
    getRequestOptions,
    isOpen,
    type,
    message,
    setIsOpen,
    setType,
    setMessage,
  } = useContextDashboardPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();
  const {
    targetRef, isIntersecting, isRanOut, setIsRanOut,
  } = useIntersectionObserver();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (requestData) {
      setPosts((prev) => {
        if (prev) {
          return [...prev, ...requestData.content];
        }
        return requestData.content;
      });
      setIsRanOut(requestData.isRanOut);
    }
  }, [requestData]);

  useEffect(() => {
    if (!isRanOut && isIntersecting) {
      setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}/?page=${page}&limit=5` });
      setPage(prev => prev + 1);
    }
  }, [isIntersecting, isRanOut]);

  useEffect(() => {
    if (requestError) {
      setIsOpen(true);
      setType('error');
      setMessage(requestError);
    }
  }, [requestError]);

  return (
    <Main>
      <Container>
        <DashboardContentContainer>
          {posts.map(({
            body, time, _id, userId: { firstName, lastName, avatar },
          }) => (
            <PostBlock
              body={body}
              time={time}
              firstName={firstName}
              lastName={lastName}
              avatar={avatar}
              key={_id}
            />
          ))}

          { loading && <Preloader />}
          {requestData?.content.length === 0 && (
            <MessageBlock>
              Вы пока не подписаны ни на чьи публикации
            </MessageBlock>
          )}
          <div ref={targetRef} />
        </DashboardContentContainer>
      </Container>
      <Toast isOpen={isOpen} setIsOpen={setIsOpen} message={message} type={type} />
    </Main>
  );
};
