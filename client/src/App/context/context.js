/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useCallback, useEffect,
} from 'react';

import useRequest from 'hooks/useRequest';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const getRequestOptions = {
  method: 'get',
  url: process.env.REACT_APP_URL_AUTH_USERS,
};
const postRequestOptions = {
  method: 'post',
  url: process.env.REACT_APP_URL_AUTH_USERS,
  data: {},
};
const putRequestOptions = {
  method: 'put',
  url: process.env.REACT_APP_URL_AUTH_USERS,
  data: {},
};
const patchRequestOptions = {
  method: 'put',
  url: process.env.REACT_APP_URL_AUTH_USERS,
  data: {},
};
const deleteRequestOptions = {
  method: 'delete',
  url: process.env.REACT_APP_URL_AUTH_USERS,
};

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('success');
  const [message, setMessage] = useState('');

  const { setOptions, requestData } = useRequest();

  const handlerSignOut = useCallback(() => {
    setUser(false);
    localStorage.removeItem('token');
    setOptions({ ...deleteRequestOptions, url: process.env.REACT_APP_URL_AUTH_SIGN_OUT });
  }, []);
  useEffect(() => {
    if (localStorage.getItem('token')) setOptions({ ...getRequestOptions, url: '/current' });
  }, []);

  useEffect(() => {
    if (requestData?.email) setUser(requestData);
  }, [requestData]);

  const data = {
    user,
    setUser,
    handlerSignOut,
    postRequestOptions,
    getRequestOptions,
    putRequestOptions,
    patchRequestOptions,
    deleteRequestOptions,
    isOpen,
    type,
    message,
    setIsOpen,
    setType,
    setMessage,
  };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
