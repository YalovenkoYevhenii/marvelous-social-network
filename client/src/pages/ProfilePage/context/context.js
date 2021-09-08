/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useContextApp } from 'App/context';
import useRequest from 'hooks/useRequest';

const Context = createContext(null);
export const useContextPage = () => useContext(Context);

export const Provider = ({ children }) => {
  const {
    getRequestOptions, postRequestOptions, user,
  } = useContextApp();
  const { profileId } = useParams();
  const {
    setOptions, requestData, requestError, loading,
  } = useRequest();
  useEffect(() => {
    setOptions({ ...getRequestOptions, url: `/${profileId}` });
  }, []);

  const data = {
    getRequestOptions, postRequestOptions, user, requestData, requestError, loading, profileId,
  };

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
