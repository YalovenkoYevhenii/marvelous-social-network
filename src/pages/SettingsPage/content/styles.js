import styled from 'styled-components';

import { PageContentContainer, BlockWrapper } from '../../../reusableStyles';

export const SettingsPageContentContainer = styled(PageContentContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  flex: 1;
`;

export const SettingPageHeading = styled.h2`
  margin: 0 auto;
  padding: .5rem;
`;

export const SettingPageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SettingsBlockWrapper = styled(BlockWrapper)`
  align-self: stretch;
`;
