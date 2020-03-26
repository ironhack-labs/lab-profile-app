import React from "react";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export const Profile = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>User Name</ListGroupItem>
        <ListGroupItem>Campus</ListGroupItem>
        <ListGroupItem>Course</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Logout</Card.Link>
      </Card.Body>
    </Card>
  );
};
