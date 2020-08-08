import React, { Component } from 'react';
import AuthService from '../../authService/auth-service';


export class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.service = new AuthService()
    }


    render() {
        return (
            <div>
                <h2>Profile</h2>   
            </div>
        )
    }
}

export default Profile
