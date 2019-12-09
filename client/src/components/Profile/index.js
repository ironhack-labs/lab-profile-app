import React, { Component } from 'react';
import { StyledCard } from '../styled-components.js/components';

export default class Profile extends Component {
  state={
    profile: {
      id: "",
      username: "Harry Potter",
      campus: "Sao Paulo",
      course: "Web Development",
    }
  }
  
  // async componentDidMount() {
  //   const { data } = await 

  //   this.setState({ profile });
  // }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <>
        <StyledCard>
          <div className="left">
            <h1>Profile</h1>
            <h4>Username</h4>
            <h2>{profile.username}</h2>
            <h4>Campus</h4>
            <h2>{profile.campus}</h2>
            <h4>Course</h4>
            <h2>Web Development</h2>
            <p>Logout</p>
          </div>
        </StyledCard>
      </>
    )
  }
}