import React, { Component } from 'react';
import { MyContext } from '../context/index';
import {  Button } from 'antd';


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
      <div style={{display: 'flex', marginLeft: '10%', marginTop: '10%', width: '80vw', height: '80vh', flexDirection: 'column', backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover'}}>
       <div style={{marginTop: '15vh', marginLeft: '10vw'}}>
        <p style={{fontSize: '3rem', marginTop: "6vh"}}>Login</p>
        <h2 style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Username:</h2>
        <p style={{fontSize: '1.3rem'}}>{user.username}</p>
        <h2 style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Course: </h2>
        <p style={{fontSize: '1.3rem'}}>{user.course}</p>
        <h2 style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Campus:</h2>
        <p style={{fontSize: '1.3rem'}}>{user.campus}</p>
        <Button type="danger" style={{width: '10vw'}} onClick={this.logout}>Log out</Button>
       </div>
      </div>
    );
  }
}

Profile.contextType = MyContext;