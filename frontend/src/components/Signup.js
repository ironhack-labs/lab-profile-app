import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';



class Signup extends Component {
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
     AUTH_SERVICE.signup(this.state.user)
    
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      this.props.history.push('/')
  };


 

  render() {
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
       
        <Card style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("/image/oval-bg.png")', backgroundSize: 'cover'  }}>
        <div style={{}}>
        <p style={{fontSize: '3rem', marginLeft: '2vw'}}>Sign Up</p>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
            <label>User Name</label>
            <br></br>
              <Input onChange={this.handleInput} style={{width: '30vw'}} type="text" name="username" placeholder="User name" />
            </Form.Item>
            <Form.Item>
            <label>Password</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
            <label>Campus</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="text"
                name="campus"
                placeholder="Madrid, Barcelona, Miami, Paris, Berlin, Amsterdam, México, Sao Paulo"
              />
            </Form.Item>
            <Form.Item>
            <label>Course</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="text"
                name="course"
                placeholder="WebDev, UX/UI, Data Analytics"
              />
            </Form.Item>
            <Form.Item>
           <Input style={{width: '20vw'}}  type="submit"  value="Signup" /> 
            </Form.Item>
            
          </Form>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignContent: 'right', textAlign: 'center', marginLeft: '10vw', justifyContent:'space-between'}}><h1>Hello!!
           </h1><h2>Welcome to Iron Profile</h2>
           <p>Si te registras/logeas ya se la pelaron tus datos y podemos hacer con ellos lo que queramos xd</p></div>
        </Card>
      </div>
    );
  }
}

export default Signup;
