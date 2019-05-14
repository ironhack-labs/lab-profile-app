import { Form, Icon, Input, Button} from 'antd';
import React from 'react'
import AuthService from '../../services/auth'

const service = new AuthService()

class NormalLoginForm extends React.Component {
    componentWillMount() {
        const user = localStorage.getItem('loggedUser')
        if (user) return this.props.history.push('/profile')
    }

    state = {
        form: {
            username: "", 
            password: ""
        }
    }

  handleInputs = e => {
      const { form } = this.state
      form[e.target.name] = e.target.value
      this.setState(form)
  }

  handleSubmit = e => {
    e.preventDefault();
    const {form} = this.state
    service 
    .login(form)
    .then(response => {
        if(response.err) return response.err
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
    })
    .catch(err => {
        console.log(err)
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm