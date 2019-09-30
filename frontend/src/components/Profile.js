import React, { Component } from 'react';
import { MyContext } from '../context/index';
import {  Button } from 'antd';
import { Link } from 'react-router-dom'



export default class Profile extends Component {
  
  state = {
    user: {
      username: '',
      course: ''
    }
  };


  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login');
    const userinfo = this.context.state.loggedUser
    this.setState( userinfo );
    console.log(userinfo)
    console.log(this.context.state.loggedUser.username)
  }

  
  
  
  logout() {
    localStorage.clear();
    window.location.href = '/';
}


  render() {
    const user = this.state
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          width: '100vw',
          height: '100vh',
          background: '#d1f1c7',
      }}>
       <div style={{backgroundImage: 'url("./images/oval-bg.png")'}}>
       <div style={{marginTop: '15vh', marginLeft: '10vw'}}>
            <p style={{fontSize: '1.3rem'}}>Username: {user.username}</p>
            <p style={{fontSize: '1.3rem'}}>Course: {user.course}</p>
            <p style={{fontSize: '1.3rem'}}>Campus: {user.campus}</p>
        </div>
          <Link to="/edit">  <Button type="primary" style={{width: '10vw', float: 'left', marginTop: '80px', background:'white', color:'#9eb199'}}>Edit</Button> </Link>
          <Button type="danger" style={{width: '10vw', float: 'center', background:'white', color:'#9eb199'}} onClick={this.logout}>Log out</Button>
       </div>
       
      </div>
      
    );
  }
}



Profile.contextType = MyContext;