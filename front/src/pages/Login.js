import React from 'react'
import { Row, Col, Form, Input, Select, Button, Typography, Divider } from 'antd'
import { loginFn } from '../services/auth'
import { useContextInfo } from '../hooks/context'

const {Title, Text}=Typography
const {Option}=Select

const Login=({history})=>{
    const [form]=Form.useForm()
    console.log(useContextInfo())
    const {login}=useContextInfo()

    async function handleSubmit(userInput){
        const {data}= await loginFn(userInput)
        login(data)
        history.push('/profile')
    }

    return(
        <Row>
            <Col span={12}>
                <Title level={1}>Log in</Title>
                <br/>
                <br/>
                <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='username' label="Username:">
            <Input />
          </Form.Item>
          <Form.Item name='password' label="Password:">
            <Input.Password />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            Login
          </Button>
        </Form>
        <Text type="secondary">If you don't have an account yet, you can create your account here</Text>

            </Col>
        </Row>
    )
}

export default Login