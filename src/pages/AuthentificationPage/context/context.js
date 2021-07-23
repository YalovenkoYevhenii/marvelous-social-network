/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useContext } from 'react';
import { object, string } from 'yup';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

export const validationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required(),
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

const Provider = ({ children }) => {
  const { user } = useContextApp();
  const data = {
    validationSchema, user,
  };

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
