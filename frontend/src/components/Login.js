import React from "react";
import { useForm } from "react-hook-form";
import { doLogin } from "../../lib/api";
import { withRouter } from "react-router-dom";
import { Button, Form, Group, Label, Control, Text } from "react-bootstrap";

export const Login = withRouter(({ history }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (username, password) => {
    const user = await doLogin(username, password);
    history.push("/");
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
});
