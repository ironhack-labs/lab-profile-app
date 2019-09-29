import React, { Component } from 'react';
import { Card, Input, Form, Button } from 'antd';

import { MyContext } from '../context';
import { Link } from 'react-router-dom'

class Home extends Component {
  

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
         
        }}
      >
       
        <div style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("/image/oval-bg.png")', backgroundSize: 'cover'  }}>
        <div style={{marginTop: '5vh',marginLeft: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '35vw', alignContent: 'center'}}>
        <p style={{fontSize: '3rem', color: '#638165'}}>Iron Profile</p>
        <p style={{fontSize: '2rem'}}>Hoy vamos a crear una app bien chida, rifada con login y todo</p>
        <Link to="/signup"> <Button type="submit" value="signup" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Sign up</Button></Link>
        <Link to="/login"> <Button type="submit" value="Login" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Login</Button></Link>
        </div>
        </div>
        </div>
       
      
    );
  }
}

Home.contextType = MyContext;

export default Home;
