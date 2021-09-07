/* eslint-disable react/prop-types */
import React from 'react';

import {
  StyledSectionHeading, StyledSettingsSectionCol, StyledTextField,
} from './styles';

const SecurityBlock = ({
  firstInput, setFirstInput, secondInput, setSecondInput,
}) => {
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
        <StyledTextField fullwidth variant="outlined" label="Введите текущий пароль" name="currentPassword" />
        <StyledTextField value={firstInput} onChange={handlerNewPassword} variant="outlined" label="Новый пароль" name="newPassword" />
        <StyledTextField value={secondInput} onChange={handlerCheckNewPassword} variant="outlined" label="Повторите новый пароль" name="newPasswordCheck" />
      </StyledSettingsSectionCol>
    </>
  );
};

export default SecurityBlock;
