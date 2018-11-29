import React, {Component} from 'react';
import {login} from '../../authService';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        username: '',
        password: '',
      }
    }
  }

  handleChange = (e) => {
    const {user} = this.state;
    let field = e.target.name;
    user[field] = e.target.value;
    this.setState({user});
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    login(this.state.user, this.props.history)
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

export default Login;