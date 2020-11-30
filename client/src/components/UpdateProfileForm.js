import React from 'react'
import { Form, Input, Button } from 'antd'
import { updateFn } from '../services/auth'
import { useHistory } from 'react-router-dom'

function UpdateProfileForm({
    username,
    campus,
    course,
    _id
    }) {
    const [form] = Form.useForm()
    const history = useHistory()

    async function handleSubmit(values) {
        await updateFn(_id, values)
        console.log(_id)
        history.push('/')
    }

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={{
        username,
        campus,
        course
        }}>
        <Form.Item name="username" label="Username:">
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
        </Form >
    )
}

export default UpdateProfileForm
