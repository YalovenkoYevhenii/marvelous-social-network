import React from 'react';

import { SETTINGS_PATH } from 'constants/routes';
import useRedirectTo from 'hooks/useRedirectTo';

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
  const setPath = useRedirectTo();

  const handlerRedirect = () => {
    setPath(SETTINGS_PATH);
  };

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
          <StyledButton
            color="secondary"
            variant="contained"
            onClick={handlerRedirect}
          >
            Настройки

          </StyledButton>
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
