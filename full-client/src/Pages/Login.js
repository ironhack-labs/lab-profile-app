import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/authService';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (e, setUser) => {
    e.preventDefault();
    // Esperamos a que el registro se haga en la base de datos
    await login(this.state);
    // una vez terminamos, redirigimos a login para que la persona haga login
    this.props.history.push('/profile');
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="username"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

export default Login;
