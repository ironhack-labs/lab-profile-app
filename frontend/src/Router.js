import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Edit from "./components/Edit";


const Router = () => (
	<BrowserRouter>
		<Switch>
            <Route exact path='/' component={Home}/>
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/edit" component={Edit} />
		</Switch>
	</BrowserRouter>
);
export default Router;