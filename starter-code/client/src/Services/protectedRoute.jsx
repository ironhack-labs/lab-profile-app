import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const isAllowed = props.verify();
  if (isAllowed && props.render) {
    return <Route path={props.path} render={props.render} />;
  } else if (isAllowed) {
    return <Route path={props.path} component={props.component} />;
  } else {
    return <Redirect to={props.redirect} />;
  }
};

export default ProtectedRoute;