import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div id="containerHome">
        <div id="card">
          <h1>IronProfile</h1>
          <p>
            Today we will create an app
            <br /> with authoritation, adding <br />
            some cool styles!
          </p>
          <br></br>
          <div className="boton">
            <Link to="/signup">SignUp</Link>
          </div>
          <div className="boton">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
