import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/authService';
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
                this.props.history.push('/auth/profile');
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
                <Card title="Login" style={{
                    width: '80vw',
                    height: '80vh',
                    backgroundImage: 'url(../oval-bg.png)',
                    backgroundSize: 'cover'
                }}>
                    <Form onSubmit={this.onSubmit} style={{ width: '40vw' }}>
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
                            <Link to="/auth/signup">
                                Haven't an account, Signup
                            </Link>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

Login.contextType = MyContext;

export default Login;