import React, { Component } from "react";
import { signup as createUserService } from "./../../services/authService";

export default class Signup extends Component {
  state = {
    user: {
      username: "",
      password: "",
      campus: "",
      course: ""
    }
  };

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const user = this.state.user;
    console.log(user);
    try {
      const userDocument = await createUserService(user);
      const id = userDocument._id;
      // I have no idea what's happening in this line!
      this.props.history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  handlerOnChange = (e) => {
    console.log("Event: ", e);
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    this.setState({
      // [name]: value
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" onChange={this.handlerOnChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={this.handlerOnChange} />

        <label htmlFor="campus">Campus</label>
        <input type="text" id="campus" name="campus" onChange={this.handlerOnChange} />

        <label htmlFor="course">Course</label>
        <input type="text" id="course" name="course" onChange={this.handlerOnChange} />

        <div>
          <h3>Hello!!</h3>
          <h4>Welcome to IronProfile!</h4>

          <p>By signing up you agree that I own your soul</p>
          <button>Create an account</button>
        </div>     
      </form>
    );
  }
}
