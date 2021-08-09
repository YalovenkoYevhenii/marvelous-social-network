/* eslint-disable react/prop-types */
import React from 'react';

import {
  FriendBlockLink, FriendBlockAvatar, FriendBlockInfo, FriendBlockInfoName, FriendBlockWrapper,
} from '../../reusableStyles';
import logo1 from '../../assets/img/avatar.jfif';
import logo2 from '../../assets/img/avatar_will-smith.jpg';
import logo3 from '../../assets/img/avatar_amber-heard.jpeg';
import logo4 from '../../assets/img/avatar_pit.jpg';
import logo5 from '../../assets/img/avatar_helen-bonem-carter.jpg';
import logo6 from '../../assets/img/avatar_jonny-depp.jfif';

const FriendBlock = ({
  firstName, lastName, url, id,
}) => {
  const photo = () => {
    if (+id === 1) return logo1;
    if (+id === 2) return logo2;
    if (+id === 3) return logo3;
    if (+id === 4) return logo4;
    if (+id === 5) return logo5;
    if (+id === 6) return logo6;
    return null;
  };
  return (
    <FriendBlockWrapper>
      <FriendBlockLink to={`${url}/${id}`}>
        <FriendBlockAvatar src={photo()} alt="profile_photo" />
        <FriendBlockInfo>
          <FriendBlockInfoName>
            {`${firstName} ${lastName}`}
          </FriendBlockInfoName>
        </FriendBlockInfo>
      </FriendBlockLink>
    </FriendBlockWrapper>

  );
};

export default FriendBlock;
