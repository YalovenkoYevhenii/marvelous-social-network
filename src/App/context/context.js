/* eslint-disable react/prop-types */
import React, {
  createContext, useContext,
} from 'react';
import useFetch from '../../hooks/useFetch';

const Context = createContext(null);
const useContextPage = () => useContext(Context);
const url = 'http://localhost:3000/users';

const Provider = ({ children }) => {
  const { data1 } = useFetch(url, 'GET');

  const data = { data1 };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
