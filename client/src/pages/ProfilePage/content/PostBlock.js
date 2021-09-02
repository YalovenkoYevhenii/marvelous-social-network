/* eslint-disable react/prop-types */
import React from 'react';

import {
  BlockWrapper, BlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from 'reusableStyles';

import { useContextProfilePage } from '../context';

const PostBlock = ({ body, time }) => {
  const { requestData, profileId } = useContextProfilePage();
  console.log(requestData);
  console.log(profileId);
  const firstName = 'somebody';
  const lastName = 'somebodys lastname';
  return (
    <BlockWrapper>
      <BlockRow>
        <PostBlockUserBlock>
          <PostAvatar />
          <PostUserName>
            {`${firstName} ${lastName}`}
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
