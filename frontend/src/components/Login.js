import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';
import {Link} from 'react-router-dom';

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
        this.props.history.push('/auth/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="main-box">
          <div className="card">
            <form onSubmit={this.onSubmit}>
            <div className="columns">
              <div className="column is-one-third">
                <h1 className="title">Log In</h1>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input name="username" onChange={this.handleInput} className="input" type="text" placeholder="tony Stark"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input name="password" onChange={this.handleInput} className="input" type="password" placeholder="******"/>
                  </div>
                </div>
                <p>If you don't have an account yet, you can create your account <Link to="/auth/signup">here.</Link></p>
                </div>
                <div className="column is-one-third is-offset-one-third info-section">
                  <h1 className="title">Hello!</h1>
                  <h2>Welcome to Iron Profile</h2>
                  <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                  <div className="control button-submit">
                    <button type="submit" className="button is-light is-fullwidth">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;