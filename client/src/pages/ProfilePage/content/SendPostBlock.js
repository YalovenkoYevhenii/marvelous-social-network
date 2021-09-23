/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';

import useRequest from 'hooks/useRequest';
import { BlockWrapper, BlockRow, PostAvatar } from 'reusableStyles';

import { StyledTextField, SendPostHeading, StyledSendButton } from './styles';

import { useContextProfilePage } from '../context';

const SendPostBlock = ({ setDoRepeat, avatar }) => {
  const { postRequestOptions } = useContextProfilePage();
  const [postBody, setPostBody] = useState();
  const { setOptions, requestData } = useRequest();

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
    setPostBody('');
  };
  const handlerSendPostOnEnter = (e) => {
    if (e.key === 'Enter') {
      handlerSendPost();
      e.target.blur();
    }
  };

  useEffect(() => {
    setDoRepeat(prev => prev + 1);
  }, [requestData]);

  return (
    <BlockWrapper>
      <BlockRow>
        <SendPostHeading>Добавить пост</SendPostHeading>
      </BlockRow>
      <BlockRow>
        <PostAvatar src={avatar ? `${process.env.REACT_APP_URL}/${avatar}` : `${process.env.REACT_APP_URL}/default.png`} />
        <StyledTextField
          label="Напиши что-то умное"
          variant="outlined"
          color="secondary"
          value={postBody}
          onChange={handlerPostInput}
          onKeyPress={handlerSendPostOnEnter}
          fullWidth
          multiline
          rows={4}
        />
      </BlockRow>
      <StyledSendButton
        variant="contained"
        color="secondary"
        endIcon={<SendIcon />}
        onClick={handlerSendPost}
      >
        Отправить

      </StyledSendButton>
    </BlockWrapper>
  );
};

export default SendPostBlock;
