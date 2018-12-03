import React, {Component} from 'react';
import {signup} from '../../authService';
import InputField from '../Commun/InputField';
import FormButton from '../Commun/FormButton';

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
      <form onSubmit={this.handleSubmit}>
        <div className='main-card'>
          <div className='card-left'>
            <div>
              <h1>SignUp</h1>
            </div>
            <div className=''>
              <InputField title='Username' type='text' name='username' handleChange={this.handleChange} />
              <InputField title='Campus' type='text' name='campus' handleChange={this.handleChange} />
              <InputField title='Course' type='text' name='course' handleChange={this.handleChange} />
              <InputField title='Password' type='password' name='password' handleChange={this.handleChange} />
              <InputField title='Confirm Password' type='password' name='confirmPassword' handleChange={this.handleChange} />
            </div>
          </div>
          <div className='card-rigth'>
            <div className='card-text'>
              <strong >Hello!!</strong>
              <p>Welcome to IronProfile!</p>
            </div>
              <div>
                <p className='small-text'>If you signup, you agree with all our
                  <br/>terms and conditions where we can
                  <br/>do whatever we want with the data!!!</p>
                <FormButton className='form-button button' type='submit' name='Create the Account' />
              </div>
          </div>
            <div>
          </div>
        </div>
      </form>
    )
  }
}

export default SignUp;