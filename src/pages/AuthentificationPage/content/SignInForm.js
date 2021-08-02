/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

const SignIn = ({
  icon, handlerShowPassword, setIcon, getUser,
  signInError, megaData: { megaEmail, megaPass }, handleMegaData,
}) => {
  const { paper, form, submit } = useStyles();

  useEffect(() => {
    setIcon(false);
  }, []);

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
        <form onSubmit={getUser} className={form} noValidate>
          <TextField
            onChange={handleMegaData}
            value={megaEmail}
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
            onChange={handleMegaData}
            value={megaPass}
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
