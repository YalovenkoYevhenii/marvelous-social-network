import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import {
  ROOT_PATH, AUTH_PATH, PROFILE_PATH, FRIENDS_PATH, SETTINGS_PATH,
} from '../../constants/routes';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';

const DashboardPage = lazy(() => import('../../pages/DashboardPage'));
const FriendsPage = lazy(() => import('../../pages/FriendsPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage'));
const SettingsPage = lazy(() => import('../../pages/SettingsPage'));
const AuthentificationPage = lazy(() => import('../../pages/AuthentificationPage'));

const AppLayout = () => (
  <>
    <Header />
    <Suspense fallback={<Preloader />}>
      <Switch>
        <PrivateRoute exact path={ROOT_PATH} component={DashboardPage} />
        <PrivateRoute path={`${PROFILE_PATH}/:profileId`} component={ProfilePage} />
        <PrivateRoute path={FRIENDS_PATH} component={FriendsPage} />
        <PrivateRoute path={SETTINGS_PATH} component={SettingsPage} />
        <Route path={AUTH_PATH} component={AuthentificationPage} />
      </Switch>
    </Suspense>
    <Footer />
  </>
);

export default AppLayout;
