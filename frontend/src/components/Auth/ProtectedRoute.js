import React, { useContext, useLayoutEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../../UserContext'
import AuthService from '../AuthService';


const service = new AuthService()

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { user, setUser } = useContext(UserContext)
	useLayoutEffect(()=> {
    console.log('I am about to render!');
    if (user === null) {
      service
        .loggedin()
        .then(user => setUser(user))
        .catch(error => setUser(false))
    }
	},[]);
	
	console.log(user)
	return (
		<Route 
			{...rest}
			render={(props) => {
				return user
					? <Component {...props} /> 
					: <Redirect to="/login" />
			}}
		/>
	)
}

export default ProtectedRoute;

//Todo refactor