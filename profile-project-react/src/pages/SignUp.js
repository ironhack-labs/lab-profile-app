import React, {useContext} from 'react'
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import {Link, Redirect} from 'react-router-dom'
import { Context } from "../context"
import { signup } from '../services/auth';

const {Title,Text} = Typography

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };



function SignUp({history}) {

    const [form] = Form.useForm()
    const {user} = useContext(Context)

    async function onFinish(values){
        await signup(values)
        console.log(history)
        history.push("/login")
    }

    return !user ? (
    <Card>
        <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
      >
        <Title>Sign Up Today</Title>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Campus"
          name="campus"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Course"
          name="course"
        >
          <Input />
        </Form.Item>

        <Text>If you alreay have an account <Link to="/login">click here!</Link></Text>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    ) : (
        <Redirect to='/profile'/>
    )
}

export default SignUp
