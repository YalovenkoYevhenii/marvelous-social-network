import React, { useEffect } from 'react';

import useRequest from '../../../hooks/useRequest';
import Preloader from '../../../components/Preloader';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => {
  const { getRequestOptions, profileId } = useContextProfilePage();
  const { requestData, loading, setOptions } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `/users/${profileId}/posts` });
  }, []);
  console.log(requestData);
  console.log({ ...getRequestOptions, url: `/users/${profileId}/posts` });
  console.log('looook', requestData?.reverse());

  return (
    <StyledColumnBlockPosts>
      <SendPostBlock />
      {loading ? <Preloader /> : (
        requestData?.reverse().map(({ userId, body, time }) => (
          <PostBlock userId={userId} body={body} time={time} />
        ))
      )}
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
