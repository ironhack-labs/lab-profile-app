import React from "react";
import { Link } from "react-router-dom";
import "../components/Home.css";

const home = () => {
  return (
    <div className="container">
      <div className="box-container">
        <div className="box-text col-sm-6">
          <h1>IronProfile</h1>
          <p>
            Today we will create an app with authoritation, adding some cool
            styles!
          </p>
            <div className="button-container">
                <h3><Link to="/signup" style={{textDecoration: 'none'}}>Sign Up</Link></h3>
                <h3><Link to="/login" style={{textDecoration: 'none'}}>Login</Link></h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default home;
