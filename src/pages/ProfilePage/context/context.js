/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
export const useContextPage = () => useContext(Context);

export const Provider = ({ children }) => {
  const { profileId } = useParams();

  const {
    getRequestOptions, postRequestOptions, user, requestData,
  } = useContextApp();
  const data = {
    getRequestOptions, postRequestOptions, user, requestData, profileId,
  };

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
