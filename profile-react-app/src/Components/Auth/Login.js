import React, {Component} from 'react';
import {login} from '../../authService';
import {Link} from 'react-router-dom';
import InputField from '../Commun/InputField';
import Button from '../Commun/Button';

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
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <InputField title='Username' type='text' name='username' handleChange={this.handleChange} />
            <InputField title='Password' type='password' name='password' handleChange={this.handleChange} />
            <p>
              If you don't have an account yet, you
              <br/>can create your account <Link to='/signup'>here</Link>
            </p>
          </div>
          <div>
            <div>
              <strong>Hello!!</strong>
              <p>Awesome to have at<br/>IronProfile again!</p>
            </div>
              <div>
                <p>If you signup, you agree with all our
                  <br/>terms and conditions where we can
                  <br/>do whatever we want with the data!!!</p>
                <Button type='submit' name='Log in' />
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;