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
          flexWrap: 'wrap',
          width: '100vw',
          height: '100vh',
          background: '#d1f1c7',
        }}
      >
       
        <Card style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("./images/oval-bg.png")', backgroundSize: 'cover'  }}>
        <div style={{}}>
         <p style={{fontSize: '1rem', marginLeft: '2vw', fontWeight:'bolder'}}>Sign Up</p>
          <Form onSubmit={this.onSubmit} style={{ width: '40vw', fontSize: '0.8rem', marginLeft: '2vw'}} >
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
          <div style={{width: '20vw', display:'flex', flexDirection:'column', alignContent: 'right', textAlign: 'justify', marginLeft: '5vw', justifyContent:'space-between'}}><h1>Hello!!
           </h1><h2>Welcome to Iron Profile</h2>
           <p>If you signup, you agree with all our terms and conditions shere we can do whatever we want with the data</p></div>
        </Card>
      </div>
    );
  }
}

export default Signup;