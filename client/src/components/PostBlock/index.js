/* eslint-disable react/prop-types */
import React from 'react';

import { useContextDashboardPage } from 'pages/DashboardPage/context';

import {
  BlockWrapper, BlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from 'reusableStyles';

const PostBlock = ({ body, time, userId }) => {
  const { requestData } = useContextDashboardPage();
  const author = requestData?.find(({ id }) => id === userId);

  return (
    <BlockWrapper>
      <BlockRow>
        <PostBlockUserBlock>
          <PostAvatar />
          <PostUserName>
            {`${author?.firstName} ${author?.lastName}`}
          </PostUserName>
        </PostBlockUserBlock>
      </BlockRow>
      <BlockRow>
        <PostContent>
          {body}
        </PostContent>
      </BlockRow>
      <hr />
      <BlockRow>
        <PostDate>
          {time}
        </PostDate>
      </BlockRow>
    </BlockWrapper>
  );
};

export default PostBlock;
