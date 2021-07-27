/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const data = { user, setUser };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
