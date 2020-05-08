import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import { Link } from 'react-router-dom';
 
class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log(username, password)
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div className='all'>
          <div className='left'>
          <h1>Login</h1>
          <form>
          <label>Username</label>
          <br/>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <br/>
          <input name="password" value={this.state.password} onChange={this.handleChange} />
          <br/>
        </form>
        <p className='text-login'>If you don't have an account yet, you can create you account <Link to={"/signup"}> here</Link>
        </p>
        </div>
        <div className='right'>
            <h2>Hello!!</h2>
            <h2 className='text'>Awesome to have you at IronProfile again!</h2>
            <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
            <button className='btn' onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </div>
    )
  }
}
 
export default Login;