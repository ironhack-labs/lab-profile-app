import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CenteredBox from './CenteredBox';

class Login extends Component {
  state = {
    name: '',
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

    console.log(this.state);
  };

  submitForm = () => {
    this.handleSubmit();
  };

  render() {
    const { name, password, message } = this.state;

    const leftPanel = (
      <>
        <h1 className="title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {message && <p className="notification is-danger">Error Message</p>}
          <label className="label">
            Name
            <input
              type="text"
              name="name"
              value={name}
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
            Create the Account
          </button>
        </div>
      </>
    );

    return <CenteredBox leftPanel={leftPanel} rightPanel={rightPanel} />;
  }
}

export default Login;
