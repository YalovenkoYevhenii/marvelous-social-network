/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Menu, MenuItem, IconButton } from '@material-ui/core';

import { StyledPostBlockMenu } from 'reusableStyles';

const IconDropdownMenu = ({ setPostAction }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setPostAction(e.target.id);
    setAnchorEl(null);
  };

  return (
    <StyledPostBlockMenu>
      <IconButton onClick={handleOpen}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="edit" onClick={handleClose}>Редактировать</MenuItem>
        <MenuItem id="delete" onClick={handleClose}>Удалить</MenuItem>
      </Menu>
    </StyledPostBlockMenu>
  );
};

export default IconDropdownMenu;
