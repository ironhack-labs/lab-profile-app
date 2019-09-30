import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
// import axios from 'axios'
import AUTH_SERVICE from '../services/auth'
import { MyContext } from '../context'
import '../App.css'

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    console.log(this.state.user)
  }

  onSubmit = e => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.user)
      .then(response => {
        this.context.logUser(response.data.user)
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { user } = this.state
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
        <Card style={{ width: '60%' }}>
          <h1>Hello!!</h1>
          <p>Awesome to have al IronProfile again!</p>
          <h2
            style={{
              color: '#638165'
            }}>
            Log in
          </h2>
          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Username">
              <Input
                onChange={this.handleInputs}
                name="username"
                type="text"
                placeholder="Username"></Input>
            </Form.Item>
            <Form.Item label="Password">
              <Input
                onChange={this.handleInputs}
                name="password"
                type="password"
                placeholder="Password"></Input>
            </Form.Item>
            <small>
              If you login, you agree with all our terms and conditions where we can do whatever we
              want with the data!
            </small>
            <br />
            <Button
              htmlType="submit"
              style={{
                background: '#c0e3be',
                border: 'none',
                color: 'c0e3be',
                margin: '20px 0 20px 0'
              }}>
              Log In
            </Button>
          </Form>
        </Card>
      </section>
    )
  }
}

Login.contextType = MyContext

export default Login
//
