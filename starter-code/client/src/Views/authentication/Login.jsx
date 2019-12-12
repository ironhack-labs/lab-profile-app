import React, { Component } from 'react'

import {signIn as signInService} from '../../Services/authentication'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmissionLogIn = this.handleSubmissionLogIn.bind(this);
  }

handleInputChange(event) {
  const nameInput = event.target.name;
  const value = event.target.value;
  this.setState({
    [nameInput]:value
  });
}

async handleSubmissionLogIn(event) {
event.preventDefault();
try {
const user = await signInService(this.state);
this.props.changeAuthenticationStatus(user);
this.props.loadUserInformation();  //this is repeating the step above
this.props.history.push(`/private`);
} catch (error) {
  console.log(error);
  //create a redirect to error page
}
}

  render() {
    return (
      <div className='border m-5 border-success p-5'>
       <form onSubmit={this.handleSubmissionLogIn} className='text-center d-flex flex-column align-items-center w-100'>
       <h3 className="text-center mb-3">Sign in</h3>
        <label htmlFor="username">Username</label> <input type="text" name="username" className='w-50' onChange={this.handleInputChange} value={this.state.username}/>
        <br/>
         <label htmlFor="password w-50">Password</label><input type="password" name="password" className='w-50' onChange={this.handleInputChange} value={this.state.password}/>
         <button className="btn btn-success m-3">Log in</button>
       </form> 
      </div>
    )
  }
}

export default Login
