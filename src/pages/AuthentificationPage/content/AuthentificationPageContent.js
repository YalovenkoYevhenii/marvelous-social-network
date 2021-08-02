import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import { useContextAuthentificationPage } from '../context';
import useRequest from '../../../hooks/useRequest';
import { ROOT_PATH } from '../../../constants/routes';

import SignIn from './SignInForm';
import SignUp from './SignUpForm';
import ButtonGroupOfTwo from './ButtonGroupOfTwo';
import { AuthMain } from './styles';

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
      main: '#3949AB',
    },
    secondary: {
      main: '#7e57c2',
    },
  },
});

const initUserData = {
  firstName: '', lastName: '', email: '', password: '',
};
const initInputErrors = {
  firstName: '', lastName: '', email: '', password: '',
};

const initPostOptions = {
  method: 'POST',
  url: process.env.REACT_APP_USERS_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  data: {},
};

/* const initGetOptions = {
  method: 'GET',
  url: process.env.REACT_APP_USERS_URL,
}; */

const AuthentificationPageContent = () => {
  const [icon, setIcon] = useState(false);
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');
  const [userData, setUserData] = useState(initUserData);
  const [inputErrors, setInputErrors] = useState(initInputErrors);
  const [signInError, setSignInError] = useState('');
  const { user, setUser, validationSchema } = useContextAuthentificationPage();
  const {
    requestData, error, setOptions,
  } = useRequest();
  const handlerChangeForm = useCallback(value => () => setForm(value), []);
  const handlerThemeForm = useCallback(value => () => {
    if (!value) setCurrentTheme(SignUpTheme);
    if (value) setCurrentTheme('');
  }, []);

  const handlerShowPassword = () => setIcon(prev => !prev);

  const handlerInputValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlerValidateForm = useCallback(
    (e) => {
      e.preventDefault();
      setInputErrors(initInputErrors);
      validationSchema.validate(userData, { abortEarly: false })
        .then(validatedData => setOptions({ ...initPostOptions, data: validatedData }))
        .catch((err) => {
          err.inner.forEach(({ message, path }) => (
            (path in inputErrors) && setInputErrors(prev => ({ ...prev, [path]: message }))
          ));
        });
    }, [userData, inputErrors, validationSchema, setOptions],
  );
  const [resNew, setResNew] = useState(null);
  const getUser = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_USERS_URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((response) => {
        setResNew(response);
        console.log('res', response);
      });

    console.log('-->', resNew);
    if (!error && resNew) {
      console.log(111111);
      const result = resNew.find(item => (
        item.email === e.target[0].value && item.password === e.target[2].value
      ));
      if (result) {
        setUser(result);
        localStorage.setItem('userID', result.id);
      }
      if (!result) setSignInError('User not found. Please try again');
    }
    if (error) setSignInError(error);
    console.log('-->', resNew);
  };

  console.log(requestData);
  if (user) return <Redirect to={ROOT_PATH} />;

  return (
    <AuthMain>
      <ButtonGroupOfTwo
        handlerChangeForm={handlerChangeForm}
        handlerThemeForm={handlerThemeForm}
        form={form}
      />
      <ThemeProvider theme={currentTheme}>
        { form ? (
          <SignIn
            signInError={signInError}
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
    </AuthMain>
  );
};

export default AuthentificationPageContent;
