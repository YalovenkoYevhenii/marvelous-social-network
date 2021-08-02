/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useCallback, useEffect,
} from 'react';

import useRequest from '../../hooks/useRequest';

const Context = createContext(null);
const useContextPage = () => useContext(Context);
const initGetOptions = {
  method: 'GET',
  url: process.env.REACT_APP_USERS_URL,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handlerSignOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('userID');
  }, []);
  const { requestData } = useRequest(initGetOptions);

  useEffect(() => {
    if (localStorage.getItem('userID') && requestData) {
      const res = requestData.find(item => item.id === JSON.parse(localStorage.getItem('userID')));
      setUser(res);
    }
  }, [requestData, user]);

  const data = { user, setUser, handlerSignOut };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
