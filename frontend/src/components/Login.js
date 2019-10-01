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
        this.props.history.push('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100vw', height: '100vh'}}>
        <Card style={{ width: '80vw', height: '80vh', backgroundImage: 'url("/assets/oval-bg.png")', backgroundSize: 'cover'  }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <div style={{ width: '50vw', marginLeft: '4vw'}} >
              <p style={{fontSize: '3rem', marginTop: "6vh"}}>Login</p>
              <div>
                <Form onSubmit={this.onSubmit} style={{marginTop:'10vh'}}>
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
                </Form>
                <p style={{fontSize: '.9rem', width: '20vw', color: "#bdbdbb"}}>If you do not have an account you can create your account <Link to="/signup">here</Link></p>
              </div>
            </div>
            <div style={{ width: '30vw'}}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h1 style={{lineHeight: '2.2rem', marginTop: "7vh"}}>Hello!!</h1>
                <p style={{fontSize: '2rem', lineHeight: '2.2rem'}}>Awesome to have you at Ironprofile again</p>
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

Login.contextType = MyContext;

export default Login;