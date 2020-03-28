import React, { useState } from "react";
import { withRouter } from "react-router-dom"
import { doLogIn } from "../lib/auth.api";
import { Typography, Form } from 'antd';
import { LeftCol, RightCol } from "../components/Grid"
import { Field } from "../components/form/Field";
import { SubmitBtn } from "../components/Btn"


import { layout, tailLayout } from "../styles/Form.styles"



const { Title, Text } = Typography;

export const LoginPage = withRouter(({ history }) => {

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("")
  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    const user = { ...state };
    doLogIn(user).then(res => { console.log(res); history.push("/profile") }).catch(e => setError(e.message))
  };


  return (
    <Form {...layout} onFinish={handleSubmit} className="ant-row">  {/*Ant Design uses onFinish instead of onSubmit lol*/}

      <LeftCol>
        <Title level={2}>Log in</Title>
        {error && "Your username or password is not correct"}
        <Field type="username" value={state.username} {...{ handleInputChange }} />
        <Field type="password" value={state.password} {...{ handleInputChange }} />
      </LeftCol>

      <RightCol>
        <div>
          <Title level={3}>Hello!!</Title>
          <Title level={4}>Awesome to have you back!</Title>
        </div>
        <div>
          <Text>If you signup, you agree with all our terms and conditions where we can do whatever we want with your data!</Text>
          <Form.Item {...tailLayout}> <SubmitBtn htmlType="submit">Log in</SubmitBtn> </Form.Item>
        </div>
      </RightCol>
    </Form >
  )
});
