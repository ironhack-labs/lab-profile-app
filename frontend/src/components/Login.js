import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';

class Login extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h2>Login</h2>
          <form className="box" onSubmit={this.onSubmit}>
            <input onChange={this.handleInput} type="text" name="username" />

            <input onChange={this.handleInput} type="password" name="password" />

            <input type="submit" value="Login" />

          </form>
        </div>
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;
