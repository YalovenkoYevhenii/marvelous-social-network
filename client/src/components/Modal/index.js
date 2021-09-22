/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';

import {
  StyledOverlay, StyledModalWindow, StyledModalRaw, StyledModalHeading,
  StyledModalBody, StyledModalButton, StyledModalCloseButton, StyledTextArea,
} from './styles';

const Modal = ({
  isModalOpen, setIsModalOpen, modalType, heading, body,
}) => {
  const handlerCloseModal = () => {
    setIsModalOpen(false);
  };
  const handlerAccept = () => {
    setIsModalOpen(false);
  };
  const handlerCancel = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return createPortal(
    <StyledOverlay onClick={handlerCloseModal}>
      <StyledModalWindow>
        <StyledModalRaw>
          <StyledModalHeading>
            {heading}
          </StyledModalHeading>
          <StyledModalCloseButton onClick={handlerCloseModal}>
            <CloseIcon />
          </StyledModalCloseButton>
        </StyledModalRaw>
        <hr />
        <StyledModalRaw>
          <StyledModalBody>
            {modalType === 'info' && body}
            {modalType === 'editPost' && (
              <StyledTextArea
                multiline
                rows={4}
              />
            )}
          </StyledModalBody>
        </StyledModalRaw>
        <hr />
        <StyledModalRaw>
          {modalType === 'editPost' && (
            <>
              <StyledModalButton
                onClick={handlerAccept}
                variant="contained"
                color="primary"
              >
                Принять
              </StyledModalButton>
              <StyledModalButton
                onClick={handlerCancel}
                variant="contained"
                color="secondary"
              >
                Отменить
              </StyledModalButton>
            </>
          )}
          {modalType === 'info' && (
            <StyledModalButton
              onClick={handlerCloseModal}
              variant="contained"
              color="primary"
            >
              Окей
            </StyledModalButton>
          )}
        </StyledModalRaw>
      </StyledModalWindow>
    </StyledOverlay>,
    document.body,
  );
};

export default Modal;
