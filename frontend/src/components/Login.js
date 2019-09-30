import React, {Component} from 'react';
import {MyContext} from '../context';
import {Card, Form, Icon, Button, Input} from 'antd';
import AUTH_SERVICE from '../services/auth';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  state = {
    user: {}
  };

  handleInput = e => {
    const {user} = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({user});
  };

  onSubmit = e => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then(response => {
        this.context.logUser(response.data.user);
        this.props.history.push('/profile');
      })
      .catch(console.error());
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
        <Card style={{width: '50vw'}}>
          <h2
            style={{
              color: '#638165'
            }}
          >
            Login
          </h2>

          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Username">
              <Input
                onChange={this.handleInput}
                type="text"
                name="username"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Password"
              />
            </Form.Item>
            <small>
              {' '}
              if you don't have an account yet, you can create your account <Link to="/signup">here</Link>.
            </small>
            <Form.Item>
              <Button
                htmlType="submit"
                style={{
                  backgroundColor: '#c0e3be',
                  color: '#638165',
                  margin: '15px',
                  width: '200px',
                  border: 'none',
                  display: 'block'
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

Login.contextType = MyContext;
