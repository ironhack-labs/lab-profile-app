import React from 'react'
import { Typography, Row, Col } from 'antd'
import { useContextInfo } from '../hooks/context'
import { Redirect } from 'react-router-dom'

const Profile = () => {
  const { user } = useContextInfo()
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

        </Typography.Title>
      </Col>
    </Row>) :
    <Redirect to='/' />

}

export default Profile
