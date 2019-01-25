import React from "react";
import { AuthAPI } from "../lib/auth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { errorMessageAction, login, clearMessages } from "../lib/redux/actions";

class _SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: ""
    };
  }

  handleLogin() {
    const { username, password, campus, course } = this.state;
    const { history, dispatch } = this.props;
    AuthAPI.signup(username, password, campus, course)
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
    const { username, password, campus, course } = this.state;
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

        <div className="field">
          <label className="label">Campus</label>
          <div className="control">
            <div className="select">
              <select
                value={campus}
                onChange={e => this.setState({ campus: e.target.value })}
              >
                <option defaultValue value="" />
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Miami">Miami</option>
                <option value="Paris">Paris</option>
                <option value="Berlin">Berlin</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Mexico">Mexico</option>
                <option value="Sao Paulo">Sao Paulo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Course</label>
          <div className="control">
            <div className="select">
              <select
                value={course}
                onChange={e => this.setState({ course: e.target.value })}
              >
                <option value="" />
                <option value="WebDev">WebDev</option>
                <option value="UX/UI">UX/UI</option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </div>
          </div>
        </div>

        <button
          className="button is-success"
          onClick={() => this.handleLogin()}
        >
          Signup
        </button>
      </div>
    );
  }
}

export const SignupForm = connect()(withRouter(_SignupForm));
