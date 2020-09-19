import React, { useState, useContext } from "react"
import { Form, Input, Button, Typography, notification } from "antd"
import { login } from "../services/auth"
import { Context } from "../context"
import { Redirect } from "react-router-dom"

const { Text } = Typography

const Login = ({ history }) => {
    const [form] = Form.useForm()
    const [error] = useState(null)
    const { loginUser, user } = useContext(Context)

    async function onFinish(values) {
        const user = await login(values).catch(err => {
            console.dir(err.response.data.message)
            openNotificationWithIcon(err.response.data.message)
        })
        delete user.password
        loginUser(user)
    }

    const openNotificationWithIcon = message => {
        notification.warning({
            message: "Error",
            description: message
        })
    }

    return !user ? (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '700px', height: '100%', alignItems: 'flex-start', padding: 40 }}>
            <h1 style={{ color: 'rgb(99, 129, 101)', fontSize: '2.8rem' }}>Log In</h1>

            <Form layout='vertical' form={form} onFinish={onFinish}>
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>
                {error && <Text type='danger'>{error}</Text>}
                <Form.Item>
                    <Button style={{ width: 200, height: 30, border: 'none', backgroundColor: 'rgb(192, 227, 190)', margin: "60px" }} type='primary' htmlType='submit'>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    ) : (
            <Redirect to='/profile' />
        )
}

export default Login
