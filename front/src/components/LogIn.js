import React, { Component } from "react";
import styled from "styled-components";
import { MyContext } from "../context";

const LogInTag = styled.form``;
export default class LogIn extends Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push("/profile");
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <LogInTag
            onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push("/profile");
              });
            }}
          >
            <div>
              <input
                type="text"
                name="username"
                onChange={e => context.handleInput(e, "loginForm")}
                value={context.loginForm.username}
              />
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "loginForm")}
                value={context.loginForm.password}
              />
            </div>
            <div>
              <div>
                <h2>Hello!</h2>
                <h3>Awesome to have you at IronProfile again!</h3>
              </div>
              <div>
                <p>
                  If you signup, you agree with all our terms and conditions
                  where we can do whatever we want with the data!
                </p>
                <button type="submit">Log In</button>
              </div>
            </div>
          </LogInTag>
        )}
      </MyContext.Consumer>
    );
  }
}
LogIn.contextType = MyContext;
