import React, { Component } from 'react';
import AuthService from './AuthService';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { username: props.username, campus: props.campus , course:props.course, image:'' };
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
      event.preventDefault();

    this.service.uploadPicture(this.state)
      .then((response)=>{
          this.setState({
              ...this.state,
              image : response.userUpdated.image
          })
      })
      .catch(()=>{
        return <Redirect to='/' />
      })
  }

  handleChange = (event) => {

    const {name, value} = event.target;
    this.setState({[name]: value});

  }

    handleChangeFile = (event) => {
        const {name, files} = event.target;
        this.setState({[name]: files});

    }

  render() {
      console.log(this.state);
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
        <form onSubmit={ e => this.handleImageSubmit(e)}>
          <fieldset>
            <label>Update picture</label>
            <input type="file" name="image"  onChange={ e => this.handleChangeFile(e)} />
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