import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from './../AuthService';
import {Redirect} from "react-router-dom";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      photo: '',
      campus: 'Madrid',
      course: 'WebDev',
      redirect: false
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password, photo, course, campus} = this.state;

    this.authService.signup({username, password, photo, course, campus})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', photo: '', course:'', campus:'', redirect: true})
    })
    .catch(err => console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    if(name == "photo") {
      this.setState({...this.state, photo: e.target.files[0]})
    } else {
      this.setState({...this.state, [name]: value});
    }
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>SignUp</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          {/* Madrid, Barcelona, Miami, Paris, Berlin, Amsterdam, México, Sao Paulo */}
          <label>Campus</label>
          <select name="campus" id="campus" onChange={e => this.handleChange(e)}>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Mexico">Mexico</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>

          {/* WebDev, UX/UI, Data Analytics */}
          <label>Course</label>
          <select name="course" id="course" onChange={e => this.handleChange(e)}>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <label>Photo</label>
          <input type="file" name="photo" onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup"/>
        </form>

        <Link to="/">Back to home</Link>
      </div>
    )
  }
}
