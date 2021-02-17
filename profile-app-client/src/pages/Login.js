import { Form, Typography, Col, Row, Button, Input, message } from 'antd';
import { signupFn, loginFn } from '../services/auth';
import { Redirect, Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useAuthInfo } from '../hooks/authContext';
import {getCurrentUser} from '../services/auth'

function Login() {
  const [form] = Form.useForm();
const {login}= useAuthInfo();


  async function handleSubmit(userInfo) {
   login(userInfo);
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 8, offset: 8 }}>
        <Typography.Title level={1}>Login</Typography.Title>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{ display: 'flex' }}
        >
          <div>
            <Form.Item name="username" label="Username">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <Typography.Text level={5}>
              If you don't have an account yet, you can create your account{' '}
              <Link to="/signup">here.</Link>
            </Typography.Text>
          </div>
          <div>
            <Typography.Title level={2}>Hello!</Typography.Title>
            <Typography.Paragraph level={3}>
              Awesome to have you at IronProfile again!
            </Typography.Paragraph>

            <div>
              
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </div>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
