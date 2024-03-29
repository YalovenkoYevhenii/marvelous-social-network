import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import useAreInputsEqual from 'hooks/useAreInputsEqual';
import useRequest from 'hooks/useRequest';

import {
  StyledSettingsSection, StyledSectionHeading,
  StyledTextField, StyledSettingsSectionCol, StyledButtonSubmit, SettingPageFormCol,
} from './styles';
import ChangeAvatarBlock from './ChangeAvatarBlock';
import SecurityBlock from './SecurityBlock';

const SettingPageForm = () => {
  const {
    firstInput, setFirstInput, secondInput, setSecondInput, areEqual,
  } = useAreInputsEqual();
  const { axiosAPI } = useRequest();

  const handlerSubmitSettingsForm = (e) => {
    e.preventDefault();

    axiosAPI.patch('http://localhost:7000/settings', new FormData(e.target));
  };

  return (
    <SettingPageFormCol
      method="post"
      encType="multipart/form-data"
      onSubmit={handlerSubmitSettingsForm}
    >
      <ChangeAvatarBlock />
      <StyledSectionHeading>
        Личные данные
      </StyledSectionHeading>
      <StyledSettingsSection>
        <StyledTextField variant="outlined" label="Имя" name="firstName" />
        <StyledTextField variant="outlined" label="Фамилия" name="lastName" />
      </StyledSettingsSection>
      <StyledSettingsSectionCol>
        <StyledTextField variant="outlined" label="Профессия" name="profession" />
        <StyledTextField variant="outlined" label="Образование" name="education" />
        <StyledTextField
          variant="outlined"
          label="День рождения"
          type="date"
          name="birthday"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <StyledTextField variant="outlined" label="Город" name="city" />
      </StyledSettingsSectionCol>
      <SecurityBlock
        firstInput={firstInput}
        setFirstInput={setFirstInput}
        secondInput={secondInput}
        setSecondInput={setSecondInput}
        areEqual={areEqual}
      />
      <StyledButtonSubmit
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        disabled={!areEqual}
      >
        Сохранить
      </StyledButtonSubmit>
    </SettingPageFormCol>
  );
};

export default SettingPageForm;
