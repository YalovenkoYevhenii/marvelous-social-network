import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import {
  ROOT_PATH, AUTH_PATH, PROFILE_PATH, POSTS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Preloader from './Preloader';

const DashboardPage = lazy(() => import('../../pages/DashboardPage'));
const PostsPage = lazy(() => import('../../pages/PostsPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage'));
const SettingsPage = lazy(() => import('../../pages/SettingsPage'));
const AuthentificationPage = lazy(() => import('../../pages/AuthentificationPage'));

const AppLayout = () => (
  <>
    <Header />
    <Suspense fallback={<Preloader />}>
      <Switch>
        <PrivateRoute exact path={ROOT_PATH} component={DashboardPage} />
        <PrivateRoute path={PROFILE_PATH} component={ProfilePage} />
        <PrivateRoute path={POSTS_PATH} component={PostsPage} />
        <PrivateRoute path={SETTINGS_PATH} component={SettingsPage} />
        <Route path={AUTH_PATH} component={AuthentificationPage} />
      </Switch>
    </Suspense>
    <Footer />
  </>
);

export default AppLayout;
