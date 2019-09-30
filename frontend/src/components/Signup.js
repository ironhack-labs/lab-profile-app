import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';

class Signup extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push('/profile');
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <h2>Signup</h2>
        <Card style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input onChange={this.handleInput} type="text" name="username" placeholder="Username" />
            </Form.Item>
            <Form.Item>
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <select
                onChange={this.handleInput}
                type="text"
                name="campus"
                placeholder="Campus"
              >
                <option value='Madrid'>Madrid</option>
                <option value='Barcelona'>Barcelona</option>
                <option value='Miami'>Miami</option>
                <option value='Paris'>Paris</option>
                <option value='Berlin'>Berlin</option>
                <option value='Amsterdam'>Amsterdam</option>
                <option value='Mexico'>Mexico</option>
                <option value='Sao'>Sao</option>
              </select>
            </Form.Item>
            <Form.Item>
              <select
                onChange={this.handleInput}
                type="text"
                name="course"
                placeholder="Course"
              >
                <option value='WebDev'>WebDev</option>
                <option value='UX/UI'>UX/UI</option>
                <option value='Data Analytics'>Data Analytics</option>
              </select>
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Signup" />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Signup;