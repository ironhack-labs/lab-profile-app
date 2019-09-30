
import React, { Component } from 'react';
import { Card, Form, Button } from 'antd';

import { MyContext } from '../context';
import { Link } from 'react-router-dom'

class Home extends Component {
  

  render() {
    return (
      <div
        style={{
          background: '#b5e2a9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
         
        }}
      >
       
        <div style={{ width: '80vw', height: '70vh',  backgroundImage: 'url(./images/oval-bg.png)', backgroundSize: 'cover'  }}>
        <div style={{marginTop: '5vh',marginLeft: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '35vw', alignContent: 'center'}}>
        <p style={{fontSize: '2rem', color: '#638165', fontWeight:'bolder'}}>Iron Profile</p>
        <p style={{fontSize: '1rem'}}>Today we will create an app with authoritation, adding some cool styles</p>
        <Link to="/signup"> <Button type="submit" value="signup" style={{ width: '30vw', marginRight: '10vw', marginTop: '5vh', background:'#b5e2a9', fontWeight:'bold', fontSize: '0.6rem'}}>Sign up</Button></Link>
        <Link to="/login"> <Button type="submit" value="Login" style={{ width: '30vw', marginRight: '10vw', marginTop: '5vh', background:'#b5e2a9', fontWeight:'bold', fontSize: '0.6rem'}}>Login</Button></Link>
        </div>
        </div>
        </div>
       
      
    );
  }
}

Home.contextType = MyContext;

export default Home;