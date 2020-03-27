import React, { useState } from "react";
import { doSignUp } from "../lib/auth.api";
import { Typography, Form, Button } from 'antd';
import { Field } from "../components/form/Field";
import { SelectField } from "../components/SelectField";

import { layout, tailLayout } from "../styles/Form.styles"


const { Title } = Typography;

export const SignupPage = () => {

  const [state, setState] = useState({
    username: "",
    password: "",
    campus: "",
    course: ""
  });

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    const user = { ...state };
    doSignUp(user).then(res => console.log(res))
  };

  const campus = ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"];
  const courses = ["WebDev", "UX/UI", "Data Analytics"];

  return (<>
    <Title level={2}>Sign up</Title>
    <Form {...layout} onFinish={handleSubmit}>  {/*Ant Design uses onFinish instead of onSubmit lol*/}

      <Field type="username" value={state.username} {...{ handleInputChange }} />
      <Field type="password" value={state.password} {...{ handleInputChange }} />

      <SelectField type="campus" options={campus} {...{ handleInputChange }} />
      <SelectField type="course" options={courses} {...{ handleInputChange }} />


      <Form.Item {...tailLayout}> <Button type="primary" htmlType="submit">Submit</Button> </Form.Item>
    </Form>

  </>)
}
