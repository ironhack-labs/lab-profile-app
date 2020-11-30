import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Typography, Button } from 'antd';
import { loggedinFn, loginFn } from '../services/auth';
import { useContextInfo } from '../hooks/auth';

const { Title, Text } = Typography;

const buttonStyle = {
  margin: '1rem 0',
  height: '2.7rem',
  fontSize: '1.2rem',
  display: 'block',
  padding: '0 10rem',
};

const Login = ({ history }) => {
  const { login } = useContextInfo();
  useEffect(() => {
    async function getUser() {
      const { data } = await loggedinFn();
      console.log('useEffect Login', data);
      if (data) {
        login(data);
        return history.push('/profile');
      }
    }
    getUser();
  }, []);

  const onFinish = async (value) => {
    const { data } = await loginFn(value);
    console.log('onFinish login', data);
    login(data);
    history.push('/profile');
  };

  return (
    <>
      <div style={{ padding: '2rem 0' }}>
        <Title level={1} style={{ fontSize: '3rem' }}>
          Hello!!!!
        </Title>
        <Text type="secondary" style={{ fontSize: '1.2rem' }}>
          Awesome to have at IronProfile again!
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

        <Form.Item>
          <Button
            style={buttonStyle}
            type="primary"
            htmlType="submit"
            shape="round"
          >
            Log In
          </Button>
        </Form.Item>

        <p>
          If you don't have an account yet, you can create an account{' '}
          <Link to="/signup">here</Link>.
        </p>
      </Form>
    </>
  );
};

export default Login;
