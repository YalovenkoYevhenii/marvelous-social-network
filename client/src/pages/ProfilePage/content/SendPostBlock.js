import React from 'react';

import { BlockWrapper, BlockRow, PostAvatar } from '../../../reusableStyles';

import { StyledTextField, SendPostHeading } from './styles';

const SendPostBlock = () => (
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
        fullWidth
        multiline
        rows={4}
      />
    </BlockRow>
  </BlockWrapper>
);

export default SendPostBlock;
