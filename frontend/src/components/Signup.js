import React, { Component } from 'react';
import AuthService from '../auth/auth-service';
import { Link } from 'react-router-dom';
 
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '', 
      password: '',
      campus: '',
      course: ''
    };
    this.service = new AuthService();
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
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
            campus: "",
            course: ""
        });
        this.props.getUser(response)
        this.props.history.push('/profile')
    })
    .catch( error => console.log(error) )
  }
 
  render(){
    return(
        <div className="pl-5 pt-5">
          <form onSubmit={this.handleFormSubmit} style={{width: '20%'}} >
            <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            </div>
            
            <div className="form-group">
            <label>Password</label>
            <input className="form-control" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </div>

            <div className="form-group">
            <label>Campus</label>
            <select className="form-control" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)} >
              <option value=''></option>
              <option value='Madrid'>Madrid</option>
              <option value='Barcelona'>Barcelona</option>
              <option value='Miami'>Miami</option>
              <option value='Paris'>Paris</option>
              <option value='Berlin'>Berlin</option>
              <option value='Amsterdam'>Amsterdam</option>
              <option value='Mexico'>Mexico</option>
              <option value='Sao Paulo'>Sao Paulo</option>
              <option value='Lisbon'>Lisbon</option>
            </select>
            </div>

            <div className="form-group">
            <label>Course</label>
            <select className="form-control" name="course" value={this.state.course} onChange={ e => this.handleChange(e)} >
              <option value=''></option>
              <option value='Web Dev'>Web Dev</option>
              <option value='UX/UI'>UX/UI</option>
              <option value='Data Analytics'>Data Analytics</option>
            </select>
            </div>
            
            <input className="btn btn-primary" type="submit" value="Signup" />
          </form>
     
          <p>Already have an account? 
              <Link to={"/login"}> Login</Link>
          </p>
     
        </div>
      )
  }
}
 
export default Signup;