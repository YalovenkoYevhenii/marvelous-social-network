/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import useRequest from 'hooks/useRequest';
import Preloader from 'components/Preloader';
import { MessageBlock } from 'reusableStyles';

import { useContextProfilePage } from '../context';
import { StyledColumnBlockPosts } from './styles';
import PostBlock from './PostBlock';
import SendPostBlock from './SendPostBlock';

const PostsBlock = ({ avatar }) => {
  const { getRequestOptions, profileId, user } = useContextProfilePage();
  const {
    requestData, loading, setOptions,
  } = useRequest();
  const [doRepeat, setDoRepeat] = useState(1);

  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `${process.env.REACT_APP_URL_POSTS}/${profileId}` });
  }, [doRepeat]);
  return (
    <StyledColumnBlockPosts>
      {user.userId === profileId && <SendPostBlock setDoRepeat={setDoRepeat} avatar={avatar} />}
      {requestData?.content.map(({
        body, time, userId, _id,
      }) => (
        <PostBlock
          body={body}
          time={time}
          userData={userId}
          key={_id}
          postId={_id}
          setDoRepeat={setDoRepeat}
        />
      )).reverse()}
      {loading && <Preloader /> }
      {requestData?.content.length === 0 && <MessageBlock>У вас пока нет постов</MessageBlock>}
    </StyledColumnBlockPosts>
  );
};

export default PostsBlock;
