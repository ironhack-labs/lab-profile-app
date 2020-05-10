import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../Auth/AuthProvider';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { current } = useContext(AuthContext)
	return (
		<Route 
			{...rest}
			render={ props => 
				current
					? (<Component {...props} />)
					: (<Redirect to="/login" />)
			}
		/>
	)
}

export default ProtectedRoute;

//Todo refactor