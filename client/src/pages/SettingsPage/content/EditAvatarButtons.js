/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { StyledButtonSection, StyledButton } from './styles';

const EditAvatarButtons = ({ setImageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  const handlerImageInput = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <StyledButtonSection>
      <StyledButton
        component="label"
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
      >
        загрузить
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handlerImageInput}
          hidden
        />
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        удалить
      </StyledButton>
    </StyledButtonSection>

  );
};

export default EditAvatarButtons;
