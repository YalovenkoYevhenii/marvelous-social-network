/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const [data, useData] = useState({});
  return (
    <Context.Provider value={[data, useData]}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
