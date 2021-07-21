/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useContext } from 'react';
import { object, string } from 'yup';
import { createTheme } from '@material-ui/core/styles';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const validationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required(),
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

const SignUpTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: 0,
      },
    },
  },
  palette: {
    primary: {
      main: '#FF4447',
    },
    secondary: {
      main: '#257985',
    },
  },
});

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const { user } = useContextApp();
  const data = {
    validationSchema, SignUpTheme, user,
  };

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
};

export { Context, useContextPage, Provider };
