import React from 'react';

import { BlockWrapper, BlockRow } from '../../../reusableStyles';

import {
  InfoBlockRowElement, InfoBlockHeading,
} from './styles';

const ProfileInfoBlock = () => (
  <BlockWrapper>
    <BlockRow>
      <InfoBlockHeading>Информация</InfoBlockHeading>
    </BlockRow>
    <BlockRow>
      <InfoBlockRowElement>
        Профессия:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        JavaScript Trainee
      </InfoBlockRowElement>
    </BlockRow>
    <BlockRow>
      <InfoBlockRowElement>
        Образование:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        ХНТУ
      </InfoBlockRowElement>
    </BlockRow>
    <BlockRow>
      <InfoBlockRowElement>
        Родился:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        27.10.1999
      </InfoBlockRowElement>
    </BlockRow>
    <BlockRow>
      <InfoBlockRowElement>
        Город:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        Херсон
      </InfoBlockRowElement>
    </BlockRow>
  </BlockWrapper>
);

export default ProfileInfoBlock;
