import React from 'react';

import { FRIENDS_PATH } from '../../../constants/routes';
import { BlockWrapper, BlockRow } from '../../../reusableStyles';

import {
  InfoBlockHeading, StyledAvatarGroup, StyledAvatar, CenteredStyledLink,
} from './styles';

const PreviewFriendsBlock = () => (
  <BlockWrapper>
    <BlockRow>
      <InfoBlockHeading>Друзья</InfoBlockHeading>
    </BlockRow>
    <StyledAvatarGroup>
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
      <StyledAvatar alt="name" />
    </StyledAvatarGroup>
    <BlockRow>
      <CenteredStyledLink to={FRIENDS_PATH}>
        Все друзья
      </CenteredStyledLink>
    </BlockRow>
  </BlockWrapper>
);

export default PreviewFriendsBlock;
