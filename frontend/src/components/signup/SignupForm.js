import React from 'react'
import AuthService from '../../services/auth'
import { Form, Input, Select, Button} from 'antd';
  
  const { Option } = Select;
  const service = new AuthService()

  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            service
            .signup(values)
            .then(response => {
                console.log(response, "The user was created")
            })
            .catch(err => {
                console.log(err, "Something went wrong")
            })
        }
      });
    };
  
    handleConfirmBlur = e => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="username">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please write your username!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please enter your password!',
                }
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                }
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="campus">
            {getFieldDecorator('campus', {
              rules: [
                {
                  required: true,
                  message: 'Please write the campus!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="course">
            {getFieldDecorator('course', {
              rules: [
                {
                  required: true,
                  message: 'Please write your course!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

  export default WrappedRegistrationForm