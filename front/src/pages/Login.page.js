import React, { useState } from "react";
import { doLogIn } from "../lib/auth.api";
import { Typography, Form, Button } from 'antd';
import { Field } from "../components/form/Field";

import { layout, tailLayout } from "../styles/Form.styles"


const { Title } = Typography;

export const LoginPage = () => {

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    const user = { ...state };
    doLogIn(user).then(res => console.log(res))
  };


  return (<>
    <Title level={2}>Log in</Title>
    <Form {...layout} onFinish={handleSubmit}>  {/*Ant Design uses onFinish instead of onSubmit lol*/}

      <Field type="username" value={state.username} {...{ handleInputChange }} />
      <Field type="password" value={state.password} {...{ handleInputChange }} />

      <Form.Item {...tailLayout}> <Button type="primary" htmlType="submit">Log in</Button> </Form.Item>
    </Form>

  </>)
}
