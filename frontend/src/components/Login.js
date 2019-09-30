import React, { Component } from 'react'
import { Input, Form } from 'antd'
import AUTH_SERVICE from '../services/auth'
import { Link } from 'react-router-dom'
import { MyContext } from '../context'

class Login extends Component {
  state = {
    user: {}
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await AUTH_SERVICE.login(this.state.user)
      this.context.logUser({ username: response.data.username, course: response.data.course, campus: response.data.campus })
      this.props.history.push('/auth/loggedin')
    } catch (err) {
      console.log(`There was an error here: ${err}`)
    }
  }

  handleInput = (e) => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  render() {
    return (
      <div id="main">
        <div className="row">
          <div className="col">
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Username">
                <Input onChange={this.handleInput} type="email" name="username" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Password">
                <Input onChange={this.handleInput} type="password" name="password" placeholder="Enter your password" />
              </Form.Item>
              <small>If you don't have an account yet, you can create your account <Link to="/auth/signup">here</Link></small>
            </Form>
          </div>
          <div className="col">
            <h3>Hello!!</h3>
            <p>Awesome to have at IronProfile again!</p>
            <div>
              <p>If you signup, you agree with all our
              terms and conditions, where we can do whathever
                we want with the data!
            </p>
              <Input className="submit-button" type="submit" value="Log In" onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

Login.contextType = MyContext