import React from 'react';
import TextField from '@material-ui/core/TextField';

import { Main, Container } from '../../../reusableStyles';

import {
  SettingsPageContentContainer, SettingPageHeading, SettingPageForm, SettingsBlockWrapper,
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
              <TextField />
              <TextField />
              <TextField />
              <TextField />
            </SettingPageForm>
            {probe}
          </SettingsBlockWrapper>
        </SettingsPageContentContainer>
      </Container>
    </Main>
  );
};
