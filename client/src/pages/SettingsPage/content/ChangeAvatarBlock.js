import React, { useState } from 'react';

import { StyledSectionHeading, StyledSettingsAvatar, StyledSettingsSection } from './styles';

import EditAvatarButtons from './EditAvatarButtons';

const ChangeAvatarBlock = () => {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <>
      <StyledSectionHeading>
        Фото профиля
      </StyledSectionHeading>
      <StyledSettingsSection>
        <StyledSettingsAvatar src={imageUrl} alt="profile avatar" />
        <EditAvatarButtons setImageUrl={setImageUrl} />
      </StyledSettingsSection>
    </>
  );
};

export default ChangeAvatarBlock;
