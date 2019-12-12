import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  loadUserInformation,
  edit as editImageService
} from "./../../services/authentication";

class EditImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const user = await loadUserInformation(id);
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
    console.log("USER", this.state);
  }

  handleFileChange(event) {
    console.log("ETF", event.target.files);
    const file = event.target.files[0];
   // console.log("F", event.target.files);
    this.setState({
      user: {
        ...this.state.user,
        image: file
      }
    });
  }

  async handleFormSubmission(event) {
    console.log("SUBMIT", this.state);
    event.preventDefault();
    const user = this.state.user;
    // const id = this.props.match.params.id;
    try {
      await editImageService(user);
      this.props.history.push(`/private`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Edit Profile Picture</h1>
        <form onSubmit={this.handleFormSubmission}>
          <input type="file" name="image" onChange={this.handleFileChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditImageView;
