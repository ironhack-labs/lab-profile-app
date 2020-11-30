
import React from 'react'
import {useContextInfo} from '../hooks/context'
import UploadProfilePic from './UploadProfilePic'


function Profile() {
    const {user, logout}=useContextInfo()

    return user? (
        <div>
            <h4>Username:</h4>
            <h3>{user.username}</h3>
            <br/>
            <h4>Campus:</h4>
            <h3>{user.campus}</h3>
            <br/>
            <h4>Course:</h4>
           <h3>{user.course}</h3>
           <button onClick={logout}>Logout</button>

        </div>
    ):('loading')
}

export default Profile
