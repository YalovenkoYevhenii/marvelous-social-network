/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Input, InputAdornment, IconButton,
} from '@material-ui/core';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handlerHideOrShowPass = () => {
    setPasswordInputValue('text');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Please insert your data</h2>
      <div>
        <label htmlFor="password">
          Password
          <Input
            value={passwordInputValue}
            type="text"
            onChange={(e) => setPasswordInputValue(e.target.value)}
            id="password"
            placeholder="******"
            inputProps={{ 'aria-label': 'description' }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlerHideOrShowPass}
                >
                  Hide
                </IconButton>
              </InputAdornment>
            )}
          />
        </label>
      </div>
      <button type="submit">
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
