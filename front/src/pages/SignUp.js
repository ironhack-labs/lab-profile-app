import { Form, Input, Button, Row, Col, Typography, Divider } from 'antd';
import { signupFunction } from '../services/auth';
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Signup({ history }) {
    const [form] = Form.useForm()

    async function handleSubmit(values) {
        await signupFunction(values)
        history.push('/login')
    }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Signup</Title>
      </Col>
      <Divider />
      <Col span={24}>
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
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

          <Form.Item
            label="Campus"
            name="campus"
            rules={[{ required: true, message: 'Please input your campus!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Course"
            name="course"
            rules={[{ required: true, message: 'Please input your course!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Create account
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
