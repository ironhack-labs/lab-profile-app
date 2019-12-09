import React, { Component } from "react";
import { MyContext } from "../context";
import { Link } from "react-router-dom";
import { LogInTag } from "./styleComponents/styleComponents";

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
            <div className="duo-div">
              <h1>Log In</h1>
              <div className="form-container">
                <tag>Username</tag>
                <input
                  type="text"
                  name="username"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.username}
                />
              </div>

              <div className="form-container">
                <tag>Password</tag>
                <input
                  type="password"
                  name="password"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.password}
                />
              </div>
              <p>
                If you don't jave an account yet, you can create your account{" "}
                <Link to="/signup">here</Link>
              </p>
            </div>
            <div className="duo-div">
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
