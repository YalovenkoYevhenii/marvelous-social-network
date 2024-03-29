/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { useContextApp } from 'App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const { user, getRequestOptions, patchRequestOptions } = useContextApp();

  const data = { user, getRequestOptions, patchRequestOptions };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
