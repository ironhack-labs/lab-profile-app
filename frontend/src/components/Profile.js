import React, { Component } from 'react'
import {loggedUser} from '../servies'

export default class Profile extends Component {
    state = {
        user: {}
    }

    getUser = async () => {
        let user = loggedUser()
        this.setState({user})
    }

    render() {
        return (
            <div>
            <h2>Profile</h2>
                {console.log(this.state.image)}
                <p>Photo <img src={this.state.image} alt={this.state.image}/></p>
                <p>Email: {this.state.email}</p>
                <p>Campus: {this.state.campus}</p>
            <p>Course: {this.state.course}</p>
            </div>
        )
    }
}
