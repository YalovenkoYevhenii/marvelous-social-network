import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { PageContentContainer, BlockWrapper } from '../../../reusableStyles';

export const SettingsPageContentContainer = styled(PageContentContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  flex: 1;
`;

export const SettingPageHeading = styled.h1`
  padding: .5rem;
  text-transform: uppercase;
`;

export const SettingPageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SettingsBlockWrapper = styled(BlockWrapper)`
  align-self: stretch;
`;

export const StyledTextField = styled(TextField)`
  margin: 1rem;
  flex-basis: 25rem;
`;

export const StyledSettingsSection = styled.section`
  display: flex;
  justify-content: flex-start;
`;
