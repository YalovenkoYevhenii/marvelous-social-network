import React from 'react';

import { Main, Container } from 'reusableStyles';

import {
  SettingsPageContentContainer, SettingPageHeading, SettingsBlockWrapper,
} from './styles';

import SettingPageForm from './SettingPageForm';

export const SettingsPageContent = () => (
  <Main>
    <Container>
      <SettingsPageContentContainer>
        <SettingsBlockWrapper>
          <SettingPageHeading>
            Настройки профиля
          </SettingPageHeading>
          <SettingPageForm />
        </SettingsBlockWrapper>
      </SettingsPageContentContainer>
    </Container>
  </Main>
);
