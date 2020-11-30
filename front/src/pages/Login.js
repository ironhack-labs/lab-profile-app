import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Button, Form, Input } from 'antd'
import { loginFn } from '../services/auth'
import { useContextInfo } from '../hooks/context'

const Login = ({history}) => {
    const [form] = Form.useForm();
    const { login } = useContextInfo()

    const onFinish = async (values) => {
        const { data } = await loginFn(values)
        login(data);
        history.push('/profile')
      };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Row style={{position: "relative", top: "200px", padding: "30px"}}>
                <Col offset={6} span={5}>
                    <Typography.Title level={1} style={{color: '#638165'}}>Log in</Typography.Title>
                    <Form.Item name="username" label="Username">
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="Password">
                        <Input.Password />
                    </Form.Item>
                    <Typography.Text type="secondary">If you don't have an account yet, you can create your account <Link to="/signup">Here</Link></Typography.Text>
                </Col>
                <Col offset={3} span={4}>
                    <Typography.Title level={2}>Hello!</Typography.Title>
                    <Typography.Title style={{marginBottom: "200px"}} type="secondary" level={3}>Awesome to have you at IronProfile again!</Typography.Title>
                    <Typography.Text type="secondary">If you signup, you agree with all our terms and conditions, where we can do whatever we want with the data!</Typography.Text>
                    <Button style={{backgroundColor: '#e9f2eb', color: "black", borderColor: "#e9f2eb", marginTop: "50px"}} block type="primary" htmlType="submit">Log in</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Login
