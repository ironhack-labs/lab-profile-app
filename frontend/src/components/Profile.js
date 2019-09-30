import React, { Component } from 'react'
import { Form, Button, Card } from 'antd'
import '../App.css'
// import axios from 'axios'
import { MyContext } from '../context'

class Profile extends Component {
  state = {
    user: {
      image: '',
      username: '',
      course: '',
      campus: ''
    }
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userData = this.context.state.loggedUser
    this.setState(userData)
  }

  render() {
    const user = this.state
    return (
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}>
        <Card style={{ width: '60%' }}>
          <h2
            style={{
              color: '#638165'
            }}>
            Profile
          </h2>
          <Form>
            <Form.Item label="Photo">
              <img src={user.image} alt="yes" width="250vw" />
            </Form.Item>
            <Form.Item label="Username">
              <h3>{user.username}</h3>
            </Form.Item>
            <Form.Item label="Campus">
              <h3>{user.campus}</h3>
            </Form.Item>
            <Form.Item label="Course">
              <h3>{user.course}</h3>
            </Form.Item>
            <small>
              The user is able to upload a new profile photo, usind Node Js ands multer uploader
            </small>
            <br />
            <Button
              href="/login"
              onClick={this.context.logOut}
              style={{
                background: 'tomato',
                border: 'none',
                color: 'white',
                margin: '20px 0 20px 0'
              }}>
              Logout
            </Button>
          </Form>
        </Card>
      </section>
    )
  }
}

Profile.contextType = MyContext

export default Profile
