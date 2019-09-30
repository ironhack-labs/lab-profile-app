import React, { Component } from 'react';
import { MyContext } from '../context';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

export default class Homepage extends Component {


  render() {
    return (
      <div>
        <p>Iron Profile</p>
        <p>Today we will create an app with authorization, adding some cool styles!</p>
        <Link to="/signup"> <Button type="submit" value="signup">Sign up</Button></Link>
        <Link to="/login"> <Button type="submit" value="Login">Login</Button></Link>
      </div>
    ) 
  }  
}

// Homepage.contextType = MyContext;

 

