import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

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
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');

  const handlerThemeForm = (value) => {
    if (value) return setCurrentTheme('');
    return setCurrentTheme(SignUpTheme);
  };

  const handlerChangeForm = useCallback(value => () => {
    setForm(value);
    handlerThemeForm(value);
  }, []);

  return (
    <AuthMain>
      <ButtonGroupOfTwo
        handlerChangeForm={handlerChangeForm}
        handlerThemeForm={handlerThemeForm}
        form={form}
      />
      <ThemeProvider theme={currentTheme}>
        { form ? <SignIn /> : <SignUp />}
      </ThemeProvider>
    </AuthMain>
  );
};

export default AuthentificationPageContent;
