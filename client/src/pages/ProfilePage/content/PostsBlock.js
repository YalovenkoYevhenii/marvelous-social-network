import React, { useEffect } from 'react';

import useRequest from 'hooks/useRequest';
import Preloader from 'components/Preloader';
import { MessageBlock } from 'reusableStyles';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = () => {
  const { getRequestOptions, profileId } = useContextProfilePage();
  const {
    requestData, loading, setOptions,
  } = useRequest();

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}/${profileId}` });
  }, []);
  return (
    <StyledColumnBlockPosts>
      <SendPostBlock />
      {loading ? <Preloader /> : requestData?.content.map(({ body, time, _id }) => (
        <PostBlock body={body} time={time} key={_id} />
      )).reverse()}
      {requestData?.content.length === 0 && <MessageBlock>У вас пока нет постов</MessageBlock>}
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
