import React from 'react';

import { BlockWrapper, BlockRow, AbsenceMessage } from 'reusableStyles';
import { useContextProfilePage } from '../context';

import {
  InfoBlockRowElement, InfoBlockHeading,
} from './styles';

const ProfileInfoBlock = () => {
  const {
    requestData: {
      profession, education, birthday, city,
    },
  } = useContextProfilePage();
  return (
    <BlockWrapper>
      <BlockRow>
        <InfoBlockHeading>Информация</InfoBlockHeading>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Профессия:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {profession || <AbsenceMessage>не указана</AbsenceMessage>}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Образование:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {education || <AbsenceMessage>не указано</AbsenceMessage>}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Родился:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {birthday || <AbsenceMessage>не указана</AbsenceMessage>}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Город:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {city || <AbsenceMessage>не указан</AbsenceMessage>}
        </InfoBlockRowElement>
      </BlockRow>
    </BlockWrapper>
  );
};

export default ProfileInfoBlock;
