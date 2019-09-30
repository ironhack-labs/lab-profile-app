import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import '../App.css'
// import { NavLink } from 'react-router-dom'
import axios from 'axios'
// const { Option } = Select

class Signup extends Component {
  state = {
    user: {
      username: '',
      password: '',
      campus: '',
      course: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { user } = this.state
    axios
      .post('http://localhost:3000/auth/signup', user)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          user: {
            username: '',
            campus: '',
            course: ''
          }
        })
        this.props.history.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    console.log(this.state.user)
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
          <Form ref="login" onSubmit={this.onSubmit}>
            <h1>Hello!!</h1>
            <p>Welcome to IronProfile!</p>
            <h2
              style={{
                color: '#638165'
              }}>
              Sign up
            </h2>
            <Form.Item label="Username">
              <Input
                value={user.username}
                onChange={this.handleInputs}
                name="username"
                placeholder="AndresH"
                required
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                value={user.password}
                onChange={this.handleInputs}
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Item>
            <Form.Item label="Campus">
              <Input
                value={user.campus}
                onChange={this.handleInputs}
                name="campus"
                placeholder="Madrid"
                required
              />
              {/* <Select name="campus" required>
                <Option value="Madrid">Madrid</Option>
                <Option value="Barcelona">Barcelona</Option>
                <Option value="Miami">Miami</Option>
                <Option value="Paris">Paris</Option>
                <Option value="Berlin">Berlin</Option>
                <Option value="Amsterdam">Amsterdam</Option>
                <Option value="México">México</Option>
                <Option value="Sao Paulo">Sao Paulo</Option>
              </Select> */}
            </Form.Item>
            <Form.Item label="Course">
              <Input
                value={user.course}
                onChange={this.handleInputs}
                name="course"
                placeholder="Web Dev"
                required
              />
              {/* <Select name="course" defaultValue="Data Analytics" required>
                <Option value="WebDev">WebDev</Option>
                <Option value="UX / UI">UX / UI</Option>
                <Option value="Data Analytics">Data Analytics</Option>
              </Select> */}
            </Form.Item>
            <Form.Item></Form.Item>
            <small>
              If you signup, you agree with all our terms and conditions where we can do whatever we
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
              Create the account
            </Button>
          </Form>
        </Card>
      </section>
    )
  }
}

export default Signup
