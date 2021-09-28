import React from 'react';

import ProfileHeadingButtonsGroup from './ProfileHeadingButtonsGroup';
import { useContextProfilePage } from '../context';

import {
  StyledProfileHeadingBlock, StyledImage, ProfileHeadingName, ProfileHeadingUser,
} from './styles';

const HeadingBlock = () => {
  const {
    user: {
      userId, incomingFriendsRequests, outgoingFriendsRequests, friends,
    },
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
      <ProfileHeadingButtonsGroup
        userId={userId}
        profileId={profileId}
        incomingFriendsRequests={incomingFriendsRequests}
        outgoingFriendsRequests={outgoingFriendsRequests}
        friends={friends}
      />
    </StyledProfileHeadingBlock>
  );
};

export default HeadingBlock;
