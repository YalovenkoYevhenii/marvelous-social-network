/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';

import { Main, Container } from '../../../reusableStyles';
import PostBlock from '../../../components/PostBlock';
import useRequest from '../../../hooks/useRequest';

import { DashboardContentContainer } from './styles';

const a = {
  method: 'get',
  url: '/users/1/posts',
}
const b = {
  method: 'get',
  url: '/users/2/posts',
}

export const DashboardPageContent = () => {
  const { requestData, requestError, setOptions } = useRequest();
  console.log(res);
  console.log(requestData, requestError);
  return (
    <Main>
      <Container>
        <DashboardContentContainer>
          <PostBlock />
        </DashboardContentContainer>
      </Container>
    </Main>
  );
};
