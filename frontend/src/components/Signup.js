import React, { Component } from 'react';
import { Card, Input, Form } from 'antd';
import AUTH_SERVICE from '../services/auth';
import { Link } from 'react-router-dom'

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
      this.props.history.push('/profile');
  };

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <Card style={{ width: '80vw', height: '80vh', backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover'  }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <div style={{ width: '50vw', marginLeft: '4vw'}} >
              <p style={{fontSize: '3rem', marginTop: "4vh"}}>Sign Up</p>
              <div>
                <Form onSubmit={this.onSubmit} style={{marginTop:'5vh'}}>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Username</label>
                    <br></br>
                    <Input onChange={this.handleInput} type="text" name="username" style={{width: '20vw', backgroundColor: "#f0efe9"}} />
                  </Form.Item>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Password</label>
                    <br></br>
                    <Input
                      onChange={this.handleInput}
                      type="password"
                      name="password"
                      style={{width: '20vw', backgroundColor: "#f0efe9"}}
                    />
                  </Form.Item>            
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Campus</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="campus"
                      placeholder="Campus"
                      style={{width: '20vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option value='Madrid'>Madrid</option>
                      <option value='Barcelona'>Barcelona</option>
                      <option value='Miami'>Miami</option>
                      <option value='Paris'>Paris</option>
                      <option value='Berlin'>Berlin</option>
                      <option value='Amsterdam'>Amsterdam</option>
                      <option value='Mexico'>Mexico</option>
                      <option value='Sao'>Sao</option>
                    </select>
                  </Form.Item>
                  <Form.Item>
                    <label style={{fontSize: '1rem', color: "#bdbdbb", padding: "0"}}>Courses</label>
                    <br></br>
                    <select
                      onChange={this.handleInput}
                      type="text"
                      name="course"
                      placeholder="Course"style={{width: '20vw', height: '4vh', backgroundColor: "#f0efe9"}}
                    >
                      <option value='WebDev'>WebDev</option>
                      <option value='UX/UI'>UX/UI</option>
                      <option value='Data Analytics'>Data Analytics</option>
                    </select>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div style={{ width: '30vw'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h1 style={{lineHeight: '2.2rem', marginTop: "7vh"}}>What Up Though!!</h1>
                <p style={{fontSize: '2rem', lineHeight: '2.2rem'}}>Welcome to Ironprofile</p>
                <div style={{margin: '0', padding: "0"}}>
                  <Form onSubmit={this.onSubmit} style={{marginTop:'10vh', width: '20vw'}}>
                  <p>I'm going to say this without saying this, but if you sign up you have to know that we own you.  But still do it!!</p>
                    <Form.Item>
                      <Input type="submit" value="Log In" style={{width: '20vw', marginRight: '10vw', marginTop: '1vh'}} />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>      
    );
  }
}

export default Signup;