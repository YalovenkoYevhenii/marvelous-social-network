/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  BlockWrapper, BlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from 'reusableStyles';

const PostBlock = ({
  body, time, userData: { firstName, lastName, avatar }, setDoRepeat,
}) => {
  const handlerDeletePost = () => {
    setDoRepeat(prev => prev + 1);
  };
  return (
    <BlockWrapper>
      <BlockRow>
        <PostBlockUserBlock>
          <PostAvatar src={avatar ? `${process.env.REACT_APP_URL}/${avatar}` : `${process.env.REACT_APP_URL}/default.png`} />
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
