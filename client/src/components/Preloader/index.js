import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PreloaderWrap } from './styles';

const Preloader = () => (
  <PreloaderWrap>
    <CircularProgress />
  </PreloaderWrap>
);

export default Preloader;
