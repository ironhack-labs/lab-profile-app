import React, { Component } from "react";
import { login as loginService } from "./../../services/authService";

export default class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const user = this.state.user;
    console.log(user);
    try {
      const userDocument = await loginService(user);
      const id = userDocument._id;
      // console.log(userDocument);
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
        <input type="password" id="password" name="password" onChange={this.handlerOnChange}/>

        <p>If you don't have an account you can signup <a href="/auth/signup">here</a></p>

        <div>
          <h3>Hello!!</h3>
          <h4>Nice to see you again and welcome back to IronProfile!</h4>

          <button>Log In</button>
        </div>     
      </form>
    );
  }
}
