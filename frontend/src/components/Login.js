import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';

class Login extends Component {
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
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user);
        this.props.history.push('/profile');
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
          height: '100vh'
        }}
      >
        <h2>Login</h2>
        <Card style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input onChange={this.handleInput} type="text" name="username" placeholder="username" />
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
              <Input type="submit" value="Login" />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;