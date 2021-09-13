/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { useContextApp } from 'App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const { deleteRequestOptions, user } = useContextApp();
  const data = { deleteRequestOptions, user };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
