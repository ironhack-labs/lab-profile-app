import {Route, Redirect} from 'react-router-dom'
import React from 'react'

const protectedRoute = ({
    component: Component,
    user,
    callback,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
            if (user) {
                return <Component {...props} loggedInUser={user} callback={callback}/>
            } else {
                return <Redirect
                    to={{
                    pathname: '/login',
                    state: {
                        from: props.location
                    }
                }}/>
            }
        }}/>
    )
}
export default protectedRoute;
