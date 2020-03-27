import React, { useState } from 'react';
import { signup } from './../services/authService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { withRouter } from "react-router-dom";

const SignupPage =  withRouter(({ history })=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      const res = await signup({username, password, campus, course})
      console.log(res);
      history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Container>
      <h1>Sign Up</h1>
      <h2>Hello!!</h2>
      <h3>Welcome to IronProfile!</h3>
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

            <Form.Group controlId="campus">
              <Form.Label>Campus</Form.Label>
              <Form.Control type="text" value={campus} onChange={(e) => setCampus(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" value={course} onChange={(e) => setCourse(e.target.value)}/>
            </Form.Group>

            <div style={{textAlign: 'center'}}>
              <Button variant="primary" type="submit" >
                Create the Account
              </Button>
            </div>
          </Form>    
    </Container>
  );
});

export default SignupPage;
