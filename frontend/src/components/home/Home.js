import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="card">
      <h1>IronProfile</h1>
      <p>Today we will create an app with authoritation, adding some cool styles!</p>
      <Link to='/signup'>SignUp</Link>
      <br/>
      <br/> 
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Home;
