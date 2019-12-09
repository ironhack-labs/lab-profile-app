import React, { Component } from "react";
import { MyContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileTag = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
`;
export default class SignupContainer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <ProfileTag>
            <div>
              <h1>Profile</h1>
              <h4>Username</h4>
              <h1>{context.state.user.username}</h1>
              <h4>Campus</h4>
              <h1>{context.state.user.campus}</h1>
              <h4>Course</h4>
              <h1>{context.state.user.course}</h1>
              <Link to="/logout">Logout</Link>
            </div>
            <div>
              <img src={context.state.user.image} alt="Hey" />
              <Link to="/edit">
                <button>Edit</button>
              </Link>
              <p>
                The user is able to upload a new profile photo, using NodeJS and
                multer uploader
              </p>
            </div>
          </ProfileTag>
        )}
      </MyContext.Consumer>
    );
  }
}
