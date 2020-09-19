import React, {useState,useContext} from 'react'
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import {Link, Redirect} from 'react-router-dom'
import {Context} from '../context'
import { login } from "../services/auth"

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

function LogIn({history}) {
    const [form] = Form.useForm()
    const { loginUser, user} = useContext(Context)

    async function onFinish(values){
        const user = await login(values).catch(err =>{

        })
        loginUser(user)
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
        <Title>Log In Old Friend</Title> 
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
        <Text>If you don't have an account <Link to="/signup">click here!</Link></Text>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    ) : (
        <Redirect to="/profile"/>
    )
}

export default LogIn
