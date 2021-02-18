import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    message
  } from "antd"
  import { signupProcess, loginProcess } from "../services/auth"
  import { Ctx } from "../hooks/context"
  import { useContext } from "react"
  
  const { Title } = Typography
  
  const Auth = () => {
    const [signupForm] = Form.useForm()
    const [loginForm] = Form.useForm()
    const contextval = useContext(Ctx)
  
    console.log(contextval)
  
    const signupOnFinish = async userData => {
      try {
        const { data } = await signupProcess(userData)
        message.success("Signup done")
      } catch (error) {
        message.error(error.response.data.message)
      }
    }
    const loginOnFinish = async userData => {
      console.log("login")
      try {
        const { data } = await loginProcess(userData)
        console.log(data)
        message.success("Login done")
      } catch (error) {
        message.error(error.response.data.message)
      }
    }
  
    return (
      <Row gutter={[16, 16]}>
        <Col sm={24} md={12}>
          <Title level={2}>Signup</Title>
          <Form onFinish={signupOnFinish} form={signupForm} layout='vertical'>
            <Form.Item name='email' label='Email:'>
              <Input type='email' />
            </Form.Item>
            <Form.Item name='password' label='Password:'>
              <Input.Password />
            </Form.Item>
            <Button type='primary' block htmlType='submit'>
              Signup
            </Button>
          </Form>
        </Col>
        <Col sm={24} md={12}>
          <Title level={2}>Login</Title>
          <Form onFinish={loginOnFinish} form={loginForm} layout='vertical'>
            <Form.Item name='email' label='Email:'>
              <Input type='email' />
            </Form.Item>
            <Form.Item name='password' label='Password:'>
              <Input.Password />
            </Form.Item>
            <Button type='primary' block htmlType='submit'>
              Login
            </Button>
          </Form>
        </Col>
        <Col span={24}>
          <Divider>Or</Divider>
        </Col>
        {/* Cuando hacemos autenticacion con redes sociales basta con colocar un anchor hacia la ruta del backend que soluciona dicho Oauth con una red social */}
        <Col span={18} offset={3}>
          <Button style={{ backgroundColor: "#DB4437", color: "white" }} block>
            <a href='http://localhost:3001/auth/google'>Enter with Google</a>
          </Button>
        </Col>
        <Col span={18} offset={3}>
          <Button style={{ backgroundColor: "#4267B2", color: "white" }} block>
            <a href='http://localhost:3001/auth/facebook'>Enter with Facebook</a>
          </Button>
        </Col>
      </Row>
    )
  }
  
  export default Auth