import React, { Component } from "react";
import Profile from "../components/profile/index";
import AUTH_SERVICE from "../services/index";

class profile extends Component {
  state = {
    username: "",
    campus: "",
    course: "",
    image: ""
  };

  async componentDidMount() {
    const {data: {user}} = await AUTH_SERVICE.loggedIn();
    if (!user) return <h1>No user loged</h1>;
    const { username, campus, course, image } = user;
    this.setState({
      username,
      campus,
      course,
      image
    });
  }

  upload = e => {
    console.log(e.target.files)
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    AUTH_SERVICE.upload(formData)
      .then(({ data }) => {
        const {user: {username, campus, course, image}} = data
        this.setState({username, campus, course, image})
      })
      .catch(err => {
        console.log(err);
      });
  };

  logout = async () => {
    await AUTH_SERVICE.logOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <Profile
        username={this.state.username}
        campus={this.state.campus}
        course={this.state.course}
        image={this.state.image}
        upload={this.upload}
        logOut={this.logout}
      />
    );
  }
}

export default profile;
