import React, { Component } from 'react';
import { Card, Form, Input } from 'antd'
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
        this.props.history.push('/auth/login');
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
              <Input name="campus" onChange={this.handleInput} type="text" placeholder="Madrid, Barcelona, Miami, Paris, Berlin, Amsterdam, México, Sao Paulo" />
            </Form.Item>
            <Form.Item label="Course">
              <Input name="course" onChange={this.handleInput} type="text" placeholder="WebDev, UX/UI, Data Analytics" />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Signup" />
              <Link to="/auth/login">
                Have an account, Login
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Signup;