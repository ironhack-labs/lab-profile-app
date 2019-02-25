import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import "../auth/Signup.css";
import "../Home.css";


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', campus: '', course:''};
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
            campus: "",
            course: ""
        });
        this.props.getUser(response) //Ejecutas la función con los datos del usuario.
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
        <div className="box-container">
          <div className="container">
            <div className="row">
              <div className="box-text col-6">
                <h2>Sign up</h2>
                <form onSubmit={this.handleFormSubmit} className="form-group">

                  <label>Username:</label>
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                  
                  <label>Password:</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

                  <label>Campus:</label>
                  <input type="text" className="form-control" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)} />

                  <label>Course:</label>
                  <input type="" className="form-control" name="course" value={this.state.course} onChange={ e => this.handleChange(e)} />
                  
                  <input type="submit" value="Signup" className="button"/>
                </form>
              </div>

              <div className="col-5">
                <p>Already have account? 
                    <Link to={"/login"}> Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Signup;