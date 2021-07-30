import React from 'react';

import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => (
  <StyledColumnBlockPosts>
    <SendPostBlock />
    <PostBlock />
  </StyledColumnBlockPosts>
);

export default PostsBlock;
