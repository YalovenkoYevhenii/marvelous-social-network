import React from 'react';

import { StyledColumnBlock } from './styles';
import ProfileInfoBlock from './InfoBlock';
import PreviewFriendsBlock from './PreviewFriendsBlock';

const AdditionalBlock = () => (
  <StyledColumnBlock>
    <ProfileInfoBlock />
    <PreviewFriendsBlock />
  </StyledColumnBlock>
);

export default AdditionalBlock;
