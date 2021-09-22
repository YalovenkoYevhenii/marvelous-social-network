import styled from 'styled-components';
import { Button, TextField, IconButton } from '@material-ui/core';

export const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  transition: background-color .2s ease;
`;

export const StyledModalWindow = styled.div`
  width: 20rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
`;

export const StyledModalRaw = styled.div`
  display: flex;
/*   justify-content: center;
  align-items: center; */
`;

export const StyledModalHeading = styled.h2`
  justify-self: center;
  font-size: 2rem;
  margin: 1rem;
`;

export const StyledModalBody = styled.div`
  font-size: 1rem;
`;

export const StyledModalButton = styled(Button)`
  margin: 1rem;
`;

export const StyledTextArea = styled(TextField)`
  font-size: 1rem;
`;

export const StyledModalCloseButton = styled(IconButton)`
  font-size: 1rem;
  justify-self: flex-end;
`;
