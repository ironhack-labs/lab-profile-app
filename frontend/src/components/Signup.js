import React, { Component } from 'react';

import CenteredBox from './CenteredBox';

import AuthService from '../helpers/AuthService';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    campus: '',
    course: '',
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

    AuthService.signup(this.state)
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
    const { username, password, campus, course, message } = this.state;

    const leftPanel = (
      <>
        <h1 className="title">Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          {message && <p className="notification is-danger">{message}</p>}
          <label className="label">
            Username
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
          <label className="label">
            Campus
            <input
              type="text"
              name="campus"
              value={campus}
              className="input"
              onChange={this.handleInput}
            />
          </label>
          <label className="label">
            Course
            <input
              type="text"
              name="course"
              value={course}
              className="input"
              onChange={this.handleInput}
            />
          </label>
          <button type="submit" hidden />
        </form>
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

export default Signup;
