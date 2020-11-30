import { useEffect } from 'react';
import { Form, Input, Typography, Button } from 'antd';
import { loggedinFn, signupFn } from '../services/auth';
import { useContextInfo } from '../hooks/auth';

const { Title, Text } = Typography;

const Signup = ({ history }) => {
  const { login } = useContextInfo();
  useEffect(() => {
    async function getUser() {
      const { data } = await loggedinFn();
      console.log('useEffect Sing up data');
      if (data){ 
        login(data);
        return history.push('/profile');
      }
    }
    getUser();
  }, []);

  const buttonStyle = {
    margin: '1rem 0',
    height: '2.7rem',
    fontSize: '1.2rem',
    display: 'block',
    padding: '0 10rem',
  };

  const onFinish = async (value) => {
    const user = await signupFn(value);
    console.log('onFinish Sign up', user);
    history.push('/login');
  };
  return (
    <>
      <div style={{ padding: '2rem 0' }}>
        <Title level={1} style={{ fontSize: '3rem' }}>
          Sign up
        </Title>
        <Text type="secondary" style={{ fontSize: '1.2rem' }}>
          Welcome to IronProfile!
        </Text>
      </div>

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
          rules={[
            {
              required: true,
              message: 'Please input your campus!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Course"
          name="course"
          rules={[
            {
              required: true,
              message: 'Please input your course!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            style={buttonStyle}
            type="primary"
            htmlType="submit"
            shape="round"
          >
            Create the Account!
          </Button>
        </Form.Item>
        <p>
          If you Signup, you agreed with all our terms and conditions where{' '}
          <br />
          we can do whatever we want with the data! ;)
        </p>
      </Form>
    </>
  );
};

export default Signup;
