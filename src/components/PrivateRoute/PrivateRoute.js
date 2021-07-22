/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthentificated } from '../../utils/helpers/isAuthentificated';
import { AUTH_PATH } from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...props }) => (
  isAuthentificated
    ? <Route component={Component} {...props} /> : <Redirect to={AUTH_PATH} />
);

export default PrivateRoute;
