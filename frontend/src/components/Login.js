import React, { Component } from 'react';
import { Card, Input, Form, Button } from 'antd';
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    user: {}
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user);
        this.props.history.push('/profile/');
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  

  render() {
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
        }}
      >
       <div>
        <Card style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("./images/oval-bg.png")', backgroundSize: 'cover'  }}>
        <p style={{fontSize: '3rem', marginLeft: '2vw'}}>Login</p>
        <div>
          <Form onSubmit={this.onSubmit} style={{marginTop:'20vh'}}>
          
            <Form.Item>
            
            <label style={{fontSize: '2rem'}}>User Name</label>
            <br></br>
              <Input onChange={this.handleInput} type="text" name="username" placeholder="User name" style={{width: '30vw'}} />
            </Form.Item>
            <Form.Item>
            <label style={{fontSize: '2rem'}}>Password</label>
            <br></br>
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
                style={{width: '30vw'}}
              />
            </Form.Item>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Form.Item>
              <Input type="submit" value="Login" style={{float: 'right', width: '10vw', marginRight: '10vw', marginTop: '1vh'}} />
            </Form.Item>
            
            </div>
          </Form>
          </div>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '40vh', marginLeft: '10vw'}}>
        <Form.Item>
             <Link to="/signup"> <Button type="submit" value="submit" style={{float: 'right', width: '10vw', marginRight: '10vw', marginTop: '6vh'}}>Sign up</Button></Link>
            </Form.Item>
            <p style={{fontSize: '1.1rem'}}>If you don't have an accounte yet, you can create your account here</p>
            </div>
        </Card>
        </div>
       
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;