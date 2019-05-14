import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', campus:'', course:'', image:'' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, campus, course, image }= this.state;
  
    this.service.signup(username, password, campus, course, image)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            campus: "",
            course: "",
            image: ""
        });
        this.props.setUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(this.state);
  }
      
  
  render(){
    return(
      <div>
        <h3>Signup form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Select your campus:</label>
          <select name="campus" onChange={ e => this.handleChange(e)} >
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Miami">Miami</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="México">México</option>
              <option value="São Paulo">São Paulo</option>
          </select>
          
          <label>Select your course:</label>
          <select name="course" onChange={ e => this.handleChange(e)} >
              <option value="WebDev">WebDev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
          </select>
                   
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} />
                   
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup;