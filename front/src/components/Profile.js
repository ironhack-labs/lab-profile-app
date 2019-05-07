import React, { Component } from 'react';
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', campus: '' , course:'', image:'' };
    this.service = new AuthService();
  }

  handleLogoutSubmit = (event) => {
    this.service.logout()
      .then(()=>{
        return <Redirect to='/' />
      })
      .catch(()=>{
        return <Redirect to='/' />
      })
  }

  handleImageSubmit = (event) => {
    this.service.uploadPicture(this.state.image)
      .then(()=>{
        return <Redirect to='/' />
      })
      .catch(()=>{
        return <Redirect to='/' />
      })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h3>Profile</h3>
        <p>Username</p>
        <p>{this.props.username}</p>
        <p>Campus</p>
        <p>{this.props.campus}</p>
        <p>Course</p>
        <p>{this.props.course}</p>
        <img src={this.props.image}></img>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Update picture</label>
            <input type="file" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} />
            <input type="submit" value="Update image" ></input>
          </fieldset>
        </form>


        <form onSubmit={this.handleLogoutSubmit}>
          <input type="submit" value="Logout" ></input>
        </form>
      </div>
    )

  }
}

export default Profile;