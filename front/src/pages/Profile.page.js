import React, { useEffect, useState } from "react";
import { isLoggedIn, doLogOut, uploadPic } from "../lib/auth.api";
import { Typography, Button } from 'antd';
import { withRouter } from "react-router-dom"

const { Title } = Typography;

export const ProfilePage = withRouter(({ history }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    isLoggedIn().then(u => setUser(u)).catch(e => console.log(e))
  }, []);

  return (
    <>
      <Title level={2}>Profile</Title>
      {user.username}
      {user.campus}
      {user.course}
      <Button onClick={() => { doLogOut(); history.push("/") }}>Logout</Button>
      <Button>Upload Picture</Button>

    </>)
})
