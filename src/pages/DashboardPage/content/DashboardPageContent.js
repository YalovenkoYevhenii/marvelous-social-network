import React, { useEffect, useState } from 'react';

import { Main, Container } from '../../../reusableStyles';
import PostBlock from '../../../components/PostBlock';
import useRequest from '../../../hooks/useRequest';
import { useContextDashboardPage } from '../context';

import { DashboardContentContainer } from './styles';

export const DashboardPageContent = () => {
  const { getRequestOptions, user } = useContextDashboardPage();
  const { requestData, setOptions } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: process.env.REACT_APP_URL_POSTS });
  }, []);

  /*   const friendsPosts = requestData && requestData.filter(post => (
    user.friends.find(friendId => friendId === post.userId))); */

  const [friendsPosts, setFriendsPosts] = useState();
  useEffect(() => {
    if (requestData) {
      setFriendsPosts(requestData.filter(post => (
        user?.friends?.find(friendId => friendId === post.userId))));
    }
  }, [requestData]);

  return (
    <Main>
      <Container>
        <DashboardContentContainer>
          { friendsPosts ? friendsPosts.map(({ body, time, userId }) => (
            <PostBlock body={body} time={time} userId={userId} />
          )) : <div>loading...</div>}
        </DashboardContentContainer>
      </Container>
    </Main>
  );
};
