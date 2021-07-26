/* eslint-disable react/prop-types */
import React, {
  createContext, useContext,
} from 'react';
import useFetch from '../../hooks/useFetch';

const Context = createContext(null);
const useContextPage = () => useContext(Context);
const url = 'http://localhost:3000/users';
// TODO: transport URL const to the .env file

const Provider = ({ children }) => {
  const { data1 } = useFetch(url, 'GET');
  // TODO: you do not need whis data here

  const data = { data1 };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
// TODO: you need to export only Econtext and Provider.
// Make it in foward of const(export const Context = createContext() )
