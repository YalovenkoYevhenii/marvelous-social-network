import React from 'react';

import { StyledAdditionalBlock } from './styles';
import InfoBlock from './InfoBlock';
import PreviewFriendsBlock from './PreviewFriendsBlock';

const AdditionalBlock = () => (
  <StyledAdditionalBlock>
    <InfoBlock />
    <PreviewFriendsBlock />
  </StyledAdditionalBlock>
);

export default AdditionalBlock;
