import React, { Component } from 'react';
import { MyContext } from '../context';
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'

export default class Profile extends Component {
    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login');
    }

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
                <Card title="Profile" style={{
                    width: '80vw',
                    height: '80vh',
                    backgroundImage: 'url(../oval-bg.png)',
                    backgroundSize: 'cover'
                }}>
                    <h2>Username</h2>
                    <strong>{this.context.state.loggedUser.username}</strong>
                    <h2>Campus</h2>
                    <strong>{this.context.state.loggedUser.campus}</strong>
                    <h2>Course</h2>
                    <strong>{this.context.state.loggedUser.course}</strong>
                    <Link to="/profile/edit">Edit profile info</Link>
                    <Button onClick={this.context.logOut}>Log out</Button>
                </Card>
            </div>
        );
    }
}

Profile.contextType = MyContext;