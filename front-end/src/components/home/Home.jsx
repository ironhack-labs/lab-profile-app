import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Home</h1>
                <Link to='/signup'><button>Sign up</button></Link>
                <Link to='/login'><button>Login</button></Link>
            </div>
        )
    }
}