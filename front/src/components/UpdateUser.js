import React from 'react';
import {useState} from 'react'
import { Form, Input, Button } from 'antd';
import { updateFunction } from '../services/auth';
import { useHistory } from 'react-router-dom';
import { useContextInfo } from '../hooks/context';

function UpdateUser({ title, description, deadline, _id }) {
  const [form] = Form.useForm();
  const history = useHistory();
  const { user, updateUserCtx } = useContextInfo();
  const [currentUser, setCurrentUser] = useState(user)

  async function handleSubmit(values) {
    console.log(currentUser)
    console.log("el _id: ",currentUser._id)
    const {data} = await updateFunction({
      user: {
        username: values.username,
        campus: values.campus,
        course: values.course,
        id: currentUser._id
      }
    });
    console.log("response ", data)
    updateUserCtx(values);
    // updateUser({
    //   user: {
    //     username: values.username,
    //     campus: values.campus,
    //     course: values.course,
    //   },
    // });
    history.push('/profile');
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        username: currentUser.username,
        campus: currentUser.campus,
        course: currentUser.course
      }}
    >
      <Form.Item name="username" label="Name:">
        <Input />
      </Form.Item>
      <Form.Item name="campus" label="Campus:">
        <Input />
      </Form.Item>
      <Form.Item name="course" label="Course:">
        <Input />
      </Form.Item>
      <Button block type="primary" htmlType="submit">
        Update
      </Button>
    </Form>
  );
}

export default UpdateUser;
// {_id: "5fc413c6ae7d0225c5dfcdb2", 
// username: "mawi", 
// password: null, campus: 
// "Mexico", course: "Web Dev", …}