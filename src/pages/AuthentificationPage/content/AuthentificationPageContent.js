import React, { useState, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import LoginForm from './SignInForm';
import SignUp from './SignUpForm';
import ButtonGroupOfTwo from './ButtonGroup';
import { Main } from './styles';

const AuthentificationPageContent = () => {
  const SignUpTheme = createTheme({
    palette: {
      primary: {
        main: '#FF4447',
      },
      secondary: {
        main: '#257985',
      },
    },
  });
  const [form, setForm] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('');
  const handlerAuthForm = useCallback((value) => () => setForm(value), []);
  const handlerThemeForm = useCallback((value) => () => {
    if (!value) setCurrentTheme(SignUpTheme);
    if (value) setCurrentTheme('');
  }, []);
  return (
    <Main>
      <ButtonGroupOfTwo handlerAuthForm={handlerAuthForm} handlerThemeForm={handlerThemeForm} />
      <ThemeProvider theme={currentTheme}>
        { form ? <LoginForm /> : <SignUp /> }
      </ThemeProvider>
    </Main>
  );
};

export default AuthentificationPageContent;
