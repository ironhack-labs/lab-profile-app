import React, {Component} from 'react';
import {login} from '../../authService';
import {Link} from 'react-router-dom';
import InputField from '../Commun/InputField';
import FormButton from '../Commun/FormButton';

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
      <form onSubmit={this.handleSubmit}>
        <div className='main-card'>
          <div className='card-left'>
            <div>
              <h1>Log in</h1>
            </div>
            <div className='form-fiels-wraper'>
              <InputField title='Username' type='text' name='username' handleChange={this.handleChange} />
              <InputField title='Password' type='password' name='password' handleChange={this.handleChange} />
            </div>
            <div>
              <p className='small-text'>
                If you don't have an account yet, you
                <br/>can create your account <Link to='/signup'>here</Link>
              </p>
            </div>
          </div>
          <div className='card-rigth'>
            <div>
              <strong className='card-text'>Hello!!</strong>
              <p className='card-text'>Awesome to have at<br/>IronProfile again!</p>
            </div>
            <div>
              <p className='small-text'>If you signup, you agree with all our
                <br/>terms and conditions where we can
                <br/>do whatever we want with the data!!!</p>
              <div>
                <FormButton className='form-button button' type='submit' name='Log in' />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Login;