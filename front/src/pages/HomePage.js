import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Iron Profile</h1>
      <h3>
        Today we will create an app with authoritation, adding some cool styles
      </h3>
      <Link to={"/signup"}>
        <button>Sign up</button>
      </Link>
      <Link to={"/login"}>
        <button>Log in</button>
      </Link>
    </div>
  );
};
