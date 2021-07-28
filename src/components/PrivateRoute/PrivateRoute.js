/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AUTH_PATH } from '../../constants/routes';
import { useContextApp } from '../../App/context';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { user } = useContextApp();
  return (
    user ? <Route component={Component} {...props} /> : <Redirect to={AUTH_PATH} />
  );
};

export default PrivateRoute;
