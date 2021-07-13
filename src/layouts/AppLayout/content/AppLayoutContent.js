import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import {
  rootPath, profilePath, postsPath, settingsPath, authPath,
} from '../../../utils/routes';

import DashboardPage from '../../../pages/DashboardPage/DashboardPage';
import PostsPage from '../../../pages/PostsPage/PostsPage';
import ProfilePage from '../../../pages/ProfilePage/ProfilePage';
import SettingsPage from '../../../pages/SettingsPage/SettingsPage';
import AuthentificationPage from '../../../pages/AuthentificationPage/AuthentificationPage';

import NavBar from '../../../components/NavBar/NavBar';

const AppLayoutContent = () => (
  <>
    <header>
      Приветули
      <NavBar />
    </header>
    <Switch>
      <PrivateRoute exact path={rootPath} component={DashboardPage} />
      <PrivateRoute path={profilePath} component={ProfilePage} />
      <PrivateRoute path={postsPath} component={PostsPage} />
      <PrivateRoute path={settingsPath} component={SettingsPage} />
      <Route path={authPath} component={AuthentificationPage} />
    </Switch>
  </>
);

export default AppLayoutContent;
