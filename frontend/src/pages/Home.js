import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
          <Button variant="light" className="boton">
            <Link to="/signup">SignUp</Link>
          </Button>
          <Button variant="light" className="boton">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
