import React from "react";
import { useForm } from "react-hook-form";

import { Button, Form, Group, Label, Control, Text } from "react-bootstrap";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Enter Username"
          ref={register({ required: true })}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="pasword"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
      </Form.Group>{" "}
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
