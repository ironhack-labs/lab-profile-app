import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/api/auth/signup", this.state)
      .then(response => {
        this.props.updateUser(response.data);
      })
      .catch(() => {});
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name="username"
            onChange={this.changeHandler}
            value={this.state.username}
            type="text"
            placeholder="username"
          ></input>
          <br></br>
          <input
            name="password"
            onChange={this.changeHandler}
            value={this.state.password}
            type="text"
            placeholder="password"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
