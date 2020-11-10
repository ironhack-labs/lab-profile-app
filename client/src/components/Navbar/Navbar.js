import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../../services/authService';

export default class Navbar extends Component {

    service = new AuthService()

    logout = () => {
        this.service.logout()
        .then(response => {
            console.log(response)
            this.props.getTheUser(null)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <nav>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout" onClick={this.logout}>Logout</Link>
            </nav>
    )
}
}
