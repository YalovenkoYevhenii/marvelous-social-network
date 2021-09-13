import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';

import useRequest from 'hooks/useRequest';
import { BlockWrapper, BlockRow, PostAvatar } from 'reusableStyles';

import { StyledTextField, SendPostHeading, StyledSendButton } from './styles';

import { useContextProfilePage } from '../context';

const SendPostBlock = () => {
  const { postRequestOptions } = useContextProfilePage();
  const [postBody, setPostBody] = useState();
  const { setOptions } = useRequest();

  const handlerPostInput = (e) => {
    setPostBody(e.target.value);
  };

  const handlerSendPost = () => {
    setOptions({
      ...postRequestOptions,
      url: process.env.REACT_APP_URL_POSTS_ADD_POST,
      data: {
        body: postBody,
        time: new Date().toLocaleDateString(),
      },
    });
  };

  return (
    <BlockWrapper>
      <BlockRow>
        <SendPostHeading>Добавить пост</SendPostHeading>
      </BlockRow>
      <BlockRow>
        <PostAvatar />
        <StyledTextField
          label="Напиши что-то умное"
          variant="outlined"
          color="secondary"
          value={postBody}
          onChange={handlerPostInput}
          fullWidth
          multiline
          rows={4}
        />
      </BlockRow>
      <StyledSendButton
        variant="contained"
        color="secondary"
        startIcon={<SendIcon />}
        onClick={handlerSendPost}
      >
        Отправить

      </StyledSendButton>
    </BlockWrapper>
  );
};

export default SendPostBlock;
