/* eslint-disable react/prop-types */
import React from 'react';

import useRequest from 'hooks/useRequest';
import { useContextFriendsPage } from 'pages/FriendsPage/context';

import { StyledButtonContainer, StyledButton } from './styles';

const ManageIncomingRequestsButtons = ({
  setDeclined, setAccepted, userId, setAmountOfRequests,
}) => {
  const { setOptions } = useRequest();
  const { patchRequestOptions } = useContextFriendsPage();

  const handlerDecline = () => {
    setOptions({
      ...patchRequestOptions,
      url: process.env.REACT_APP_URL_FRIENDS_ADD_FRIEND,
      data: { friendId: userId },
    });
    setAmountOfRequests(prev => prev + 1);
    setDeclined(true);
  };

  const handlerAccept = () => {
    setOptions({
      ...patchRequestOptions,
      url: process.env.REACT_APP_URL_FRIENDS_DECLINE_FRIENDS_REQUEST,
      data: { friendId: userId },
    });
    setAmountOfRequests(prev => prev + 1);
    setAccepted(true);
  };

  return (
    <StyledButtonContainer>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handlerAccept}
      >
        Принять заявку
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        onClick={handlerDecline}
      >
        Отклонить заявку
      </StyledButton>

    </StyledButtonContainer>
  );
};

export default ManageIncomingRequestsButtons;
