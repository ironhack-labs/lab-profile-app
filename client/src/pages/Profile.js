import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { logout } from "../lib/redux/actions";

export const ProfilePage = connect(state => ({ user: state.user }))(
  ({ user, dispatch, history }) => (
    <React.Fragment>
      {user ? (
        <React.Fragment>
          <p className="title">Profile</p>
          <p>Username</p>
          <p>{user.username}</p>
          <p>Campus</p>
          <p>{user.campus}</p>
          <p>Course</p>
          <p>{user.course}</p>

          <button
            className="button is-danger"
            onClick={() =>
              AuthAPI.logout().then(() => {
                dispatch(logout());
                history.push("/");
              })
            }
          >
            Logout
          </button>
        </React.Fragment>
      ) : (
        <div>No user logged</div>
      )}
    </React.Fragment>
  )
);
