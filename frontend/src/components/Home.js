import React, { Component } from 'react'
import { Card, Input, Form, Button } from 'antd'

import { MyContext } from '../context'
import { Link } from 'react-router-dom'

class Home extends Component {
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
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundImage:
              'url(' + 'https://i.ibb.co/zsxmYbt/oval-bg.png' + ')',
            backgroundSize: 'cover'
          }}
        >
          <div
            style={{
              marginLeft: '10vw',
              marginTop: '10vh',
              width: '55vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignContent: 'center'
            }}
          >
            <p>Create a profile or Login</p>
            <Link to="/signup">
              <Button
                type="submit"
                value="signup"
                style={{
                  width: '200px',
                  marginTop: '100px',
                  marginRight: '100px'
                }}
              >
                Sign up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                type="submit"
                value="Login"
                style={{
                  width: '200px',
                  marginTop: '100px',
                  marginRight: '100px'
                }}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Home.contextType = MyContext

export default Home
