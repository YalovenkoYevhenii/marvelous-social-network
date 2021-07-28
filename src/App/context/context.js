/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useState, useCallback,
} from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handlerSignOut = useCallback(() => setUser(null), []);

  const data = { user, setUser, handlerSignOut };
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
