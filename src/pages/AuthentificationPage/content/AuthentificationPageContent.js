import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import LoginForm from './SignInForm';
import SignUp from './SignUpForm';
import ButtonGroupOfTwo from './ButtonGroup';
import { Main } from './styles';

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
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');
  const [inputValues, setInputValues] = useState({
    email: '', password: '', errorEmail: false, errorPassword: false, helperTextEmail: '', helperTextPass: '',
  });

  const handlerChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regexp = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    return regexp.test(password);
  };

  const validateEmail = (email) => {
    const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return regexp.test(email);
  };

  const handlerValidate = (e) => {
    switch (e.target.name) {
      case 'password':
        if (!(validatePassword(e.target.value))) setInputValues({ ...inputValues, errorPassword: true, helperTextPass: 'Incorrect entry. Please try again' });
        if (validatePassword(e.target.value)) setInputValues('');
        break;
      case 'email':
        if (!(validateEmail(e.target.value))) setInputValues({ ...inputValues, errorEmail: true, helperTextEmail: 'Incorrect entry. Please try again' });
        break;
      default:
    }
  };

  const handlerAuthForm = useCallback((value) => () => setForm(value), []);

  const handlerThemeForm = useCallback((value) => () => {
    if (!value) setCurrentTheme(SignUpTheme);
    if (value) setCurrentTheme('');
  }, []);

  const [icon, setIcon] = useState(false);
  const handlerShowPassword = () => setIcon((prev) => !prev);

  return (
    <Main>
      <ButtonGroupOfTwo handlerAuthForm={handlerAuthForm} handlerThemeForm={handlerThemeForm} />
      <ThemeProvider theme={currentTheme}>
        { form ? (
          <LoginForm
            handlerValidate={handlerValidate}
            handlerChange={handlerChange}
            setIcon={setIcon}
            icon={icon}
            handlerShowPassword={handlerShowPassword}
            inputValues={inputValues}
          />
        ) : (
          <SignUp
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
