import React, { useState } from 'react';
import { login } from './../services/authService';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const LoginPage = withRouter(({ history })=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const res = await login({username, password})
      console.log(res);
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Container>
        <h1>Log In</h1>
        <h2>Hello!!</h2>
        <h3>Awesome to have an IronProfile again!</h3>
        <p>If you sign up, you agree with all our terms and conditions where we can do whatever we want with the data!</p>

        <Form onSubmit={handleSubmit} >
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>

              <p>If you don't have an account yet you can create one <Link to='/signup'>here</Link></p>
              <div style={{textAlign: 'center'}}>
                <Button variant="primary" type="submit" >
                  Log In
                </Button>
              </div>
            </Form>    
      </Container>
  );
});

export default LoginPage;
