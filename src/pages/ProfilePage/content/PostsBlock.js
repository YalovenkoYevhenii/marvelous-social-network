import React from 'react';

import useRequest from '../../../hooks/useRequest';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => {
  const {} = useContextProfilePage();
  const { requestData, setOptions } = useRequest();

  return (
    <StyledColumnBlockPosts>
      <SendPostBlock />
      <PostBlock />
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
