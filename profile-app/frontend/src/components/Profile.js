import React, { Component } from "react";
import MY_SERVICE from "../services/index";

export default class Profile extends Component {
  state = {
    email: "",
    campus: "",
    course: "",
    image: ""
  };
  componentDidMount = async () => {
    const res = await MY_SERVICE
      .loggedin()
      .catch(() => this.props.history.push("/login"));
    if (res && res.data) {
      const {
        data: {
          user: { email, campus, course, image }
        }
      } = res;
      this.setState({ email, course, campus, image });
    }
  };

  logout = async () => {
    await MY_SERVICE.logout();
    this.props.history.push("/login");
  };

  handleFile = e => {
    const formData = new FormData();
    formData.append("photoURL", e.target.files[0]);
    MY_SERVICE
      .upload(formData)
      .then(({ data: { image } }) => {
        this.setState({ image });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div >
        <section>
          <h2>Profile</h2>
          <form>
            <h4>Username</h4>
            <p>{this.state.email}</p>
            <h4>Campus</h4>
            <p>{this.state.campus}</p>
            <h4>Course</h4>
            <p>{this.state.course}</p>
          </form>
          <a onClick={this.logout}>
            Log out
          </a>
        </section>
      </div>
    );
  }
}
