import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import DashboardPage from '../../../pages/profilePages/DashboardPage/DashboardPage';
import Header from '../../../components/Header/Header';
import AuthentificationPage from '../../../pages/AuthentificationPage/AuthentificationPage';

const AppLayoutContent = () => (
  <>
    <Header />
    <AuthentificationPage />
    <Switch>
      <PrivateRoute exact path="/" component={DashboardPage} />

    </Switch>
  </>
);

export default AppLayoutContent;
