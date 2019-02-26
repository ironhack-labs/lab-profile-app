import React, { Component } from 'react'
import authService from "../service/authService"
import {Redirect} from 'react-router-dom';

export default class Signup extends Component {
  constructor(props) {
  super(props)
  this.state ={
    username: "",
    password: "",
    campus: "",
    course: "",
    redirect: false
  }

  this.authService = new authService()
}
  
  handlerSubmit = (e) => {
    e.preventDefault();

    this.authService.signup(this.state)
    .then((response) => {
      this.setState({...this.state, redirect:true})

    })
  }

  handlerChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({...this.state, [inputName]:inputValue})
  }

  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to="/profile" /> : ""}
        <form onSubmit={this.handlerSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={(e) => this.handlerChange(e)}></input>
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => this.handlerChange(e)}></input>
          <label>Campus</label>
          <input type="text" name="campus" onChange={(e) => this.handlerChange(e)}></input>
          <label>Course</label>
          <input type="text" name="course" onChange={(e) => this.handlerChange(e)}></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
