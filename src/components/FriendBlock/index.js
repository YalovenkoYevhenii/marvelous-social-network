/* eslint-disable react/prop-types */
import React from 'react';

import {
  FriendBlockLink, FriendBlockAvatar, FriendBlockInfo, FriendBlockInfoName, FriendBlockWrapper,
} from '../../reusableStyles';

const FriendBlock = ({
  firstName, lastName, id, url,
}) => (
  <FriendBlockWrapper>
    <FriendBlockLink to={`${url}/${id}`}>
      <FriendBlockAvatar />
      <FriendBlockInfo>
        <FriendBlockInfoName>
          {`${firstName} ${lastName}`}
        </FriendBlockInfoName>
      </FriendBlockInfo>
    </FriendBlockLink>
  </FriendBlockWrapper>

);

export default FriendBlock;
