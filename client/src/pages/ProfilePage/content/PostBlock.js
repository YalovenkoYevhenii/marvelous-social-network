/* eslint-disable react/prop-types */
import React from 'react';

import {
  BlockWrapper, BlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from 'reusableStyles';

const PostBlock = ({ body, time }) => {
  const firstName = 'somebody';
  const lastName = 'somebody\'s lastname';
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
