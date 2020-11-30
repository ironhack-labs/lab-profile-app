import { Typography, Row, Col, Button, Form, Input, Select } from 'antd'
import { signupFn } from '../services/auth'
const { Option } = Select;

const Signup = ({history}) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        await signupFn(values)
        history.push('/login')
      };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Row style={{position: "relative", top: "200px", padding: "30px"}}>
                <Col offset={6} span={5}>
                    <Typography.Title level={1} style={{color: '#638165'}}>Sign up</Typography.Title>
                    <Form.Item name="username" label="Username">
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="Password">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="campus" label="Campus">
                    <Select allowClear>
                        <Option value="Madrid">Madrid</Option>
                        <Option value="Barcelona">Barcelona</Option>
                        <Option value="Miami">Miami</Option>
                        <Option value="Paris">Paris</Option>
                        <Option value="Berlin">Berlin</Option>
                        <Option value="Amsterdam">Amsterdam</Option>
                        <Option value="México">México</Option>
                        <Option value="Sao Paulo">Sao Paulo</Option>
                        <Option value="Lisbon">Lisbon</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item name="course" label="Course">
                    <Select allowClear>
                        <Option value="Web Dev">Web Dev</Option>
                        <Option value="UX/UI">UX/UI</Option>
                        <Option value="Data Analytics">Data Analytics</Option>
                    </Select>
                    </Form.Item>
                </Col>
                <Col offset={3} span={4}>
                    <Typography.Title level={2}>Hello!</Typography.Title>
                    <Typography.Title style={{marginBottom: "200px"}} type="secondary" level={3}>Welcome to IronProfile!</Typography.Title>
                    <Typography.Text type="secondary">If you signup, you agree with all our terms and conditions, where we can do whatever we want with the data!</Typography.Text>
                    <Button style={{backgroundColor: '#e9f2eb', color: "black", borderColor: "#e9f2eb", marginTop: "50px"}} block type="primary" htmlType="submit">Create the account</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Signup
