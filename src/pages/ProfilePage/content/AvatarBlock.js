import { Button } from '@material-ui/core';
import React from 'react';

import { StyledAvatarBlock, StyledImage } from './styles';

const AvatarBlock = () => (
  <StyledAvatarBlock>
    <StyledImage />
    <Button>
      Отправить сообщение
    </Button>
    <Button>
      Добавить в друзья
    </Button>
  </StyledAvatarBlock>
);

export default AvatarBlock;
