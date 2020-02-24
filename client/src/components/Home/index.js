import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <div className="BotonsHome">
        <h1>IronProfile</h1>
        <p>Today we will create an app authoritation, adding some cool styles!</p>
        <Link className="button" to="/signup">Sign up</Link>
        <br/>
        <Link className="button" to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Home;