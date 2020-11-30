import {useEffect, useState} from 'react'
import { Typography, Row, Col } from 'antd';
import { useContextInfo } from '../hooks/context';
import { Redirect } from 'react-router-dom';
import UploadProfilePic from '../components/UploadProfilePic'
import { logoutFunction } from '../services/auth';
import UpdateUser from '../components/UpdateUser'

export default function Profile() {
    const { user, logout } = useContextInfo();
    const [currentUser, setCurrentUser] = useState(null)
    const [showForm, setShowForm] = useState(false)


    function logoutHandle(){
      logoutFunction()
      logout()
      setCurrentUser(null)
      console.log("currentUSer", currentUser)
    }

    useEffect(() => {
        if (user) setCurrentUser(user)
        console.log("Mount")
        console.log(currentUser)
    })

    function showFormHandle() {
        setShowForm(!showForm)
    }


    return user ? (
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Typography.Title level={3}>Profile</Typography.Title>
          <p>Username: </p>
          <h2>{user.username}</h2>
          <p>Campus: </p>
          <h2>{user.campus}</h2>
          <p>Profile: </p>
          <h2>{user.course}</h2>
          <br />
          <UploadProfilePic></UploadProfilePic>
          <br />
          <button onClick={logoutHandle}>Logout</button>
          <br/>
          <br/>
          {/* <button onClick={setShowForm(!showForm)}>Edit info</button> */}
          <button onClick={showFormHandle}>Edit info</button>
          {showForm ? (<UpdateUser />) : ''}
        </Col>
      </Row>
    ) : (
      <Redirect to="/" />
    );
}
  

