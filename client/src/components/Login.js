import React, { Component } from "react";
// import AuthService from "./auth-service";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    // this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/login", this.state)
      .then(response => {
        this.props.getUser(response.data);
        this.props.history.push("/profile");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Welcome back!</h3>
                      <form onSubmit={this.handleFormSubmit}>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}
                            required
                            autofocus
                          />
                          <label for="inputEmail">Username</label>
                        </div>

                        <div className="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}
                            required
                          />
                          <label for="inputPassword">Password</label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                        </div>
                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Log in
                        </button>
                        <div className="text-center"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
