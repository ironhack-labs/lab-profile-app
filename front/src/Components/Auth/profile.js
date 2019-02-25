import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Profile = ({ component: Component, user, ...rest }) => {
  console.log({ component: Component, user, ...rest })
  console.log({ ...rest })
  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return (
            <div>
              <h3>Hola</h3>
              <Component {...props} loggedInUser={user.username} />
            </div>
          )
        }
        else return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      }}
    />
  )
}

export default Profile;