import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../service/authService'

export default class Profile extends Component {
  constructor(props) {
		super(props);
    this.state = { username: '', campus: '', course: ''};
    this.authService = new authService();
    this.userLoad()
	}
  
  

  userLoad() {
    this.authService.loggedin()
      .then(user=>this.setState({...this.state, user}))
	}
  
  
  render() {
    console.log(this.state)
    if(this.state){

    return(
      <div>
        <h1>Profile</h1>
        <ul>
          <p>Username</p>
          <li>{this.state.username}</li>
          <p>Campus</p>
          <li>{this.state.campus}</li>
          <p>Couse</p>
          <li>{this.state.course}</li>
        </ul>
          <Link to='/'>
            <button onClick={() => this.logoutUser()}>Logout</button>
          </Link> 
      </div>
    )
    }else{
      return(
        <h1>LOADING...</h1>
      )
    }
  }
}
