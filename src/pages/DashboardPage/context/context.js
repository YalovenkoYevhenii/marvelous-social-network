import React, { createContext, useContext } from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const data = {};
  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
