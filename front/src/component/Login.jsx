import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../service/authService';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new authService();
    
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        console.log("Bien")
        this.setState({
          username: username,
          password: password,
          error: false,
          redirect:true
        });

      
      })
      .catch( error => {console.log(error) 
        this.setState({
          error:true
        })
      })
    }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({...this.state, [name]: value });
  }

  render() {

    return (
    <div>
      {this.state.redirect ? <Redirect to="/profile" /> : ""}
      <h3>Please, login to our site</h3>
      <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          <input type="submit" value="Login" />
      </form>

      <p>If you don't have an account yet, you can create your account</p>
      <Link to={'/signup'}>here</Link>
      <h2>{this.state.error ? 'Te has columpiado' : ''}</h2>
    </div>)
  }
}

export default Login;