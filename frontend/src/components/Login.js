import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CenteredBox from './CenteredBox';

import AuthService from '../helpers/AuthService';

class Login extends Component {
  state = {
    username: '',
    password: '',
    message: null
  };

  handleInput = ({ target: input }) => {
    const { name, value } = input;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    if (e) e.preventDefault();

    AuthService.login(this.state)
      .then(({ data: user }) => {
        localStorage.setItem('userId', user._id);
        this.props.history.push('/profile');
      })
      .catch(({ response: { data } }) => {
        this.setState({ message: data.message });
      });
  };

  submitForm = () => {
    this.handleSubmit();
  };

  render() {
    const { username, password, message } = this.state;

    const leftPanel = (
      <>
        <h1 className="title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {message && <p className="notification is-danger">{message}</p>}
          <label className="label">
            Name
            <input
              type="text"
              name="username"
              value={username}
              className="input"
              onChange={this.handleInput}
            />
          </label>
          <label className="label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              className="input"
              onChange={this.handleInput}
            />
          </label>
          <button type="submit" hidden />
        </form>
        <p>
          If you don't have an account yet, you can create your account{' '}
          <Link to="/signup">here</Link>.
        </p>
      </>
    );

    const rightPanel = (
      <>
        <div>
          <h1 className="title">Hello</h1>
          <h2 className="subtitle">Welcome to IronProfile</h2>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quis maiores enim consequatur? Veniam ea sint
            perspiciatis quae ad iusto?
          </p>
          <br />
          <button className="button is-block is-dark" onClick={this.submitForm}>
            Log in
          </button>
        </div>
      </>
    );

    return <CenteredBox leftPanel={leftPanel} rightPanel={rightPanel} />;
  }
}

export default Login;
