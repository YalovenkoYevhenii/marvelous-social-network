import React, { useEffect } from 'react';

import useRequest from '../../../hooks/useRequest';
import Preloader from '../../../components/Preloader';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => {
  const { getRequestOptions, profileId } = useContextProfilePage();
  const { requestData, setOptions } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `/users/${profileId}/posts` });
  }, []);

  return (
    <StyledColumnBlockPosts>
      <SendPostBlock />
      {requestData ? (
        requestData.map(({ body, time }) => (
          <PostBlock body={body} time={time} />
        )).reverse()
      ) : <Preloader />}
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
