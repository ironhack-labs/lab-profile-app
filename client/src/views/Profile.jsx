import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
    };
  }
  render() {
    return (
      (!this.props.user && <div>Loading</div>) || (
        <div>Username: {this.props.user._id}</div>
      )
    );
  }
}
