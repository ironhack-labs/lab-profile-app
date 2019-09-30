import React, { Component } from 'react'
import { Input, Form, Select } from 'antd'
import AUTH_SERVICE from '../services/auth'
// import DATA_SERVICE from '../services/getData'
const { Option } = Select

class Signup extends Component {
  state = {
    user: {}
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await AUTH_SERVICE.signup(this.state.user)
      this.props.history.push('/auth/login')
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

  // handleChange = (name) => {
  //   console.log(" name:" + name)
  //   const { user } = this.state
  //   const key = name
  //   user[key] = name
  //   this.setState({ user })
  // }

  // dataFilter = (filter) => {
  //   const result = new Promise((resolve, reject) => {
  //     resolve(DATA_SERVICE.findAllData(filter))
  //   })
  //   return result
  // }

  render() {
    return (
      <div id="main">
        <div className="row">
          <div className="col">
            <h2>Signup</h2>
            {/* <Card style={{ width: '40vw' }}> */}
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Username" className="form-items">
                <Input onChange={this.handleInput} type="email" name="username" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Password" className="form-items">
                <Input onChange={this.handleInput} type="password" name="password" placeholder="Enter your password" />
              </Form.Item>
              <Form.Item label="Campus" className="form-items">
                <Select labelInValue name="campus" onChange={(value) => {
                  const { user } = this.state
                  const key = "campus"
                  user[key] = value.label
                  this.setState({ user })
                }}>
                  {/* {result.map((course) => ( */}
                  <Option value="madrid">Madrid</Option>
                  <Option value="barcelona">Barcelona</Option>
                  <Option value="miami">Miami</Option>
                  <Option value="paris">Paris</Option>
                  <Option value="berlin">Berlín</Option>
                  <Option value="amsterdam">Armsterdam</Option>
                  <Option value="mexico">México</Option>
                  <Option value="sao paulo">Sao Paulo</Option>
                  {/* ))} */}
                </Select>
              </Form.Item>
              <Form.Item label="Course:" className="form-items">
                <Select labelInValue onChange={(value) => {
                  const { user } = this.state
                  const key = "course"
                  user[key] = value.label
                  this.setState({ user })
                }}>
                  {/* {result.map((course) => ( */}
                  <Option value="webdev">WebDev</Option>
                  <Option value="ux/ui">UX/UI</Option>
                  <Option value="data-analytics">Data Analytics</Option>
                  {/* ))} */}
                </Select>
              </Form.Item>
            </Form>
            {/* </Card> */}
          </div>
          <div className="col">
            <h3>Hello</h3>
            <p>Welcome to IronProfile!</p>
            <div>
              <p>If you signup, you agree with all our
              terms and conditions, where we can do whathever
                we want with the data!
            </p>
              <Input className="submit-button" type="submit" value="Signup" onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Signup