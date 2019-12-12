import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { loadUserInformation as loadUserInformationService } from './../../services/authentication';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h1>Profile</h1>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <h5>{user.course}</h5>
            <h5>{user.campus}</h5>
            <img src = {user.image} style ={{width : "20%"}}/>
            <button><Link to= {`/${user._id}/edit-image`} >edit image</Link></button>
          </div>
        )}
      </div>
    );
  }
}

export default PrivateView;
