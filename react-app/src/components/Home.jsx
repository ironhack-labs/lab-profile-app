import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h3>IronProfile</h3>
      <p>Today we will create a App with authoritation, adding some cool styles!</p>
      <button>
        <Link to="/signup">Sign up</Link>
      </button>
      <button>
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
};

export default home;
