/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const ButtonGroupOfTwo = ({ handlerAuthForm, handlerThemeForm }) => (
  <ButtonGroup>
    <Button
      onClick={handlerAuthForm(true)}
      onMouseDown={handlerThemeForm(true)}
      variant="contained"
      color="primary"
      size="large"
    >
      Sign In
    </Button>
    <Button
      onClick={handlerAuthForm(false)}
      onMouseDown={handlerThemeForm(false)}
      variant="contained"
      color="secondary"
      size="large"
    >
      Sign Up
    </Button>
  </ButtonGroup>
);

export default ButtonGroupOfTwo;
