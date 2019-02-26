import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Profile = ({ user }) => {
  return (
    <Route

      render={props => {
        if (user) {
          return (
            <div>
              <h3>Welcome back, {user.username}!!!</h3>
              <ul>
                <li>Campus: {user.campus}</li>
                <li>Course: {user.course}</li>
              </ul>
            </div>
          )
        }
        else return <Redirect to={{ pathname: '/' }} />
      }}
    />
  )
}

export default Profile;