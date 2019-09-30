import React from 'react'

import { Card, Input, Form, Button } from 'antd'

import { MyContext } from '../context/index'
import AUTH_SERVICE from '../services/auth'

export default class Edit extends React.Component {
  state = {
    updateUser: {}
  }

  handleInput = e => {
    const { updateUser } = this.state
    const key = e.target.name
    updateUser[key] = e.target.value
    this.setState({ updateUser })
    console.log(this.state.updateUser)
  }

  onSubmit = () => {
    let { updateUser } = this.state

    {
      AUTH_SERVICE.edit({ ...updateUser })
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
    this.props.history.push('/profile', { new: true })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '80vw',
          height: '80vh'
        }}
      >
        <Card
          style={{
            width: '80vw',
            height: '70vh',
            backgroundSize: 'cover'
          }}
        >
          <div>
            <p style={{ fontSize: '3rem', marginLeft: '20%' }}>Edit Profile</p>
            <Form onSubmit={this.onSubmit}>
              <Form.Item>
                <label>User Name</label>
                <br></br>
                <Input
                  onChange={this.handleInput}
                  style={{ width: '30vw' }}
                  type="text"
                  name="username"
                  placeholder="User name"
                />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <br></br>
                <Input
                  style={{ width: '30vw' }}
                  onChange={this.handleInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <label>Campus</label>
                <br></br>
                <Input
                  style={{ width: '30vw' }}
                  onChange={this.handleInput}
                  type="text"
                  name="campus"
                  placeholder="Campus"
                />
              </Form.Item>
              <Form.Item>
                <label>Course</label>
                <br></br>
                <Input
                  style={{ width: '30vw' }}
                  onChange={this.handleInput}
                  type="text"
                  name="course"
                  placeholder="course"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: '20vw' }}
                  type="button"
                  onClick={this.onSubmit}
                  value="Confirm"
                >
                  Confirm
                </Button>
                <br></br>
              </Form.Item>
            </Form>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'right',
              textAlign: 'center',
              marginLeft: '10vw',
              justifyContent: 'space-between'
            }}
          ></div>
        </Card>
      </div>
    )
  }
}

Edit.contextType = MyContext
