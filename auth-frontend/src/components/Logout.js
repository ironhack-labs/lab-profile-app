import React, { Component } from 'react';
import AuthService from '../configs/authService';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }
  render() {
    this.service
      .logout()
      .then((response) => {
        this.props.getTheUser(null);
      })
      .catch((error) => console.log(error));
    return <Redirect to="/" />;
  }
}

export default Logout;
