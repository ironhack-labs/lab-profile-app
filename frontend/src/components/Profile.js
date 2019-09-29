import React, { Component } from 'react';
import { MyContext } from '../context';

export default class Profile extends Component {
  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <button onClick={this.context.logOut}>Log out</button>
      </div>
    );
  }
}

Profile.contextType = MyContext;