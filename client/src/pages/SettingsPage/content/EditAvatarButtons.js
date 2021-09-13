/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';

import useRequest from 'hooks/useRequest';
import { useContextSettingsPage } from '../context';
import { StyledButtonSection, StyledButton } from './styles';

const EditAvatarButtons = ({ setImageUrl, imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { setOptions } = useRequest();
  const { deleteRequestOptions, user: { avatar } } = useContextSettingsPage();

  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  const handlerImageInput = (e) => {
    if (imageUrl) {
      e.preventDefault();
      setImageUrl(null);
    }
    setSelectedImage(e.target.files[0]);
  };

  const handlerImageInputCancel = (e) => {
    if (imageUrl) {
      e.preventDefault();
      setImageUrl(null);
    }
  };

  const handlerDeleteAvatar = () => {
    setOptions({
      ...deleteRequestOptions,
      url: process.env.REACT_APP_URL_SETTINGS_DELETE_AVATAR,
      data: { avatar },
    });
  };

  return (
    <StyledButtonSection>
      <StyledButton
        component="label"
        variant="contained"
        color={imageUrl ? 'white' : 'primary'}
        startIcon={imageUrl ? <CancelIcon /> : <CloudUploadIcon />}
      >
        {imageUrl ? 'убрать' : 'загрузить'}
        <input
          name="avatar"
          type="file"
          accept="image/*"
          onClick={handlerImageInputCancel}
          onChange={handlerImageInput}
          hidden
        />
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        onClick={handlerDeleteAvatar}
        startIcon={<DeleteIcon />}
      >
        удалить
      </StyledButton>
    </StyledButtonSection>

  );
};

export default EditAvatarButtons;
