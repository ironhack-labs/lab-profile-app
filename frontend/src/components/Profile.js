import React from 'react'

const Profile = ({username, campus, course, image, upload, logout}) => {
    return (
        <div>
            <div>
                <h1>Profile</h1>
                <h5>Username: </h5>
                <p>{username}</p>
                <h5>Campus: </h5>
                <p>{campus}</p>
                <h5>Course: </h5>
                <p>{course}</p>
                <button onClick={logout}> Logout</button>
            </div>
            <br/>
            <div>
                <img width='400px' src={image} alt={username}/>
                <input type="file" onChange={upload} name='image'/>
            </div>
        </div>
    )
}

export default Profile