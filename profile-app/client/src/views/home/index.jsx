import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HomeView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <main>
      <br></br>
      <Link to="/sign-up">Sign Up</Link>
      <br></br>
      <Link to="/sign-in">Sign In</Link>
      <br></br>
      </main>
    );
  }
}


export default HomeView;