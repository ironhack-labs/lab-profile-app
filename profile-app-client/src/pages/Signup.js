import { Form, Typography, Col, Row, Button, Input, message } from 'antd';
import { signupFn, loginFn, getCurrentUser } from '../services/auth';
import {Redirect} from 'react-router-dom'
import {useEffect} from 'react'
import { useAuthInfo } from '../hooks/authContext';

function Signup() {
  const [form] = Form.useForm();
  const [user, setUser] = useAuthInfo()

    useEffect(async () => {
      const { data } = await getCurrentUser();
      setUser(data);
    }, []);

  async function handleSubmit(userInfo) {
    console.log(userInfo);
    try {
      await signupFn(userInfo);
      message.success('Account created');
      await loginFn(userInfo)

    } catch (error) {
      message.error(error.details);
    }
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={{ span: 8, offset: 8 }}>
        <Typography.Title level={1}>Signup</Typography.Title>
        <Form form={form} onFinish={handleSubmit} layout="vertical" style={{display: 'flex'}}>
        <div>

          <Form.Item name="username" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item name="campus" label="Campus">
            <Input />
          </Form.Item>
          <Form.Item name="course" label="Course">
            <Input />
          </Form.Item>
        </div>
          <div>
            <Typography.Title level={2}>Hello!</Typography.Title>
            <Typography.Paragraph level={3}>
              Welcome to IronProfile!
            </Typography.Paragraph>
            <div>
              <Typography.Paragraph level={6}>
                If you sign up you agree with all out terms and conditions where
                we can do whatever we want with the data!
              </Typography.Paragraph>
              <Button type="primary" htmlType="submit">
                Create the Account
              </Button>
            </div>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Signup;
