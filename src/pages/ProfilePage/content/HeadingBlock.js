import React from 'react';

import photo from '../../../assets/img/avatar.jfif';
import { useContextApp } from '../../../App/context';

import {
  StyledProfileHeadingBlock, ProfileHeadingButtons, StyledImage,
  StyledButton, ProfileHeadingName, ProfileHeadingUser,
} from './styles';

const HeadingBlock = () => {
  const { user: { firstName, lastName } } = useContextApp();
  return (
    <StyledProfileHeadingBlock>
      <ProfileHeadingUser>
        <StyledImage src={photo} />
        <ProfileHeadingName>
          {`${firstName} ${lastName}`}
        </ProfileHeadingName>
      </ProfileHeadingUser>
      <ProfileHeadingButtons>
        <StyledButton color="secondary" variant="contained">
          Отправить сообщение
        </StyledButton>
        <StyledButton color="secondary" variant="contained">
          Добавить в друзья
        </StyledButton>
      </ProfileHeadingButtons>
    </StyledProfileHeadingBlock>
  );
};

export default HeadingBlock;
