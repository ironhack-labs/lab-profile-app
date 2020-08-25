import React, { Component } from 'react';
import AuthService from '../configs/authService';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.service = new AuthService();
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.service
      .login(username, password)
      .then((response) => {
        this.setState({
          username: '',
          password: '',
        });
        this.props.getUser(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div className="container d-flex flex-row">
        <div className="container-element">
          <h2>Log in</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <input className="btn" type="submit" value="Log In" />
          </form>
        </div>
        <div className="container-element d-flex flex-column justify-content-around">
          <div>
            <h2>Hello!!!</h2>
            <h3>Awesome to have at IronProfile again!</h3>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p>
              If you signup, you agree with all our terms and conditions where
              we can do whatever we want with the data
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
