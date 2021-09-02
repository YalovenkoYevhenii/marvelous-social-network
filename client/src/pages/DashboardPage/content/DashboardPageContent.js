import React, { useEffect } from 'react';

import { Main, Container } from 'reusableStyles';
import PostBlock from 'components/PostBlock';
import Preloader from 'components/Preloader';
import useRequest from 'hooks/useRequest';
import { useContextDashboardPage } from '../context';

import { DashboardContentContainer } from './styles';

export const DashboardPageContent = () => {
  const { getRequestOptions } = useContextDashboardPage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}` });
  }, []);

  return (
    <Main>
      <Container>
        <DashboardContentContainer>
          { requestError && <div>{requestError.message}</div> }
          { loading ? <Preloader /> : (
            requestData && requestData.content.map(({
              body, time, _id, userId,
            }) => (
              <PostBlock body={body} time={time} userId={userId} key={_id} />
            )).reverse()
          )}
        </DashboardContentContainer>
      </Container>
    </Main>
  );
};
