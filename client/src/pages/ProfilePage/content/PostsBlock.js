import React, { useEffect } from 'react';

import useRequest from 'hooks/useRequest';
import Preloader from 'components/Preloader';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => {
  const { getRequestOptions, profileId } = useContextProfilePage();
  const {
    requestData, requestError, loading, setOptions,
  } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}/${profileId}` });
  }, []);
  console.log('posts', requestData);
  return (
    <StyledColumnBlockPosts>
      <SendPostBlock />
      {requestError && <div>{requestError}</div>}
      {loading ? <Preloader /> : requestData && requestData.content.map(({ body, time, _id }) => (
        <PostBlock body={body} time={time} key={_id} />
      )).reverse()}
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
