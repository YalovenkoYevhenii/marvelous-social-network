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
const ButtonGroupOfTwo = ({ handlerChangeForm, form }) => {
  const { buttonGroup, button } = useStyles();
  return (
    <ButtonGroup className={buttonGroup}>
      <Button
        className={button}
        onClick={handlerChangeForm(true)}
        variant="contained"
        color={form ? 'primary' : 'white'}
        size="large"
      >
        <strong>Sign In</strong>
      </Button>
      <Button
        className={button}
        onClick={handlerChangeForm(false)}
        variant="contained"
        color={form ? 'white' : 'secondary'}
        size="large"
      >
        <strong>Sign Up</strong>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupOfTwo;
