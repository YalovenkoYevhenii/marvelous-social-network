/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  FriendBlockLink, FriendBlockAvatar, FriendBlockInfo, FriendBlockInfoName, FriendBlockWrapper,
} from 'reusableStyles';
import { PROFILE_PATH } from 'constants/routes';

import ManageIncomingRequestsButtons from './ManageIncomingRequestsButtons';

const FriendBlock = ({
  firstName, lastName, userId, avatar, incomingRequest, setAmountOfRequests,
}) => {
  const [declined, setDeclined] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (declined) return null;
  if (accepted) return null;

  return (
    <FriendBlockWrapper>
      <FriendBlockLink to={`${PROFILE_PATH}/${userId}`}>
        <FriendBlockAvatar src={avatar ? `${process.env.REACT_APP_URL}/${avatar}` : `${process.env.REACT_APP_URL}/default.png`} alt="profile_photo" />
        <FriendBlockInfo>
          <FriendBlockInfoName>
            {`${firstName} ${lastName}`}
          </FriendBlockInfoName>
        </FriendBlockInfo>
        {incomingRequest && (
          <ManageIncomingRequestsButtons
            setDeclined={setDeclined}
            setAccepted={setAccepted}
            userId={userId}
            setAmountOfRequests={setAmountOfRequests}
          />
        )}
      </FriendBlockLink>
    </FriendBlockWrapper>
  );
};

export default FriendBlock;
