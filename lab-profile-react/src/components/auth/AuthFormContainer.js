import React, { Component } from "react";
import ImageCard from "../common/ImageCard";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { signup, login } from "../../services/authService";
import { notification, pwdValidator } from "../../utils/utils";

class AuthFormContainer extends Component {
  state = {
    auth: {
      username: "",
      password: "",
      campus: "",
      course: ""
    }
  };

  handleChange = e => {
    const field = e.target.name;
    const { auth } = this.state;
    auth[field] = e.target.value;
    this.setState({ auth });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { auth } = this.state;
    const { pathname } = this.props.location;
    if (auth.username === "")
      return notification("Must provide a valid username");
    if (auth.password === "" || !pwdValidator(auth.password))
      return notification("Must provide a valid password");
    if (auth.campus === "" && pathname === "/signup")
      return notification("Must choose a campus");
    if (auth.course === "" && pathname === "/signup")
      return notification("Must choose a course");
    pathname === "/signup" ? this.onSignup() : this.onLogin();
  };

  onSignup = () => {
    let { auth } = this.state;
    signup(auth)
      .then(({ user, token }) => {
        // seteamos token en local storage
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        auth = {
          username: "",
          password: "",
          campus: "",
          course: ""
        };
        this.setState({ auth });
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
        return notification(error.message);
      });
  };

  onLogin = () => {
    let { auth } = this.state;
    login(auth)
      .then(({ user, token }) => {
        // seteamos token en local storage
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));
        auth = {
          username: "",
          password: "",
          campus: "",
          course: ""
        };
        this.setState({ auth });
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
        return notification(error.message);
      });
  };

  render() {
    const { auth } = this.state;
    const { pathname } = this.props.location;
    return (
      <ImageCard>
        {pathname === "/signup" ? (
          <React.Fragment>
            <SignUpForm handleChange={this.handleChange} {...auth} />
            <div>
              <div className="uk-margin-medium-left">
                <h2 className="uk-margin-remove">Hello!!</h2>
                <h3 className="uk-margin-remove">Welcome to IronProfile</h3>
              </div>
              <div className="uk-container uk-margin-xlarge-top uk-margin-medium-left">
                <div className="uk-width-1-1 uk-text-justify">
                  <p>
                    If you sign up, you agree with all our terms and conditions
                    where we can do whatever we want with the data!
                  </p>
                </div>
                <div className="uk-margin">
                  <button
                    onClick={this.handleSubmit}
                    className="uk-button button-secondary uk-width-1-1 uk-text-bold"
                  >
                    Create the account
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LoginForm handleChange={this.handleChange} {...auth} />
            <div>
              <div className="uk-margin-medium-left">
                <h2 className="uk-margin-remove">Hello!!</h2>
                <h3 className="uk-margin-remove">
                  Awesome to have an IronProfile again!
                </h3>
              </div>
              <div className="uk-container uk-margin-xlarge-top uk-margin-medium-left">
                <div className="uk-width-1-1 uk-text-justify">
                  <p>
                    If you sign up, you agree with all our terms and conditions
                    where we can do whatever we want with the data!
                  </p>
                </div>
                <div className="uk-margin">
                  <button
                    onClick={this.handleSubmit}
                    className="uk-button button-secondary uk-width-1-1 uk-text-bold"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </ImageCard>
    );
  }
}

export default AuthFormContainer;
