import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import { Link } from 'react-router-dom'

class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = { username: '', password: '', campus: '', course: ''};
      this.service = new AuthService();
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.campus;
        const course = this.state.course;
       
        this.service.signup(username, password)
        .then( response => {
            this.setState({
                username: "", 
                password: "",
                campus: "",
                course: "",
            });
            // this.props.getUser(response)
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
                <h1>Sign Up</h1>
                <form >
                <label>Username</label>
                <br/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                <label>Password</label>
                <br/>
                <input name="password" value={this.state.password} onChange={this.handleChange} />
                <br/>
                <label>Campus</label>
                <br/>
                <input name="campus" value={this.state.campus} onChange={this.handleChange} />
                <br/>
                <label>Course</label>
                <br/>
                <input name="course" value={this.state.course} onChange={this.handleChange} />
              </form>
              </div>
              <div className='right'>
                  <h2>Hello!!</h2>
                  <h2 className='text'>Welcome to IronProfile!</h2>
                  <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                  <button 
                    className='btn' 
                    onClick={this.handleFormSubmit}
                  >
                      Create the Account
                  </button>
              </div>
         
            </div>
          )
    }
}

export default SignUp;
