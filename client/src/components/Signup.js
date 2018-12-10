import React, { Component } from "react";
import AuthService from "./Tools";
import {Redirect} from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: "",
      redirect: false
    };
    this.authService = new AuthService();
    this.user = {};

  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {username, password, campus, course} = this.state;
    this.authService.signup({username, password, campus, course})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', campus: '',course: '', redirect: true})
    });
  };

  handlerState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  };

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="ironprofile">
      <h1>Signup</h1>
        <form action="submit" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            id="name"
            onChange={e => this.handlerState(e)}/>
          <input
            type="password"
            name="password"
            id="pass"
            onChange={e => this.handlerState(e)}/>
          <select id="campus" name="campus" defaultValue="Campus" onChange={e => this.handlerState(e)}>
            <option >Select Campus</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Miami">Miami</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="México">México</option>
            <option value="Sao Paulo">Sao Paulo</option>
          </select>
          <select id="course" name="course" defaultValue="Course" onChange={e => this.handlerState(e)}>
          <option >Select Course</option>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>
          <input className="submitbutton" type="submit" />
        </form>
      </div>
    );
  }
}
