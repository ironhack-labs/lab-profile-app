import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { logout } from "../lib/redux/actions";

export const ProfilePage = connect(state => ({ user: state.user }))(
  ({ user, dispatch, history }) => (
    <React.Fragment>
      <div className="section">
        <div className="container">
          <div className="columns is-mobile box">
            <div className="column is-three-fifths">
              {user ? (
                <React.Fragment>
                  <p className="title">Profile</p>

                  <p className="subtitle is-5">Username</p>
                  <p className="subtitle is-6">{user.username}</p>

                  <p className="subtitle is-5">Campus</p>
                  <p className="subtitle is-6">{user.campus}</p>
                  <p className="subtitle is-5">Course</p>
                  <p className="subtitle is-6">{user.course}</p>

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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
);
