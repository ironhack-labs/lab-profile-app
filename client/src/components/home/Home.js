import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <section className="leftContent ">
        <h1>IronProfile</h1>
        <p>Today we will create an app authoritation, adding some cool styles!</p>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </section>
    </div>
  );
}

export default Home;
