import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/authService';

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
          height: '100vh',
          backgroundColor: '#e5fbed'
        }}
      >
        <Card title="Signup" style={{
          width: '80vw',
          height: '80vh',
          backgroundImage: 'url(../oval-bg.png)',
          backgroundSize: 'cover'
        }}>
          <Form onSubmit={this.onSubmit} style={{ width: '40vw' }}>
            <Form.Item label="User name">
              <Input name="username" onChange={this.handleInput} type="text" />
            </Form.Item>
            <Form.Item label="Password">
              <Input name="password" onChange={this.handleInput} type="password" />
            </Form.Item>
            <Form.Item label="Campus">
              <Input name="campus" onChange={this.handleInput} type="text" />
            </Form.Item>
            <Form.Item label="Course">
              <Input name="course" onChange={this.handleInput} type="text" />
            </Form.Item>
            <Form.Item>
              <Button type="submit" htmlType="submit">Signup</Button>
              <Link to="/login">
                <Button type="link">Have an account, Login</Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Signup;