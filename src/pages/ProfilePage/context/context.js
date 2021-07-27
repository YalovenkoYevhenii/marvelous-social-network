import React, { createContext, useContext, useState } from 'react';

const Context = createContext(null);
export const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [data, useData] = useState({});
  return (
    <Context.Provider value={[data, useData]}>
      {children}
    </Context.Provider>
  );
};
