import React from "react";
import { AuthAPI } from "../lib/auth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { errorMessageAction, login, clearMessages } from "../lib/redux/actions";

class _LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin() {
    const { username, password } = this.state;
    const { history, dispatch } = this.props;
    AuthAPI.login(username, password)
      .then(() => {
        dispatch(clearMessages());
        dispatch(login(username,password));
        history.push("/profile");
      })
      .catch(e => {
        dispatch(errorMessageAction("Cannot Login"));
      });
  }

  render() {
    const { username, password} = this.state;
    return (
      <div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
        </div>

        <button
          className="button is-success"
          onClick={() => this.handleLogin()}
        >
          Login
        </button>
      </div>
    );
  }
}

export const LoginForm = connect()(withRouter(_LoginForm));
