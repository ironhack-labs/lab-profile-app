import React, {Component} from 'react';
import {signup} from '../../authService';
import InputField from '../Commun/InputField';
import Button from '../Commun/Button';

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        username: '',
        campus: '',
        course: '',
        password: '',
        confirmPassword: '',
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
    signup(this.state.user, this.props.history)
  }

  render(){
    return(
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <InputField title='Username' type='text' name='username' handleChange={this.handleChange} />
            <InputField title='Campus' type='text' name='campus' handleChange={this.handleChange} />
            <InputField title='Course' type='text' name='course' handleChange={this.handleChange} />
            <InputField title='Password' type='password' name='password' handleChange={this.handleChange} />
            <InputField title='Confirm Password' type='password' name='confirmPassword' handleChange={this.handleChange} />
          </div>
          <div>
            <div>
              <strong>Hello!!</strong>
              <p>Welcome to IronProfile!</p>
            </div>
              <div>
                <p>If you signup, you agree with all our
                  <br/>terms and conditions where we can
                  <br/>do whatever we want with the data!!!</p>
                <Button type='submit' name='Create the Account' />
              </div>
          </div>
          <div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;