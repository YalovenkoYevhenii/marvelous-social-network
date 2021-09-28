/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import useRedirectTo from 'hooks/useRedirectTo';
import useRequest from 'hooks/useRequest';

import { SETTINGS_PATH } from 'constants/routes';
import { useContextProfilePage } from '../context/index';

import { ProfileHeadingButtons, StyledButton } from './styles';

const ProfileHeadingButtonsGroup = ({
  userId, profileId, friends,
}) => {
  const { patchRequestOptions } = useContextProfilePage();
  const setPath = useRedirectTo();
  const { setOptions } = useRequest();
  const [color, setColor] = useState('secondary');
  const [buttonText, setButtonText] = useState('Добавить в друзья');

  const isFriend = friends.find(id => id === profileId);

  useEffect(() => {
    if (isFriend) {
      setButtonText('Уже в друзьях');
      setColor('white');
    }
  }, []);

  const handlerFriendStatus = () => {
    if (buttonText === 'Уже в друзьях') {
      setOptions({
        ...patchRequestOptions,
        url: process.env.REACT_APP_URL_FRIENDS_REMOVE_FRIEND,
        data: { friendId: profileId },
      });

      setButtonText('Добавить в друзья');
      setColor('secondary');
    }

    if (buttonText === 'Добавить в друзья') {
      setOptions({
        ...patchRequestOptions,
        url: process.env.REACT_APP_URL_FRIENDS_ADD_FRIEND,
        data: { friendId: profileId },
      });

      setButtonText('Уже в друзьях');
      setColor('white');
    }
  };

  const handlerRedirect = () => {
    setPath(SETTINGS_PATH);
  };

  return (
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
          <StyledButton
            color={color}
            variant="contained"
            onClick={handlerFriendStatus}
          >
            {buttonText}
          </StyledButton>
        </>
      )}

    </ProfileHeadingButtons>
  );
};

export default ProfileHeadingButtonsGroup;
