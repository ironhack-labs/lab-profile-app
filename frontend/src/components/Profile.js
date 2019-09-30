import React, { Component } from 'react'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'
import {  Typography } from 'antd'
const { Text, Title } = Typography


export default class Profile extends Component {
  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/')
  }
  render() {
    return (
      <div id="main">
        <div className="single-col">
          <h2>Profile</h2>
          <Text type="secondary">Username</Text>
          <Title className="titles" level={3}>{this.context.state.loggedUser.username}</Title>
          <Text type="secondary">Campus</Text>
          <Title className="titles" level={3}>{this.context.state.loggedUser.campus}</Title>
          <Text type="secondary">Course</Text>
          <Title className="titles" level={3}>{this.context.state.loggedUser.course}</Title>
          <Link className="links" to="/auth/login" onClick={this.context.logOut}>Logout</Link>
        </div>
      </div >
    )
  }
}

Profile.contextType = MyContext