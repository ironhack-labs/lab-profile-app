import React from "react";
import { useForm } from "react-hook-form";
import { doSignup } from "../../lib/api";
import { withRouter } from "react-router-dom";
import { Button, Form, Group, Label, Control, Text } from "react-bootstrap";

export const Signup = withRouter(({ history }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (username, password, campus, course) => {
    const user = await doSignup(username, password, campus, course);
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
      </Form.Group>

      <Form.Label>Campus</Form.Label>
      <Form.Control
        name="campus"
        type="text"
        placeholder="Insert Campus"
        ref={register({ required: true })}
      />
      <br />
      <Form.Label>Course</Form.Label>
      <Form.Control
        name="course"
        type="text"
        placeholder="Insert your Course"
        ref={register({ required: true })}
      />
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
});
