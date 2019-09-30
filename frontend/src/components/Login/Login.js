import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/auth';
import { MyContext } from '../../context';
import LoginForm from './LoginForm';

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
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {user} = this.state
    return (
      <div>
        <h2>Log in</h2>
        <LoginForm />
        
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;
