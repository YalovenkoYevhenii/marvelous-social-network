import styled from 'styled-components';

import { Main } from 'reusableStyles';
import COLORS from 'constants/styles';

export const StyledErrorMessage = styled.div`
  color: red;
  background-color: ${COLORS.lightRedErr};
  padding: 1rem;
  font-size: 1rem;
  border-radius: .4rem;
`;

export const AuthMain = styled(Main)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;
