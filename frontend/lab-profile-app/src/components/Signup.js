import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInutChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleInutChange}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleInutChange}
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default SignUp;
