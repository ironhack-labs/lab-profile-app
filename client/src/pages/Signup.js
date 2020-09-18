import React, { useContext } from 'react';
import { Form, Input, Button, Cascader } from 'antd';
import { signup } from '../services/auth';
import { Redirect } from 'react-router-dom';
import { Context } from '../context';
const Signup = ({ history }) => {
  const [form] = Form.useForm();
  const { user } = useContext(Context);

  async function onFinish(values) {
    await signup(values);

    history.push('/login');
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
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="campus" label="Campus">
        <Cascader
          options={[
            {
              value: 'Madrid',
              label: 'Madrid',
            },
            {
              value: 'Barcelona',
              label: 'Barcelona',
            },
            {
              value: 'Miami',
              label: 'Miami',
            },
            {
              value: 'Paris',
              label: 'Paris',
            },
            {
              value: 'Berlin',
              label: 'Berlin',
            },
            {
              value: 'Amsterdam',
              label: 'Amsterdam',
            },
            {
              value: 'Mexico',
              label: 'México',
            },
            {
              value: 'SaoPaulo',
              label: 'SaoPaulo',
            },
            {
              value: 'Lisbon',
              label: 'Lisbon',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name="course" label="Course">
        <Cascader
          options={[
            {
              value: 'WebDev',
              label: 'WebDev',
            },
            {
              value: 'UX/UI',
              label: 'UI',
            },
            {
              value: 'DataAnalytics',
              label: 'DataAnalytics',
            },
          ]}
        />
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
