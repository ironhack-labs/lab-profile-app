import React, { Component } from 'react';
// import {Link} from "react-router-dom"

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            loggedInUser: null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state, loggedInUser: nextProps["userInSession"]
        })
        console.log(this.state);
    }
    render() {
        return (

            <h1>Welcome </h1>
        )
    }
}

export default Profile;