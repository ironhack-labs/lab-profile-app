import React, { Component } from 'react';
import { MyContext } from '../context';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

export default class Homepage extends Component {


  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100vw', height: '100vh'   }}>
        <div style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover'  }}>
          <div style={{marginTop: '5vh',marginLeft: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '35vw', alignContent: 'center'}}>
            <p style={{fontSize: '3rem', color: '#638165'}}>Iron Profile</p>
            <p style={{fontSize: '2rem'}} >Today we will create an app with authorization, adding some cool styles!</p>
            <Link to="/signup"> <Button type="submit" value="signup" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Sign up</Button></Link>
            <Link to="/login"> <Button type="submit" value="Login" style={{ width: '30vw', marginRight: '10vw', marginTop: '6vh'}}>Login</Button></Link>
          </div>
        </div>
      </div>
    ) 
  }  
}

Homepage.contextType = MyContext;

 

