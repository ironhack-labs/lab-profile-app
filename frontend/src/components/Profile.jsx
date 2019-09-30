import React, { Component } from 'react'
import AuthService from '../AuthService'

export default class Profile extends Component {
  state = {
    user: null,
    message: null
  }

  componentDidMount() {
    AuthService.loggedin()
      .then(({ data: user }) => {
        this.setState({ user })
      })
      .catch(({ response: { data } }) => {
        this.setState({ message: data.message });
      })
  }


  handleLogout = () => {
    AuthService.logout();
    this.props.history.push('/');
  };

  render() {
    const { user, message } = this.state;

    if (!user) return <p>{message}</p>;

    return (
      <div className="container bg">
        <div className="container">
      <div className="jumbotron">
  <h1 className="display-4">Welcome to IronProfile</h1>
</div>
        </div>
<h1 className="title">Profile</h1>
<div>
<ul class="list-group">
  <li class="list-group-item active">Username:</li>
  <li class="list-group-item">{user.username}</li>
  <li class="list-group-item active">Campus:</li>
  <li class="list-group-item">{user.campus}</li>
  <li class="list-group-item active">Course:</li>
  <li class="list-group-item">{user.course}</li>
</ul>
</div>   
<br/>
        
        <p>
          <button className="button btn-primary" onClick={this.handleLogout}>
            Logout
          </button>
        </p>
      
        </div>
    )

  }
}