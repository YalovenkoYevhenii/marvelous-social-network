import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import {
  ROOT_PATH, AUTH_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import DashboardPage from '../../pages/DashboardPage';
import PostsPage from '../../pages/PostsPage';
import ProfilePage from '../../pages/ProfilePage';
import SettingsPage from '../../pages/SettingsPage';
import AuthentificationPage from '../../pages/AuthentificationPage';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AppLayoutContent = () => (
  <>
    <Header />
    <Switch>
      <PrivateRoute exact path={ROOT_PATH} component={DashboardPage} />
      <PrivateRoute path={PROFILE_PATH} component={ProfilePage} />
      <PrivateRoute path={POSTS_PATH} component={PostsPage} />
      <PrivateRoute path={SETTINGS_PATH} component={SettingsPage} />
      <Route path={AUTH_PATH} component={AuthentificationPage} />
    </Switch>
    <Footer />
  </>
);

export default AppLayoutContent;
