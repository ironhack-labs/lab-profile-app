import React, { useContext } from 'react';
import { Form, Input, Button, Cascader } from 'antd';
import { login } from '../services/auth';
import { Redirect } from 'react-router-dom';
import { Context } from '../context';
const Signup = ({ history }) => {
  const [form] = Form.useForm();
  const { user } = useContext(Context);

  async function onFinish(values) {
    const user = await login(values);
    console.log(`uuuuseeer`, user);
    history.push('/profile');
  }

  return !user ? (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        label="User Name"
        name="username"
        rules={[{ required: true, message: 'Please input your user name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        type="password"
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          // type="primary"
          style={{
            marginTop: '15px',
            backgroundColor: '#638165',
            color: 'white',
            borderRadius: '10px',
          }}
          block
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Signup;
