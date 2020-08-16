import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavLink to="/signup" className="btn btn-primary">Signup</NavLink>
                <NavLink to="/login" className="btn btn-success">Login</NavLink>
            </div>
        )
    }
}
