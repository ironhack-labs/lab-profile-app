import React from "react";
import styled from "styled-components";
import { MyContext } from "../context";

const SignUpTag = styled.form``;
export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpTag
          onSubmit={e => {
            context.handleSignup(e);
            props.history.push("/login");
          }}
        >
          <div>
            <input
              type="text"
              name="username"
              onChange={e => context.handleInput(e, "formSignup")}
              value={context.formSignup.username}
            />
            <input
              type="password"
              name="password"
              onChange={e => context.handleInput(e, "formSignup")}
              value={context.formSignup.password}
            />
            <input
              type="text"
              name="campus"
              onChange={e => context.handleInput(e, "formSignup")}
              value={context.formSignup.campus}
            />
            <input
              type="text"
              name="course"
              onChange={e => context.handleInput(e, "formSignup")}
              value={context.formSignup.course}
            />
          </div>
          <div>
            <div>
              <h2>Hello!</h2>
              <h3>Wellcome to IronProfile!</h3>
            </div>
            <div>
              <p>
                If you sign up you agree with all our terms and conditions where
                we can do whatever we want with the data!
              </p>
            </div>

            <button type="submit">Create the Account</button>
          </div>
        </SignUpTag>
      )}
    </MyContext.Consumer>
  );
}
