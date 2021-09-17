import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export const StyledAlert = styled(Alert)`
  min-width: 20rem;
`;

export const StyledToast = styled(Snackbar)`
  bottom: 2rem;
`;
