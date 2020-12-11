import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
        <button>
          <Link to="/login">Log in</Link>
        </button>
      </div>
    );
  }
}

export default Home;
