import React, { useEffect } from 'react';

import { Main, Container, MessageBlock } from 'reusableStyles';
import PostBlock from 'components/PostBlock';
import Preloader from 'components/Preloader';
import Toast from 'components/Toast';
import useRequest from 'hooks/useRequest';
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

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}` });
  }, []);
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
          { loading ? <Preloader /> : (
            requestData?.content.map(({
              body, time, _id, userId,
            }) => (
              <PostBlock body={body} time={time} userId={userId} key={_id} />
            )).reverse()
          )}
          {requestData?.content.length === 0 && (
          <MessageBlock>
            Вы пока не подписаны ни на чьи публикации
          </MessageBlock>
          )}
        </DashboardContentContainer>
      </Container>
      <Toast isOpen={isOpen} setIsOpen={setIsOpen} message={message} type={type} />
    </Main>
  );
};
