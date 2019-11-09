import React from "react";
import ProjectList from "./components/ProjectList";
import Signup from "./components/Signup";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    loggedInUser: this.props.user
  };

  updateUserHandler = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/projects" component={ProjectList}></Route> */}
          <Route
            path="/signup"
            render={() => <Signup updateUser={this.updateUserHandler}></Signup>}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
