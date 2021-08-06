import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import { useContextAuthentificationPage } from '../context';
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

const AuthentificationPageContent = () => {
  const [icon, setIcon] = useState(false);
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');

  const { user } = useContextAuthentificationPage();

  const handlerThemeForm = (value) => {
    if (value) return setCurrentTheme('');
    return setCurrentTheme(SignUpTheme);
  };

  const handlerChangeForm = useCallback(value => () => {
    setForm(value);
    handlerThemeForm(value);
  }, []);

  const handlerShowPassword = () => setIcon(prev => !prev);

  if (user) return <Redirect to={ROOT_PATH} />;

  fetch('http://localhost:3000/users/1/posts')
    .then(res => res.json())
    .then(res => console.log(res));

  fetch('http://localhost:3000/users/2/posts')
    .then(res => res.json())
    .then(res => console.log(res));

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
            setIcon={setIcon}
            icon={icon}
            handlerShowPassword={handlerShowPassword}
          />
        ) : (
          <SignUp
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
