import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();
  console.log();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
