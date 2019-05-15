import React, { Component } from 'react'
import history from './history'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Mycontext } from '../context'

class Profile extends Component {

  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (!user) return history.push('/')
  }

  render() {
    const user = JSON.parse(localStorage.getItem('loggedUser'))

    if (!user) return (<></>)

    return (
      <Mycontext.Consumer>
      {({ handleLogout }) => {
        return(
          <Container className="mt-5">
            <Row>
              <Col sm={12} md={6} className="mb-4">
                <Card className="text-center">
                  <Card.Header>Profile</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>
                        <span className="text-muted">Name: </span> 
                        {user.name}
                      </p>
                      <p>
                        <span className="text-muted">Username: </span> 
                        {user.email}
                      </p>
                      <p>
                        <span className="text-muted">Campus: </span> 
                        {user.campus}
                      </p>
                      <p>
                        <span className="text-muted">Course: </span> 
                        {user.course}
                      </p>
                      <Button variant="danger" onClick={handleLogout}>Log out</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <h2>Hello!</h2>
                <h3 className="mb-5">Awesome to have at IronProfile again!</h3>
                <p>The user is able to upload a new profile photo, using hypsters techniques.</p>
              </Col>
            </Row>
          </Container>
        )}
      }
      </Mycontext.Consumer>
    )
  }
}

export default Profile
