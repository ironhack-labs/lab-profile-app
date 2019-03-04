import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    // const {user} = this.state
    const url = "http://localhost:3000/profile";

    // if (!user) return this.props.history.push('/login')
    axios
      .get(url, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { user } = this.state;
    console.log(user);
    if (!user) return <div>Loading...</div>;
    return (
      <div>
        <h1>Profile</h1>
        <p>
          Username:
          {user.username}
          <br />
          Campus:
          {user.campus}
          <br />
          Course:
          {user.course}
        </p>
        <div>
          <button
            onClick={() => {
              axios.get("http://localhost:3000/logout", {
                withCredentials: true
              });
            }}
          />
        </div>
      </div>
    );
  }
}
export default Profile;
