import React, {useContext} from 'react'
import axios from "axios"
import {Button, Card, Typography, Image} from 'antd'
import {uploadPhoto, getCurrentUser} from "../services/auth"
import { UserOutlined } from '@ant-design/icons'
import {Link, Redirect} from 'react-router-dom'
import { Context } from '../context'

const {Title, Text} = Typography
const { Meta } = Card;

function Profile() {
    const {user,loginUser } = useContext(Context)

    async function updatePhoto(e) {
        console.log(e.target.files[0])

        const data = new FormData()
        data.append("file", e.target.files[0])
        data.append("upload_preset", "react-auth")
        const {
          data: { secure_url }
        } = await axios.post(
            "https://api.cloudinary.com/v1_1/joss/image/upload",
          data
        )
        await uploadPhoto(secure_url)
        const { user } = await getCurrentUser()
        loginUser(user)
      }

    return user ? (
        <Card
    hoverable
    style={{ width: "25vw" }}
    cover={<img alt="example" src={user?.image} />}
  >
    <br/>
    <br/>
    <Title style={{fontSize: "20px"}}>Username: {user?.username}</Title>
        <Title style={{fontSize: "18px"}}>Campus:{user?.campus}</Title>
        <Title style={{fontSize: "16px"}}>Course:{user?.course}</Title>
    <br/>
    <input type='file' name='photo' id='photo' onChange={updatePhoto} />
  </Card>
    )
    :
    (
      <Redirect to='/' />
    )
}

export default Profile
