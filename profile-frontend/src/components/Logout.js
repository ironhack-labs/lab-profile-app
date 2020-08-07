import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../../src/auth/auth-services';

export class Logout extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService();
    }
    render() {
        this.service
            .logout()
            .then((response) => {
                this.props.callback(null);
            })
            .catch((error) => console.log(error));
        return <Redirect to={'/login'} />;
    }
}
export default Logout;