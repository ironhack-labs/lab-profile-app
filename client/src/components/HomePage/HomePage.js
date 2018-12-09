import React, { Component } from "react";
import Button from "../Button";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="rigth">
          <h1>IronProfile</h1>
          <div>
            Today we will create an app with authoritation, adding some cool
            styles
          </div>
          <Button url={"login"}>Login</Button>
          <Button url={"signup"}>Signup</Button>
        </div>
        <div className="left" />
      </div>
    );
  }
}
