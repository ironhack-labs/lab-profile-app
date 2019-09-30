import React, { Component } from 'react'
import { MyContext } from '../context/index'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  state = {
    user: {
      username: '',
      course: ''
    }
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userinfo = this.context.state.loggedUser
    this.setState(userinfo)
    console.log(userinfo)
    console.log(this.context.state.loggedUser.username)
  }

  logout() {
    localStorage.clear()
    window.location.href = '/'
  }

  render() {
    const user = this.state
    return (
      <div
        style={{
          display: 'flex',
          marginLeft: '25%',
          marginTop: '10%',
          width: '70vw',
          height: '60vh',
          flexDirection: 'column',
          backgroundImage: 'url("/image/oval-bg.png")',
          backgroundSize: 'cover'
        }}
      >
        <div style={{ marginTop: '15vh', marginLeft: '10vw' }}>
          <h2>Username:</h2>
          <p style={{ fontSize: '14px' }}>{user.username}</p>
          <h2>Course: </h2>
          <p style={{ fontSize: '14px' }}>{user.course}</p>
          <h2>Campus:</h2>
          <p style={{ fontSize: '14px' }}>{user.campus}</p>
        </div>
        <Link to="/edit">
          {' '}
          <Button
            type="primary"
            style={{ width: '10vw', float: 'left', marginTop: '80px' }}
          >
            Edit
          </Button>
          <Button
            type="danger"
            style={{
              width: '10vw',
              float: 'right',
              marginTop: '10%',
              marginRight: '25%'
            }}
            onClick={this.logout}
          >
            Log out
          </Button>
        </Link>
      </div>
    )
  }
}

Profile.contextType = MyContext
