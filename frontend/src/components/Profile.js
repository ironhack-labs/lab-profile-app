import React, {Component} from 'react';
import {MyContext} from '../context';
import {Button, Card} from 'antd';

export default class Profile extends Component {
  state = {
    user: {}
  };

  componentDidUpdate() {
    if (!this.context.state.loggedUser) {
      return this.props.history.push('/login');
    }
  }

  render() {
    if (!this.context.state.loggedUser) {
      return null;
    }
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
          <h1
            style={{
              color: '#638165'
            }}
          >
            Profile
          </h1>
          <h2>Hello {this.context.state.loggedUser.username} </h2>
          <p>
            Your campus is: <b>{this.context.state.loggedUser.campus}</b>
          </p>
          <p>
            Your course is: <b>{this.context.state.loggedUser.course}</b>
          </p>
          <Button
            onClick={this.context.logOut}
            style={{
              backgroundColor: '#c0e3be',
              color: '#638165',
              margin: '15px',
              width: '200px',
              border: 'none',
              display: 'block'
            }}
          >
            Log out
          </Button>
        </Card>
      </div>
    );
  }
}

Profile.contextType = MyContext;
