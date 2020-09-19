import React, { useContext } from 'react'
import axios from 'axios'
import { Context } from '../context'
import { loggedin, updatePhoto, logoutServer } from '../services/auth'
import { Image } from 'antd'
import { Redirect } from 'react-router-dom'


const Profile = () => {
    const { user, loginUser, logout } = useContext(Context)

    async function updatePic(e) {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'lab-react-auth')
        const { data: { secure_url } } = await axios.post('https://api.cloudinary.com/v1_1/dlyw9xi3k/image/upload', formData)
        await updatePhoto(secure_url)
        const user = await loggedin()
        loginUser(user)
    }

    async function userLogout() {
        await logoutServer()
        logout()
    }

    return (user ?
        (<div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'flex-start', padding: 40 }}>
            <div>
                <h1>Profile</h1>
                <p>Username</p>
                <b>{user.username}</b>
                <br />
                <br />
                <p>Campus</p>
                <b>{user.campus}</b>
                <br />
                <br />
                <p>Course</p>
                <b>{user.course}</b>
                <br />
                <br />
                <button onClick={userLogout}>Logout</button>
            </div>
            <div style={{ maxWidth: '40%' }}>
                <img src={user.image} alt='pp' style={{ width: '100%', objectFit: 'contain' }} />
                <br />
                <input type="file" name='image' onChange={updatePic} />
            </div>
        </div>) : <Redirect to='/login' />
    )
}

export default Profile
