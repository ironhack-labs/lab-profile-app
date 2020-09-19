import React, { useContext } from "react"
import { getCurrentUser, updateProfilePhoto, logoutP } from "../services/auth"
import axios from "axios"
import { Context } from "../context.js"
import { Button } from 'antd'

const Profile = () => {
    const { user, loginUser, logout } = useContext(Context)

    async function uploadPhoto(e) {
        const data = new FormData()
        console.log(e.target.files[0])
        data.append("file", e.target.files[0])
        data.append("upload_present", "Lab-18Sep2020")
        const {
            data: { secure_url }
        } = await axios.post("https://api.cloudinary.com/v1_1/dxpxe8gus/image/upload", data)
        await updateProfilePhoto(secure_url)
        const { user } = await getCurrentUser()
        loginUser(user)
    }

    async function setLogout() {
        await logoutP()
        logout()
    }

    return ( <div className = "card"  style={{backgroundColor: '#DEECDD'}} >
        <div className = "white" >
            <h1> Profile </h1> 
            <p> Username: { user?.username } </p> 
            <p> Campus: { user?.campus } </p>
            <p> Course: { user?.course } </p> 
            <Button type = "link" danger onClick = { setLogout } > Logout </Button> 
        </div>
            <div className = "green">
                <img src = { user?.photo }/>
                <input type = 'file' name = 'photo' id = 'photo' onChange = { uploadPhoto }/>
            </div>
        </div>
    )
}

export default Profile