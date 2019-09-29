  
import React, { Component } from 'react';
import { MyContext } from '../context';

export default class HomePage extends Component {
  componentDidMount() {
   // if (!this.context.state.loggedUser) return this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <button onClick={this.context.logOut}>Log out</button>
      </div>
    );
  }
}

HomePage.contextType = MyContext;