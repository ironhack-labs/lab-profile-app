import React, { Component } from 'react';
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '',campus:'',course:'' , redirectToReferrer: false};
    this.service = new AuthService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;

    this.service.signup(username, password, campus, course)
    .then( response => {        
        this.setState({
            username: "", 
            password: "",
            redirectToReferrer : true
        });
        this.props.getUser(response.user)    
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
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
        return <Redirect to="/login" />
    }
    return(
      <div>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Campus:</label>
            <input type="text" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label>Course:</label>
            <input type="text" name="course" value={this.state.cou} onChange={ e => this.handleChange(e)} />
          </fieldset>
                              
          <input type="submit" value="Sign up" />
        </form>

        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>

    )

  }

}


export default Signup;