
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';


class Login extends Component {
    state = {
        user: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;    
        this.setState({ user });
    }

    logUser = (loggedUser) => {
        this.setState({ loggedUser })
    }

    onSubmit = (e) => {
        e.preventDefault();
        AUTH_SERVICE.login(this.state.user)
        .then((response) => {
            this.context.logUser(response.data.user);
            this.props.history.push('/profile');
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="columns is-centered jeit">
                <div className="column box main-wrapper is-8">
                   <div className="column is-5">
                   <h1 className="title is-2 titles-color">Login</h1>
                        <form onSubmit={this.onSubmit}>
                            <label className="label">Username</label>
                            <input className="input" type="text" name="username" placeholder="Username" onChange={this.handleInput}/>
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleInput}/>
                            <input className="button is-primary" type="submit" value="Login" />
                        </form>
                    <p>If you don't have an account yet, you can create your account here</p>
                   </div>
                </div>
            </div>
        )
    }
}

Login.contextType = MyContext;

export default Login
