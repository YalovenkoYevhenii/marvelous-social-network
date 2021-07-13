import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthentificated } from '../../utils/helpers/isAuthentificated';

// eslint-disable-next-line react/prop-types
/* const PrivateRoute = ({ component: Component, ...rest }) => {
  if (isAuthentificated) return <Route component={Component} {...rest} />;
  return <Redirect to="/login" />;
}; */

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => (isAuthentificated ? <Route component={Component} {...rest} /> : <Redirect to="/auth" />
);

export default PrivateRoute;
