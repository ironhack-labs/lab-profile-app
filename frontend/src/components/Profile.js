import React, { Component } from 'react';

import CenteredBox from './CenteredBox';

import AuthService from '../helpers/AuthService';

class Profile extends Component {
  state = {
    user: null,
    message: null
  };

  componentDidMount() {
    AuthService.loggedin()
      .then(({ data: user }) => {
        this.setState({ user });
      })
      .catch(({ response: { data } }) => {
        this.setState({ message: data.message });
      });
  }

  handleLogout = () => {
    AuthService.logout();
    this.props.history.push('/');
  };

  render() {
    const { user, message } = this.state;

    if (!user) return <p className="notification is-danger">{message}</p>;

    const leftPanel = (
      <>
        <h1 className="title">Profile</h1>
        <div>
          <p className="subtitle is-6">Username</p>
          <p className="title is-5">{user.username}</p>

          <p className="subtitle is-6">Campus</p>
          <p className="title is-5">{user.campus}</p>

          <p className="subtitle is-6">Course</p>
          <p className="title is-5">{user.course}</p>
        </div>
        <p>
          <button className="has-text-danger" onClick={this.handleLogout}>
            Logout
          </button>
        </p>
      </>
    );

    const rightPanel = (
      <>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quis maiores enim consequatur? Veniam ea sint
            perspiciatis quae ad iusto?
          </p>
        </div>
      </>
    );

    return <CenteredBox leftPanel={leftPanel} rightPanel={rightPanel} />;
  }
}

export default Profile;
