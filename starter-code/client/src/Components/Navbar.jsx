import React, { Component, Fragment } from 'react';
import { Link, Fragement, Redirect } from "react-router-dom";
import {signOut as signOutService} from './../Services/authentication'


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  async handleSignOut() {
    console.log(this.props)
    try {
      await signOutService();
      this.props.changeAuthenticationStatus(null);
      this.props.history.push(`/login`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user=this.props.user;
    return (
      <div className='navbar navbar-dark bg-dark'>
       {user && 
      <Fragment>
       <button className="btn btn-success m-3" onClick={this.handleSignOut}>Sign Out</button>
       <Link className="btn btn-success m-3" to='/private'>Profile</Link>
       <Link className="btn btn-success m-3" to='/edit-profile'>Edit your profile</Link>
       </Fragment>
       } 
       {!user &&
        <Link className="nav-link" to='/'>Home</Link>
       }
      </div>
    )
  }
}

export default Navbar
