/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import useRequest from 'hooks/useRequest';
import { useContextAuthentificationPage } from '../context';

const SignUp = ({ icon, handlerShowPassword, setIcon }) => {
  const {
    validateForm, initInputErrors, initUserData, classes, setUser, postRequestOptions,
  } = useContextAuthentificationPage();

  const { setOptions, requestData } = useRequest();
  const [userData, setUserData] = useState(initUserData);
  const [inputErrors, setInputErrors] = useState(initInputErrors);

  useEffect(() => {
    setIcon(false);
  }, []);

  const handlerInputValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlerValidateForm = (e) => {
    e.preventDefault();
    setInputErrors(initInputErrors);
    validateForm(userData)
      .then((res) => {
        if (!Array.isArray(res)) {
          return setOptions({
            ...postRequestOptions,
            url: process.env.REACT_APP_URL_AUTH_SIGN_UP,
            data: res,
          });
        }

        return res.forEach(({ message, path }) => (
          (path in inputErrors) && setInputErrors(prev => ({ ...prev, [path]: message }))
        ));
      });
  };

  if (requestData) {
    setUser(requestData.user);
    localStorage.setItem('token', requestData.accessToken);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        <form onSubmit={handlerValidateForm} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userData.firstName}
                onChange={handlerInputValues}
                error={!!inputErrors.firstName}
                helperText={inputErrors.firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userData.lastName}
                onChange={handlerInputValues}
                error={!!inputErrors.lastName}
                helperText={inputErrors.lastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userData.email}
                onChange={handlerInputValues}
                error={!!inputErrors.email}
                helperText={inputErrors.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userData.password}
                onChange={handlerInputValues}
                error={!!inputErrors.password}
                helperText={inputErrors.password}
                variant="outlined"
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
