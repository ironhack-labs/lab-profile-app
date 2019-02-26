import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './Auth-service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    
    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });
        
      console.log(response)
        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({...this.state, [name]: value });
  }

  render() {

    return (
    <div>
      <h3>Please, login to our site</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="Login" />
      </form>
      If you don't have an account yet, you can create your account 
      <Link to={'/signup'}> here</Link>
      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Login;