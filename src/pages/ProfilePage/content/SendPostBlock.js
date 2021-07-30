import React from 'react';

import {
  InfoBlockWrapper, InfoBlockRow, PostAvatar, StyledTextField, SendPostHeading,
} from './styles';

const SendPostBlock = () => (
  <InfoBlockWrapper>
    <InfoBlockRow>
      <SendPostHeading>Добавить пост</SendPostHeading>
    </InfoBlockRow>
    <InfoBlockRow>
      <PostAvatar />
      <StyledTextField
        label="Напиши что-то умное"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={4}
      />
    </InfoBlockRow>
  </InfoBlockWrapper>
);

export default SendPostBlock;
