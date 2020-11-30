import React from 'react'
import { Row, Col, Form, Input, Select, Button, Typography, Divider } from 'antd'
import { signUpFn } from '../services/auth'

const {Title, Text}=Typography



function Signup({history}) {
    const [form]=Form.useForm()

    async function handleSubmit(userInput){
        await signUpFn(userInput)
        history.push('/auth/login')
    }

    return (
        <div>
                    <Row>
            <Col span={12}>
                <Title level={1}>Signup</Title>
                <br/>
                <br/>
                <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item name='username' label="Username:">
            <Input />
          </Form.Item>
          <Form.Item name='password' label="Password:">
            <Input.Password />
          </Form.Item>
          <Input.Group compact>
          <Form.Item name='campus' label="Campus:">

      <Select defaultValue="Choose a Campus">
        <Select.Option value="Madrid">Madrid</Select.Option>
        <Select.Option value="Barcelona">Barcelona</Select.Option>
        <Select.Option value="Miami">Miami</Select.Option>
        <Select.Option value="Paris">Paris</Select.Option>
        <Select.Option value="Berlin">Berlin</Select.Option>
        <Select.Option value="Amsterdam">Amsterdam</Select.Option>
        <Select.Option value="México">México</Select.Option>
        <Select.Option value="Sao Paulo">Sao Paulo</Select.Option>
        <Select.Option value="Lisbon">Lisbon</Select.Option>
      </Select>
          </Form.Item>
          <Form.Item name='course' label="Course:">
      <Select defaultValue="Choose a course">
        <Select.Option value="Web Dev">Web Dev</Select.Option>
        <Select.Option value="UX/UI">UX/UI</Select.Option>
        <Select.Option value="Data Analytics">Data Analytics</Select.Option>
      </Select>

          </Form.Item>
          </Input.Group>
          <Button type="primary" block htmlType="submit">
            Signup
          </Button>
        </Form>

            </Col>
        </Row>
        </div>
    )
}

export default Signup
