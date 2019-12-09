import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Content from "./components/Content";

class App extends Component {
  state = {
    currentlyLoggedIn: null
  };

  fetchAllData = async () => {
    try {
      let currentUser = await axios.get(
        "http://localhost:5000/api/get-user-info",
        { withCredentials: true }
      );
      this.setState({
        currentlyLoggedInUser: currentUser.data,
        ready: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  signup = (username, password, campus, course) => {
    axios
      .post(
        "http://localhost:5000/api/signup",
        {
          username: username,
          password: password,
          campus: campus,
          course: course
        },
        { withCredentials: true }
      )
      .then(response => {
        let user = response.data;
        this.setState({ currentlyLoggedInUser: user });
      })
      .catch(err => {
        console.log(err);
        this.setState({ currentlyLoggedInUser: null });
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} user={this.state.currentlyLoggedInUser} />
            )}
          />
          <Route
            path="/content"
            component={Content}
            user={this.state.currentlyLoggedInUser}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
