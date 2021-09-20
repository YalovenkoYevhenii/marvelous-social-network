import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Button, Avatar } from '@material-ui/core';

import { PageContentContainer, BlockWrapper } from 'reusableStyles';
import COLORS from 'constants/styles';

export const SettingsPageContentContainer = styled(PageContentContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  flex: 1;
`;

export const SettingPageHeading = styled.h1`
  padding: .5rem;
  color: ${COLORS.dimBlack};
  text-transform: uppercase;
  margin: 0 auto;
`;

export const SettingPageFormCol = styled.form`
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

export const StyledTextFieldFullWidth = styled(TextField)`
  margin: 1rem;
  flex-basis: 50rem;
  flex: 0 1 50rem;

`;

export const StyledSettingsSection = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.lightGrayBg};
  
`;

export const StyledSettingsSectionCol = styled(StyledSettingsSection)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButtonSection = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin: .3rem;
`;
export const StyledButtonSubmit = styled(Button)`
  margin: 1rem;
  align-self: center;

`;

export const StyledSettingsAvatar = styled(Avatar)`
  height: 5rem;
  width: 5rem;
`;

export const StyledSectionHeading = styled.h2`
  margin: 1rem 1rem 0 1rem;
  font-weight: 100;
  color: grey;
`;
