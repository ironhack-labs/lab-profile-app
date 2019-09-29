import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column box ironBox is-10">
          <p className="mesaage is-success"></p>
          <form className="columns iron-height100" onSubmit={this.onSubmit}>
            <div className="column is-7 iron-cover ironHome">
              <h1 className="title is-2">Log in</h1>
              <div className="field">
                <label className="label">Name:</label>
                <input className="input ironInput" onChange={this.handleInput} type="text" name="username" />
              </div>
              <div className="field">
                <label className="label">Password:</label>
                <input className="input ironInput" onChange={this.handleInput} type="password" name="password" />
              </div>
              <div className="field">
                <p>If you don't have an account yet, you can crete your account <Link to={"/signup"}>here</Link></p>
              </div>
            </div>
            <div className="column iron-cover">
              <div className="column iron-between">
                <div className="columns ironForms ironForms-buttons">
                  <h2 className="title is-4">Hello</h2>
                  <h3>Awesome to have an IronProfile again!</h3>
                </div>
                <div className="columns">
                  <input className="button is-primary is-fullwidth" type="submit" value="Login" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;