/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthentificated } from '../../utils/helpers/isAuthentificated';

// eslint-disable-next-line react/prop-types

// if (isAuthentificated) return <Route component={Component} {...rest} />;
// return <Redirect to="/auth" />;

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line max-len
/* const PrivateRoute = ({ component: Component, ...rest }) => (isAuthentificated ? <Route component={Component} {...rest} render={props => } /> : <Redirect to="/auth" />
); */

const PrivateRoute = ({ children, ...rest }) => (
  isAuthentificated
    ? (
      <Route {...rest}>
        {children}
      </Route>
    )
    : <Redirect to="/auth" />
);

export default PrivateRoute;
