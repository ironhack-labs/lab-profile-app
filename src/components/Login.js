import React from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Mycontext } from '../context'

const Login = () => {
  return(
    <>
      <Mycontext.Consumer>
      {({ handleInputs, handleSubmit, form, username, password }) => {
        return(
          <Container className="mt-5">
            <Row>
              <Col sm={12} md={6} className="mb-4">
                <Card className="text-center">
                  <Card.Header>Log in</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Form>
                        <Form.Group>
                          <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={handleInputs}/>
                        </Form.Group>

                        <Form.Group>
                          <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInputs}/>
                        </Form.Group>
                          
                        <p>If you don't have an account yet, you can create your account <Link to="/signup">here</Link>.</p>
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <h2>Hello!</h2>
                <h3 className="mb-5">Awesome to have at IronProfile again!</h3>
                <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data.</p>
                <Button onSubmit={handleSubmit} variant="primary">Log in</Button>
              </Col>
            </Row>
          </Container>
        )
      }}
      </Mycontext.Consumer>
    </>
  )
}

export default Login