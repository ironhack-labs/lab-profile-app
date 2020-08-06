import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../auth/authService';

function Logout(props) {
  const service = new AuthService();
  service.logout().then((response) => props.getUser(null));

  return <Redirect to="/" />;
}

export default Logout;
