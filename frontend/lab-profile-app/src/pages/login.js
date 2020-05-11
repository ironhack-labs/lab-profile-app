import React, { Component } from "react";
import Login from "../components/login/index";
import AUTH_SERVICE from '../services/index'

class login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputs = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    AUTH_SERVICE.login({ username, password})
      .then(({ msg }) => {
        this.setState({
          username: "",
          password: ""
        });
        alert('loged - :)');
        this.props.history.push("/profile");
      })
      .catch(() => {
        alert(":C - error");
      });
  };
  render() {
    return <Login 
        handleInputs={this.handleInputs}
        login={this.login}
        username={this.state.username}
        password={this.state.password}
    />;
  }
}

export default login