/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import useRequest from 'hooks/useRequest';
import useToggler from 'hooks/useToggler';

import { useContextAuthentificationPage } from '../context';
import { StyledErrorMessage } from './styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [signInError, setSignInError] = useState('');
  const { paper, form, submit } = useStyles();
  const { requestData, requestError, setOptions } = useRequest();
  const { value: icon, handlerToggle } = useToggler();
  const { setUser, postRequestOptions } = useContextAuthentificationPage();

  const handlerShowPassword = () => {
    handlerToggle();
  };

  const handlerGetUser = (e) => {
    e.preventDefault();
    setOptions({
      ...postRequestOptions,
      url: process.env.REACT_APP_URL_AUTH_SIGN_IN,
      data: { email: e.target[0].value, password: e.target[2].value },
    });
  };
  useEffect(() => {
    if (requestError) setSignInError(requestError);
    if (requestData) {
      setUser(requestData.user);
      localStorage.setItem('token', requestData.accessToken);
    }
  }, [requestData, requestError]);

  return (
    <Container component="main" maxWidth="xs">
      <div className={paper}>
        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>
        { signInError
          ? (
            <StyledErrorMessage>
              {signInError}
            </StyledErrorMessage>
          )
          : null }
        <form onSubmit={handlerGetUser} className={form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={icon ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment postition="end">
                  <IconButton onClick={handlerShowPassword}>
                    { icon ? <Visibility /> : <VisibilityOff /> }
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
