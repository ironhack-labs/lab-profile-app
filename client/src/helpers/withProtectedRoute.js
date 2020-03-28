import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Profile } from '../components/Profile';
import { AuthContext } from '../contexts/authContext';

const withProtectedRoute = Component => () => {
  const { user, isLoading } = useContext(AuthContext);

  return user ? (
    <Component />
  ) : !user && !isLoading ? (
    <Redirect to="/login" />
  ) : (
    <></>
  );
};

export const PrivatePage = withProtectedRoute(Profile);
