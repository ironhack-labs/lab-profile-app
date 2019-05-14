import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import AuthService from '../../services/auth'
import toastr from 'toastr'

const service = new AuthService()

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .signup(values)
          .then(response => {
            console.log(response)
            toastr.success('User created')
          })
          .catch(err => {
            console.log(err)
            toastr.error('Something went wrong')
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{backgroundColor: '#0F8B8D', width:'40vw', height:'40vh', marginLeft: '60%'}}>
        <Form.Item style={{margin: '30% 5% 0% 5%', paddingTop: '10%'}} >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </Form.Item>
        <Form.Item style={{margin: '5% 5%'}} >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: '#003049' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button style={{backgroundColor: '#EAE2B7', color: '#003049'}} type="dashed" htmlType="submit" className="login-form-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalSignupForm