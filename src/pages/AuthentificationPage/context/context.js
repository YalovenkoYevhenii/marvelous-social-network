/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useContext } from 'react';
import { object, string } from 'yup';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

export const validationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required(),
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  // const [data, useData] = useState({});

  const data = {
    validationSchema,
  };

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;

export { Context, useContextPage, Provider };
