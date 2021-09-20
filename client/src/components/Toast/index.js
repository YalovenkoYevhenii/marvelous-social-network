import React from 'react';
import { createPortal } from 'react-dom';
import { StyledAlert, StyledToast } from './styles';

const Toast = ({
  isOpen, setIsOpen, type, message,
}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  return createPortal(
    <StyledToast
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <StyledAlert severity={type}>
        {message}
      </StyledAlert>
    </StyledToast>,
    document.body,
  );
};

export default Toast;
