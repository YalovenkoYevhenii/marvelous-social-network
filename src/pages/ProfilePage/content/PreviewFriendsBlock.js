import React from 'react';

import {
  InfoBlockWrapper, InfoBlockRow, InfoBlockHeading,
  StyledAvatarGroup, StyledAvatar, CenteredStyledLink,
} from './styles';

const PreviewFriendsBlock = () => (
  <InfoBlockWrapper>
    <InfoBlockRow>
      <InfoBlockHeading>Друзья</InfoBlockHeading>
    </InfoBlockRow>
    <StyledAvatarGroup>
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
    </StyledAvatarGroup>
    <InfoBlockRow>
      <CenteredStyledLink>
        Все друзья
      </CenteredStyledLink>
    </InfoBlockRow>
  </InfoBlockWrapper>
);

export default PreviewFriendsBlock;
