import React, { createContext, useContext } from 'react';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const { getRequestOptions, user, requestData } = useContextApp();
  const data = { getRequestOptions, user, requestData };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
