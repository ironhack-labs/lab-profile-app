import React from "react";

class Login extends React.Component {
  state = {
    auth: {},
    message: ""
  };

  handleChange = e => {
    let { auth } = this.state;
    auth[e.target.name] = e.target.value;
    this.setState({ auth });
  };

  render() {
    let { message, auth } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <br />
        <p style={{ color: "red" }}> {message} </p>
        <button onClick={() => this.props.logIn(auth)}>Log in</button>
      </div>
    );
  }
}

export default Login;
