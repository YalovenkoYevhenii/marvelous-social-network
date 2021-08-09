import React from 'react';

import { useContextProfilePage } from '../context';
import logo1 from '../../../assets/img/avatar.jfif';
import logo2 from '../../../assets/img/avatar_will-smith.jpg';
import logo3 from '../../../assets/img/avatar_amber-heard.jpeg';
import logo4 from '../../../assets/img/avatar_pit.jpg';
import logo5 from '../../../assets/img/avatar_helen-bonem-carter.jpg';
import logo6 from '../../../assets/img/avatar_jonny-depp.jfif';

import {
  StyledProfileHeadingBlock, ProfileHeadingButtons, StyledImage,
  StyledButton, ProfileHeadingName, ProfileHeadingUser,
} from './styles';

const HeadingBlock = () => {
  const { user: { id }, profileId, requestData } = useContextProfilePage();
  const { firstName, lastName } = requestData.find(requestUser => requestUser.id === +profileId);
  const photo = () => {
    if (+profileId === 1) return logo1;
    if (+profileId === 2) return logo2;
    if (+profileId === 3) return logo3;
    if (+profileId === 4) return logo4;
    if (+profileId === 5) return logo5;
    if (+profileId === 6) return logo6;
    return null;
  };
  return (
    <StyledProfileHeadingBlock>
      <ProfileHeadingUser>
        <StyledImage src={photo()} />
        <ProfileHeadingName>
          {`${firstName} ${lastName}`}
        </ProfileHeadingName>
      </ProfileHeadingUser>
      <ProfileHeadingButtons>
        {id === +profileId ? (
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
