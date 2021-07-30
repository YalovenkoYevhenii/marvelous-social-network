/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useCallback, useEffect,
} from 'react';

import useFetch from '../../hooks/useFetch';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handlerSignOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('userID');
  }, []);
  const { requestData } = useFetch(process.env.REACT_APP_USERS_URL, 'GET');

  useEffect(() => {
    if (localStorage.getItem('userID') && requestData) {
      const res = requestData.find((item) => item.id === JSON.parse(localStorage.getItem('userID')));
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
