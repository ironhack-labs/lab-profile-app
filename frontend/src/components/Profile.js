import React, { Component } from 'react';
import { MyContext } from '../context';

export default class Profile extends Component {
  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/auth/login');
  }

  render() {
    return (
      <div>
      <div className="main-box">
          <div className="card">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title">Profile</h1>
                <p className="subtitle is-marginless	">Username</p>
                <p>{this.context.state.loggedUser.username}</p>
                <p className="subtitle is-marginless	">Campus</p>
                <p>{this.context.state.loggedUser.campus}</p>
                <p className="subtitle is-marginless	">Course</p>
                <p>{this.context.state.loggedUser.course}</p>
                <button className="button is-light is-fullwidth" onClick={this.context.logOut}>Log out</button>  
              </div>
              <div className="column is-half is-centered">
                <figure class="img-profile  image is-128x128">
                  <img class="is-rounded" src={this.context.state.loggedUser.image} alt="user"/>
                </figure>
                <button className="button is-light is-fullwidth">Edit Photo</button>
                <p>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.contextType = MyContext;