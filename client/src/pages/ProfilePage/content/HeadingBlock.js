import React from 'react';

import { useContextProfilePage } from '../context';

import {
  StyledProfileHeadingBlock, ProfileHeadingButtons, StyledImage,
  StyledButton, ProfileHeadingName, ProfileHeadingUser,
} from './styles';

const HeadingBlock = () => {
  const {
    user: { userId },
    profileId,
    requestData: { firstName, lastName, avatar },
  } = useContextProfilePage();

  return (
    <StyledProfileHeadingBlock>
      <ProfileHeadingUser>
        <StyledImage src={avatar ? `${process.env.REACT_APP_URL}/${avatar}` : `${process.env.REACT_APP_URL}/default.png`} />
        <ProfileHeadingName>
          {`${firstName} ${lastName}`}
        </ProfileHeadingName>
      </ProfileHeadingUser>
      <ProfileHeadingButtons>
        {userId === profileId ? (
          <StyledButton color="secondary" variant="contained"> Настройки </StyledButton>
        ) : (
          <>
            <StyledButton color="secondary" variant="contained">
              Отправить сообщение
            </StyledButton>
            <StyledButton color="secondary" variant="contained">
              Добавить в друзья
            </StyledButton>
          </>
        )}

      </ProfileHeadingButtons>
    </StyledProfileHeadingBlock>
  );
};

export default HeadingBlock;
