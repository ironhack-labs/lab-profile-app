import React, {Component} from 'react';
import AuthService from '../../auth/auth-service';
import {Redirect} from 'react-router-dom';
export class Logout extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService();
    }
    render() {
        this
            .service
            .logout()
            .then((response) => {
                this
                    .props
                    .callback(null);
            })
            .catch((error) => console.log(error));
        return <Redirect to={'/'}/>;
    }
}
export default Logout;
