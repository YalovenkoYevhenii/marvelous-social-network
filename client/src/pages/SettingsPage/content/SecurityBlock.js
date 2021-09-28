/* eslint-disable react/prop-types */
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import useToggler from 'hooks/useToggler';

import {
  StyledSectionHeading, StyledSettingsSectionCol, StyledTextField,
} from './styles';

const SecurityBlock = ({
  firstInput, setFirstInput, secondInput, setSecondInput, areEqual,
}) => {
  const { value: icon1, handlerToggle: handlerToggle1 } = useToggler();
  const { value: icon2, handlerToggle: handlerToggle2 } = useToggler();

  const handlerShowPassword = current => () => {
    if (current === 1) return handlerToggle1();
    return handlerToggle2();
  };

  const handlerNewPassword = (e) => {
    setFirstInput(e.target.value);
  };

  const handlerCheckNewPassword = (e) => {
    setSecondInput(e.target.value);
  };

  return (
    <>
      <StyledSectionHeading>
        Безопасность
      </StyledSectionHeading>
      <StyledSettingsSectionCol>
        <StyledTextField
          variant="outlined"
          label="Введите текущий пароль"
          name="currentPassword"
          type={icon1 ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment postition="end">
                <IconButton onClick={handlerShowPassword(1)}>
                  { icon1 ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <StyledTextField
          value={firstInput}
          onChange={handlerNewPassword}
          error={!areEqual}
          helperText={!areEqual && 'Пароли не совпадают'}
          variant="outlined"
          label="Новый пароль"
          name="newPassword"
          type={icon2 ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment postition="end">
                <IconButton onClick={handlerShowPassword(2)}>
                  { icon2 ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <StyledTextField
          value={secondInput}
          onChange={handlerCheckNewPassword}
          error={!areEqual}
          helperText={!areEqual && 'Пароли не совпадают'}
          variant="outlined"
          label="Повторите новый пароль"
          name="newPasswordCheck"
          type={icon2 ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment postition="end">
                <IconButton onClick={handlerShowPassword(2)}>
                  { icon2 ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </StyledSettingsSectionCol>
    </>
  );
};

export default SecurityBlock;
