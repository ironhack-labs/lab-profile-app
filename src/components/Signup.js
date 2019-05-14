import React from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Mycontext } from '../context'

const Signup = () => (
  <Mycontext.Consumer>
  {({ handleInput, handleSubmit, name, email, password, campus, course }) => {
    return (
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={6} className="mb-4">
            <Card className="text-center">
              <Card.Header>Sign up</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form>
                  <Form.Group>
                      <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInput} />
                    </Form.Group>

                    <select className="browser-default custom-select mb-3" name="campus" onChange={handleInput} value={campus}>
                      <option>Campus</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Miami">Miami</option>
                      <option value="Paris">Paris</option>
                      <option value="Berlín">Berlín</option>
                      <option value="Amsterdam">Amsterdam</option>
                      <option value="México">México</option>
                      <option value="Sao Paulo">Sao Paulo</option>
                    </select>

                    <select className="browser-default custom-select mb-3" onChange={handleInput} name="course" value={course}>
                      <option>Course</option>
                      <option value="WebDev">WebDev</option>
                      <option value="UX/UI">UX/UI</option>
                      <option value="Data Analytics">Data Analytics</option>
                    </select>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col sm={12} md={6}>
          <h2>Hello!</h2>
          <h3 className="mb-5">Welcome to IronProfile</h3>
          <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data.</p>
          <Button onClick={handleSubmit} variant="primary">Create an Account</Button>
        </Col>
      </Row>
    </Container>
    )}
  }
  </Mycontext.Consumer>
)

export default Signup