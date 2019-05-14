import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeContainer = () => (
  <Container className="mt-4">
    <Row>
      <Col sm={12} md={{ span: 4, offset: 4 }}>
      <Card className="text-center">
        <Card.Header>IronProfile</Card.Header>
        <Card.Body>
          <Card.Text>
            Today we will create an appa with authoritation, addin some cool styles!
          </Card.Text>
          <Link to="/signup">
            <Button className="mr-2" variant="primary">Sign up</Button>
          </Link>
          <Link to="/login">
            <Button className="ml-2" variant="primary">Log in</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
    </Row>
  </Container>
)

export default HomeContainer