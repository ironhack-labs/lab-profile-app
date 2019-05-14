import React, { Component } from "react";
import LoginForm from "./LoginForm";
import AuthService from "../../../services/auth";
import toastr from "toastr";

const service = new AuthService();

class Login extends Component {
  componentWillMount() {
    const user = localStorage.getItem("loggedUser");
    if (user) return this.props.history.push("/profile");
  }

  state = {
    form: {
      email: "",
      password: ""
    }
  };

  handleInpus = e => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState(form);
  };

  handleSubmit = () => {
    const { form } = this.state;
    service
      .login(form)
      .then(response => {
        if (response.err) return toastr.error(response.err);
        toastr.success("Successful Login");
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify(response.data)
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <LoginForm
          handleInputs={this.handleInpus}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
