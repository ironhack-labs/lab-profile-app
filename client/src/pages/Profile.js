import {React, useState} from 'react'
import { Typography, Row, Col, Button } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'
import UpdateProfileForm from '../components/UpdateProfileForm'

const Profile = () => {
  const { user } = useContextInfo()
  const [showEditForm, setShowEditForm] = useState(false)
  return user ? (
    <Row>
      <Col xs={24} sm={24} md={12}>
        <Typography.Title level={3}>
          Profile: 
          <br/>
          <br/>
          <img style={{width: 200, height: 200, borderRadius: 50}} src={user.image} alt="User Img"></img>
          <br/>
          {user.username}
          <br/>
          <br/>
          {user.campus}
          <br/>
          <br/>
          {user.course}
          <br/>
          {showEditForm && <UpdateProfileForm {...user} />}
        <br />
        <Button
          type="primary"
          onClick={() => setShowEditForm(!showEditForm)}
          block>Edit Profile</Button>
        <br />

        </Typography.Title>
      </Col>
    </Row>) :
    <Redirect to='/' />

}

export default Profile
