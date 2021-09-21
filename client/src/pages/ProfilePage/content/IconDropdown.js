import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Menu, MenuItem, IconButton } from '@material-ui/core';

const IconDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === 'delete') {
      console.log('delete');
    }
    if (e.target.id === 'edit') {
      console.log('edit');
    }
    setIsOpen(false);
  };
  return (
    <>
      <IconButton>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id="delete" onClick={handleClose}>Удалить</MenuItem>
        <MenuItem id="edit" onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </>
  );
};

export default IconDropdown;
