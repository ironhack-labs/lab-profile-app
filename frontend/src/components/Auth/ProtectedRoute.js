import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, image, handleFileChange ,...rest }) =>
		<Route 
			{...rest}
			render={(props) => {
				console.log(user)
				return user
					? <Component {...props} 
						user={user}
						image={image}
						handleFileChange={handleFileChange}
					  /> 
					: <Redirect to="/login" />
			}}
		/>

export default ProtectedRoute;

//Todo refactor