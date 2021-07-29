import React from 'react';

import {
  InfoBlockWrapper, InfoBlockRow, InfoBlockRowElement, InfoBlockHeading,
} from './styles';

const ProfileInfoBlock = () => (
  <InfoBlockWrapper>
    <InfoBlockRow>
      <InfoBlockHeading>Информация</InfoBlockHeading>
    </InfoBlockRow>
    <InfoBlockRow>
      <InfoBlockRowElement>
        Должность:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        JavaScript Trainee
      </InfoBlockRowElement>
    </InfoBlockRow>
    <InfoBlockRow>
      <InfoBlockRowElement>
        Образование:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        ХНТУ
      </InfoBlockRowElement>
    </InfoBlockRow>
    <InfoBlockRow>
      <InfoBlockRowElement>
        Родился:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        27.10.1999
      </InfoBlockRowElement>
    </InfoBlockRow>
    <InfoBlockRow>
      <InfoBlockRowElement>
        Город:
      </InfoBlockRowElement>
      <InfoBlockRowElement>
        Херсон
      </InfoBlockRowElement>
    </InfoBlockRow>
  </InfoBlockWrapper>
);

export default ProfileInfoBlock;
