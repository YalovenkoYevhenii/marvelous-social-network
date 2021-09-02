/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { object, string } from 'yup';

import { useContextApp } from '../../../App/context';

const Context = createContext(null);
const useContextPage = () => useContext(Context);

const validationSchema = object().shape({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initUserData = {
  firstName: '', lastName: '', email: '', password: '',
};

const initInputErrors = {
  firstName: '', lastName: '', email: '', password: '',
};

const Provider = ({ children }) => {
  const {
    user,
    setUser,
    getRequestOptions,
    postRequestOptions,
    putRequestOptions,
    patchRequestOptions,
    deleteRequestOptions,
  } = useContextApp();
  const classes = useStyles();

  const validateForm = (userData) => {
    const validationResult = validationSchema.validate(userData, { abortEarly: false })
      .then(validatedData => ({
        ...postRequestOptions,
        data: validatedData,
        url: process.env.REACT_APP_URL_AUTH_SIGN_UP,
      }))
      .catch(err => err.inner);
    return validationResult;
  };

  const data = {
    classes,
    initUserData,
    initInputErrors,
    validateForm,
    user,
    setUser,
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
