/* eslint-disable react/prop-types */
import React from 'react';

import {
  FriendBlockLink, FriendBlockAvatar, FriendBlockInfo, FriendBlockInfoName, FriendBlockWrapper,
} from 'reusableStyles';
import { PROFILE_PATH } from 'constants/routes';

const FriendBlock = ({
  firstName, lastName, userId, avatar,
}) => (
  <FriendBlockWrapper>
    <FriendBlockLink to={`${PROFILE_PATH}/${userId}`}>
      <FriendBlockAvatar src={avatar && `${process.env.REACT_APP_URL}/${avatar}`} alt="profile_photo" />
      <FriendBlockInfo>
        <FriendBlockInfoName>
          {`${firstName} ${lastName}`}
        </FriendBlockInfoName>
      </FriendBlockInfo>
    </FriendBlockLink>
  </FriendBlockWrapper>

);

export default FriendBlock;
