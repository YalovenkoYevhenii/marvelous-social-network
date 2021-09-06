import React from 'react';

import { Main, Container, FriendBlockAvatar } from 'reusableStyles';

import {
  SettingsPageContentContainer, SettingPageHeading, SettingPageForm,
  SettingsBlockWrapper, StyledSettingsSection,
} from './styles';

export const SettingsPageContent = () => (
  <Main>
    <Container>
      <SettingsPageContentContainer>
        <SettingsBlockWrapper>
          <SettingPageHeading>
            Настройки
          </SettingPageHeading>
          <StyledSettingsSection>
            <FriendBlockAvatar />
          </StyledSettingsSection>
          <SettingPageForm />
        </SettingsBlockWrapper>
      </SettingsPageContentContainer>
    </Container>
  </Main>
);
