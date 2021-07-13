import React, { createContext, useContext, useState } from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [data, useData] = useState({});
  return (
    <Context.Provider value={[data, useData]}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
