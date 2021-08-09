import React from 'react';

import { BlockWrapper, BlockRow } from '../../../reusableStyles';
import { useContextProfilePage } from '../context';

import {
  InfoBlockRowElement, InfoBlockHeading,
} from './styles';

const ProfileInfoBlock = () => {
  const { profileId, requestData } = useContextProfilePage();
  const {
    profession, education, birthDate, city,
  } = requestData.find(requestUser => requestUser.id === +profileId);
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
          {profession}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Образование:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {education}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Родился:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {birthDate}
        </InfoBlockRowElement>
      </BlockRow>
      <BlockRow>
        <InfoBlockRowElement>
          Город:
        </InfoBlockRowElement>
        <InfoBlockRowElement>
          {city}
        </InfoBlockRowElement>
      </BlockRow>
    </BlockWrapper>
  );
};

export default ProfileInfoBlock;
