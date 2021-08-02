import React from 'react';

import {
  FriendBlockLink, FriendBlockAvatar, FriendBlockInfo, FriendBlockInfoName, FriendBlockWrapper,
} from '../../reusableStyles';

const FriendBlock = () => (
  <FriendBlockWrapper>
    <FriendBlockLink>
      <FriendBlockAvatar />
      <FriendBlockInfo>
        <FriendBlockInfoName>
          Евгений Яловенко
        </FriendBlockInfoName>
      </FriendBlockInfo>
    </FriendBlockLink>
  </FriendBlockWrapper>

);

export default FriendBlock;
