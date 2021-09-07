import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import useAreInputsEqual from 'hooks/useAreInputsEqual';
import useRequest from 'hooks/useRequest';
import { useContextSettingsPage } from '../context';

import {
  StyledSettingsSection, StyledSectionHeading,
  StyledTextField, StyledSettingsSectionCol, StyledButtonSubmit, SettingPageFormCol,
} from './styles';
import ChangeAvatarBlock from './ChangeAvatarBlock';
import SecurityBlock from './SecurityBlock';

const SettingPageForm = () => {
  const { postRequestOptions } = useContextSettingsPage();
  const {
    firstInput, setFirstInput, secondInput, setSecondInput, areEqual,
  } = useAreInputsEqual();
  const { setOptions } = useRequest();

  const handlerSubmitSettingsForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(e.target);
    setOptions({
      ...postRequestOptions, url: 'probe', headers: { 'Content-type': 'multipart/form-data' }, body: data,
    });
  };

  return (
    <SettingPageFormCol enctype="multipart/form-data" onSubmit={handlerSubmitSettingsForm}>
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
