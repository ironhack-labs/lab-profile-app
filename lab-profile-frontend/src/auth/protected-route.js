import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedRoute = ({ component: Component, user, callback, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} callback={callback} user={user} />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
export default protectedRoute;
