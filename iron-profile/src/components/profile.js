import React from 'react'
import AuthService from '../authService/authService'

class Profile extends React.Component{
    
    service = new AuthService()

    render(){
        //console.log(this.props.loggedInUser)
        const userInfo = this.props.loggedInUser
        
        if(!userInfo){
            return <p>"Please Log In"</p>
        }

    return (
        <div>
          <h1>Profile</h1>
          <p>Username: {userInfo.username}</p>
          <p>Campus: {userInfo.campus}</p>
          <p>Course: {userInfo.course}</p>
          <button onClick={this.service.logout}>Log out</button>
        </div>
    )
    }
}

export default Profile