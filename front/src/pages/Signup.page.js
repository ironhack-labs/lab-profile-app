import React, { useState } from "react";
import { withRouter } from "react-router-dom"
import { doSignUp } from "../lib/auth.api";
import { Typography, Form, Col, Row } from 'antd';
import { Field } from "../components/form/Field";
import { SelectField } from "../components/form/SelectField";

import { layout, tailLayout } from "../styles/Form.styles"
import { SubmitBtn } from "../components/Btn";


const { Title, Text } = Typography;

export const SignupPage = withRouter(({ history }) => {
  const [error, setError] = useState("");
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
    try {
      doSignUp(user).then(res => { console.log(res); history.push("/profile") })
    }
    catch{
      (e) => { setError(e.message); console.log(e.message) }
    };
  };

  const campus = ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"];
  const courses = ["WebDev", "UX/UI", "Data Analytics"];

  return (<>

    <Form {...layout} onFinish={handleSubmit} className="ant-row">  {/*Ant Design uses onFinish instead of onSubmit lol*/}
      <Col span={14}>
        <Title level={2}>Sign up</Title>
        {error}
        <Field type="username" value={state.username} {...{ handleInputChange }} />
        <Field type="password" value={state.password} {...{ handleInputChange }} />


        <SelectField type="campus" options={campus} {...{ handleInputChange }} />
        <SelectField type="course" options={courses} {...{ handleInputChange }} />
      </Col>
      <Col span={10} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Title level={3}>Hello!!</Title>
          <Title level={4}>Welcome to IronProfile!</Title>
        </div>
        <div>
          <Text>If you signup, you agree with all our terms and conditions where we can do whatever we want with your data!</Text>
          <Form.Item {...tailLayout}> <SubmitBtn htmlType="submit">Sign up</SubmitBtn> </Form.Item>
        </div>

      </Col>
    </Form>

  </>)
});
