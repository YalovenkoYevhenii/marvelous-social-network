/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

/* import { useContextAuthentificationPage } from '../context'; */
import useFetch from '../../../hooks/useFetch';
import { ROOT_PATH } from '../../../constants/routes';

import SignIn from './SignInForm';
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
      main: '#ff7043',
    },
    secondary: {
      main: '#257985',
    },
  },
});

const url = 'http://localhost:3000/users';

export const AuthentificationPageContent = () => {
  const [icon, setIcon] = useState(false);
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');
  const [userData, setUserData] = useState({
    firstName: '', lastName: '', email: '', password: '',
  });
  const [inputErrors, setInputErrors] = useState({
    firstName: '', lastName: '', email: '', password: '',
  });

  /*  const { validationSchema } = useContextAuthentificationPage(); */
  const history = useHistory();
  const { data, error } = useFetch(url, 'GET');

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

  const showSignInError = ((err) => {
    console.log(err);
  });

  const getUser = (e) => {
    e.preventDefault();
    let User = {};
    if (!error) {
      const result = data.find((item) => item.email === e.target[0].value && item.password === e.target[2].value);
      if (result) {
        User = result;
        console.log(User);
        history.push(ROOT_PATH);
      }
      if (!result) {
        showSignInError('User not found. Please try again');
      }
    }
    if (error) showSignInError(error);
  };

  return (
    <Main>
      <ButtonGroupOfTwo handlerAuthForm={handlerAuthForm} handlerThemeForm={handlerThemeForm} />
      <ThemeProvider theme={currentTheme}>
        { form ? (
          <SignIn
            getUser={getUser}
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
