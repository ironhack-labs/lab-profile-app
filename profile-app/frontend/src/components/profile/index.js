import React from 'react'

const index = ({username, campus, course, image, upload, logOut}) => {
    return (
        <div id='row'>
            <div>
                <h1>Profile</h1>
                <h6>Username: </h6>
                <p>{username}</p>
                <h6>Campus: </h6>
                <p>{campus}</p>
                <h6>Course: </h6>
                <p>{course}</p>
                <button onClick={logOut}> Log Out</button>
            </div>
            <br/>
            <div>
                <img width='200px' src={image} alt={username}/>
                <input type="file" onChange={upload} name='image'/>
                <br/>
                <br/>
                <small>The user is able to upload a new photo, using NodeJS and Multer uploader</small>
            </div>
        </div>
    )
}

export default index