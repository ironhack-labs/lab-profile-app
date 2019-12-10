import React, { Component } from "react";

export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      passwordHash: "",
      campus: "",
      course: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div>
            <label>I agree to the terms & conditions:</label>
            <input
              type="checkbox"
              name="secrecy"
              checked={this.state.secrecy}
              onChange={event => this.handleChange(event)}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;