import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>IronProfile</h1>
      <article>Today we will create an app authoritation, adding some cool styles!</article>
      <Link className="btn" to="/signup">
        Sign up
      </Link>
      <Link className="btn" to="/login">
        Log in
      </Link>
    </div>
  );
}

export default Home;
