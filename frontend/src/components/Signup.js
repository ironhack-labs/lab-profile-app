import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';
// import { Form, Input} from 'antd';

class Signup extends Component {
  state= {
    user:{}
  }

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push('/auth/login');
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
                <h1 className="title">Sign Up</h1>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input name="username" onChange={this.handleInput} className="input" type="text" placeholder="Alex Smith"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input name="password" onChange={this.handleInput} className="input" type="password" placeholder="******"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Course</label>
                  <div className="control">
                    <input name="course" onChange={this.handleInput} className="input" type="text" placeholder="Web Dev"/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Campus</label>
                  <div className="control">
                    <input name="campus" onChange={this.handleInput} className="input" type="text" placeholder="México"/>
                  </div>
                </div>
                </div>
                <div className="column is-one-third is-offset-one-third info-section">
                  <h1 className="title">Hello!</h1>
                  <h2>Welcome to Iron Profile</h2>
                  <p>If you signup you agree with all our terms and conditions where we can do whatever we want with the data</p>
                  <div className="control button-submit">
                    <button type="submit" className="button is-light is-fullwidth">Sign Up</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;