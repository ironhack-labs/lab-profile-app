import React from "react";
import { Input } from "../components/Input";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
export class Loginform extends React.Component {
  constructor() {
    super();
    this.state = { info: { username: "", password: "" } };
  }

  handleChange = (e, infoname) => {
    const { info } = this.state;
    info[infoname] = e.target.value;
    this.setState({ info: this.state.info });
  };

  submit = () => {
    const { history, dispatch } = this.props;
    const { username, password } = this.state.info;
    AuthAPI.login({ username, password }).then(({data}) => {
      dispatch({
        type: "LOGIN",
        user: data
      });
      history.push("/");
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <Input data={username} infoname="username" func={this.handleChange} />
        <Input
          data={password}
          type="password"
          infoname="password"
          func={this.handleChange}
        />
        <button onClick={() => this.submit()} className="button is-primary">
          Login
        </button>
      </div>
    );
  }
}

export const Login = connect()(withRouter(Loginform));
