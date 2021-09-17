import React from 'react';
import { createPortal } from 'react-dom';
import { StyledAlert, StyledToast } from './styles';

const Toast = ({ isOpen, type, message }) => createPortal(
  <StyledToast
    open={isOpen}
    autoHideDuration={6000}
  >
    <StyledAlert severity={type}>
      {message}
    </StyledAlert>
  </StyledToast>,
  document.body,
);

export default Toast;
