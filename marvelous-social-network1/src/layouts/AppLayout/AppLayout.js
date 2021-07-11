import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import Header from '../../components/Header/Header';

const AppLayout = () => (
  <>
    <Header />
    <Switch>
      <PrivateRoute exact path="/" component={ProfileLayout} />

    </Switch>
  </>
);

export default AppLayout;
