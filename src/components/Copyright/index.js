import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
  copyright: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
});

const Copyright = () => {
  const { copyright } = useStyles();

  return (
    <Typography className={copyright} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Marvelous Social Network
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

export default Copyright;

// TODO: 21-23 use backticks
