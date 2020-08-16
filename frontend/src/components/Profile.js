import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to your profile, {this.props.loggedInUser.username}</h1>
                <p>Campus: {this.props.loggedInUser.campus}</p>
                <p>Course: {this.props.loggedInUser.course}</p>
                <NavLink to="/logout" className="nav-link">Logout</NavLink>
            </div>
        )
    }
}
