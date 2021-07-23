/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonGroup: {
    marginTop: '5rem',
  },
  button: {
    padding: '0.5rem 3rem',
  },
});
const ButtonGroupOfTwo = ({ handlerAuthForm, handlerThemeForm }) => {
  const { buttonGroup, button } = useStyles();
  return (
    <ButtonGroup className={buttonGroup}>
      <Button
        className={button}
        onClick={handlerAuthForm(true)}
        onMouseDown={handlerThemeForm(true)}
        variant="contained"
        color="primary"
        size="large"
      >
        <strong>Sign In</strong>
      </Button>
      <Button
        className={button}
        onClick={handlerAuthForm(false)}
        onMouseDown={handlerThemeForm(false)}
        variant="contained"
        color="secondary"
        size="large"
      >
        <strong>Sign Up</strong>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupOfTwo;
