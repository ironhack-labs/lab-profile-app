import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import Home from '../Home';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.props.getUser(null);  
      this.setState({ loggedInUser: null });
    })
  }

  render(){
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
                <button onClick={() => this.logoutUser()}>Logout</button>
            <li>Welcome, {this.state.loggedInUser.username}</li>
            <Home/>
            
            <li>
              <Link to='/'>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return ( 
        <nav className="nav-style">
          <ul>
            <li><Link to='/' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;