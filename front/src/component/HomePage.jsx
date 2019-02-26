import React, { Component } from 'react'
import Button from './Button';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Button route={"/login"}>Login</Button>
        <Button route={"/signup"}>Signup</Button>
      </div>
    )
  }
}
