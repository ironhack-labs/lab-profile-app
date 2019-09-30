import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from 'antd'
const { Title } = Typography

export default class Home extends Component {

  render() {
    return (
      <div id="main">
        <div className="single-col">
          <h2>IronProfile</h2>
          <Title className="titles" level={4}>
            Today we will create an app with authorization
            adding some cool styles!
          </Title>
          <div id="buttons">
            <Link to="/auth/signup"><Button>Sign up</Button></Link>
            <Link to="/auth/login"><Button>Log in</Button></Link>
          </div>
        </div>
      </div >
    )
  }
}
