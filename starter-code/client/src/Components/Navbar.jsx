import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {signOut as signOutService} from './../Services/authentication'


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  async handleSignOut() {
    try {
      await signOutService();
      this.props.changeAuthenticationStatus(null);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user=this.props.user;
    return (
      <div className='navbar navbar-dark bg-dark'>
       {user && <button className="btn btn-success m-3" onClick={this.handleSignOut}>Sign Out</button>} 
        <Link className="nav-link" to='/'>Home</Link>
      </div>
    )
  }
}

export default Navbar
