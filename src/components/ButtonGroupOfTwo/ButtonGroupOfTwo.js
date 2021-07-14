/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const ButtonGroupOfTwo = ({ setFormType }) => {
  const handlerAuthForm = useCallback((value) => () => setFormType(value), []);

  return (
    <ButtonGroup>
      <Button onClick={handlerAuthForm(true)}>
        SignIn
      </Button>
      <Button onClick={handlerAuthForm(false)}>
        SignUp
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupOfTwo;
