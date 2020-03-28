import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom"
import { isLoggedIn, doLogOut, uploadPic } from "../lib/auth.api";
import { Typography, Row } from 'antd';
import { LeftCol, RightCol } from "../components/Grid";
import { Btn } from "../components/Btn";


const { Title, Text } = Typography;

export const ProfilePage = withRouter(({ history }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    isLoggedIn().then(u => { setUser(u); setLoading(false) }).catch(e => console.log(e))
  }, []);
  if (loading == true) {
    return (<Title level={4}>Loading...</Title>)
  }
  else if ("username" in user) {


    return (
      <Row>
        <LeftCol>
          <Title level={2}>Profile</Title>
          <Title level={4}> Username</Title>
          <Text>{user.username}</Text>
          <Title level={4}> Campus</Title>
          <Text>{user.campus}</Text>
          <Title level={4}> Course</Title>
          <Text>{user.course}</Text>
        </LeftCol>
        < RightCol style={{ alignSelf: "flex-end" }} >
          <Btn onClick={() => { doLogOut() }} to="/">Logout</Btn>
        </RightCol >
      </Row>
    )
  } else {
    return (<>
      <Title level={4}>Don't have a profile yet? Create one now</Title>
      <Btn to="/signup">Sign up</Btn>
    </>);
  }


});
