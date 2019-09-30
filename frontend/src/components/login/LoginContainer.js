import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/auth';
import { MyContext } from '../../context';

class LoginContainer extends Component {
    state = {
        user: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;    this.setState({ user });
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
            <div>
                <div className="gral-container-wrapper">
                    <div className="gral-container">
                        <h1>Login</h1>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" name="username" placeholder="Username" onChange={this.handleInput}/>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleInput}/>
                            <input type="submit" value="login"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

LoginContainer.contextType = MyContext;

export default LoginContainer