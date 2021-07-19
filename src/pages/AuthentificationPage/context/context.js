import React, { createContext, useContext } from 'react';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  // const [data, useData] = useState({});

  const validatePassword = (password) => {
    const regexp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    return regexp.test(password);
  };

  const data = {
    validatePassword,
  };

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
