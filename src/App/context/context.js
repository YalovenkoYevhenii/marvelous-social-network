/* eslint-disable quote-props */
/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useCallback, useEffect,
} from 'react';

import useRequest from '../../hooks/useRequest';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const getRequestOptions = {
  method: 'get',
  url: 'http://localhost:3000/users',
};
const postRequestOptions = {
  method: 'post',
  url: 'http://localhost:3000/users',
  data: {},
};
const putRequestOptions = {
  method: 'put',
  url: '/users',
  data: {},
};
const patchRequestOptions = {
  method: 'put',
  url: '/users',
  data: {},
};
const deleteRequestOptions = {
  method: 'delete',
  url: '/users',
};

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handlerSignOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('userID');
  }, []);
  const { requestData } = useRequest(getRequestOptions);

  useEffect(() => {
    if (localStorage.getItem('userID') && requestData) {
      const res = requestData.find(item => item.id === JSON.parse(localStorage.getItem('userID')));
      setUser(res);
    }
  }, [requestData, user]);

  const data = {
    user,
    setUser,
    handlerSignOut,
    postRequestOptions,
    getRequestOptions,
    putRequestOptions,
    patchRequestOptions,
    deleteRequestOptions,
  };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
