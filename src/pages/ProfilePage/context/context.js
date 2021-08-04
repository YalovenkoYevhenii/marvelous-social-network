import React, { createContext, useContext } from 'react';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
export const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const { getRequestOptions, postRequestOptions, user } = useContextApp();
  const data = { getRequestOptions, postRequestOptions, user };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};
