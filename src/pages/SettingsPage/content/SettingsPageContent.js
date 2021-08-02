import React from 'react';

import { Main, Container } from '../../../reusableStyles';

import {
  SettingsPageContentContainer, SettingPageHeading, SettingPageForm,
  SettingsBlockWrapper, StyledTextField,
} from './styles';

export const SettingsPageContent = () => {
  const probe = 'this is ';

  return (
    <Main>
      <Container>
        <SettingsPageContentContainer>
          <SettingsBlockWrapper>
            <SettingPageHeading>
              Изменить мои данные:
            </SettingPageHeading>
            <SettingPageForm>
              <StyledTextField variant="outlined" label="Имя" />
              <StyledTextField variant="outlined" label="Фамилия" />
              <StyledTextField variant="outlined" label="Город" />
              <StyledTextField variant="outlined" label="Профессия" />
            </SettingPageForm>
            {probe}
          </SettingsBlockWrapper>
        </SettingsPageContentContainer>
      </Container>
    </Main>
  );
};
