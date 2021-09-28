/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import FriendBlock from 'components/FriendBlock';
import { FriendsPageContentContainer, StyledIncomingFriendsRequestsHeading } from './styles';

const IncomingFriendsRequests = ({ requests }) => {
  const [amountOfRequests, setAmountOfRequests] = useState(0);

  if (requests.length === amountOfRequests) return null;

  return (
    <FriendsPageContentContainer>
      <StyledIncomingFriendsRequestsHeading>
        Входящие заявки в друзья:
      </StyledIncomingFriendsRequestsHeading>
      {requests.map(({
        firstName, lastName, _id, avatar,
      }) => (
        <FriendBlock
          firstName={firstName}
          lastName={lastName}
          userId={_id}
          avatar={avatar}
          key={_id}
          setAmountOfRequests={setAmountOfRequests}
          incomingRequest
        />
      )) }
    </FriendsPageContentContainer>
  );
};

export default IncomingFriendsRequests;
