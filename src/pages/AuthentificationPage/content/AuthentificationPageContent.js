/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import LoginForm from './SignInForm';
import SignUp from './SignUpForm';
import ButtonGroupOfTwo from './ButtonGroup';
import { Main } from './styles';
import { validationSchema } from '../context/context';

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

const AuthentificationPageContent = () => {
  const [icon, setIcon] = useState(false);
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');
  const [userData, setUserData] = useState({
    firstName: '', lastName: '', email: '', password: '',
  });
  const [inputErrors, setInputErrors] = useState({
    firstName: '', lastName: '', email: '', password: '',
  });

  const handlerAuthForm = useCallback((value) => () => setForm(value), []);

  const handlerThemeForm = useCallback((value) => () => {
    if (!value) setCurrentTheme(SignUpTheme);
    if (value) setCurrentTheme('');
  }, []);

  const handlerShowPassword = () => setIcon((prev) => !prev);
  const handlerInputValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlerValidateForm = (e) => {
    e.preventDefault();
    validationSchema.validate(userData, { abortEarly: false })
      .then((validatedUserData) => console.log(validatedUserData))
      .catch((err) => {
        const arr = err.inner;
        arr.forEach(({ message, path }) => (path in inputErrors) && setInputErrors((prev) => ({ ...prev, [path]: message })));
      });
  };
  setTimeout(() => {
    console.log(inputErrors);
  }, 1000);

  return (
    <Main>
      <ButtonGroupOfTwo handlerAuthForm={handlerAuthForm} handlerThemeForm={handlerThemeForm} />
      <ThemeProvider theme={currentTheme}>
        { form ? (
          <LoginForm
            setIcon={setIcon}
            icon={icon}
            handlerShowPassword={handlerShowPassword}
          />
        ) : (
          <SignUp
            handlerInputValues={handlerInputValues}
            handlerValidateForm={handlerValidateForm}
            inputErrors={inputErrors}
            userData={userData}
            setIcon={setIcon}
            icon={icon}
            handlerShowPassword={handlerShowPassword}
          />
        ) }
      </ThemeProvider>
    </Main>
  );
};

export default AuthentificationPageContent;
