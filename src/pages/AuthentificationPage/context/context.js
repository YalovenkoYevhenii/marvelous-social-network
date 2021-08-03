/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useContext } from 'react';
import { object, string } from 'yup';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

export const validationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

const Provider = ({ children }) => {
  const {
    user,
    setUser,
    setUserpostRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
    patchRequestOptions,
    deleteRequestOptions,
  } = useContextApp();

  const data = {
    validationSchema,
    user,
    setUser,
    setUserpostRequestOptions,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
    patchRequestOptions,
    deleteRequestOptions,
  };

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { useContextPage, Provider };
