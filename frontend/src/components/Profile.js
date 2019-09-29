import React, { Component } from 'react';
import { MyContext } from '../context';

class Profile extends Component {

  state = {
    user: {
      username: '',
      course: ''
    }
  };

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userData = this.context.state.loggedUser
    this.setState( userData )
  }

  render() {
    const user = this.state
    console.log(user)

    return (
      <div className="columns is-centered">
        <div className="column box ironBox is-10">
          <p className="mesaage is-success"></p>
          <form className="columns iron-height100" onSubmit={this.onSubmit}>
            <div className="column is-7 iron-cover ironHome">
              <h1 className="title is-2">Profile</h1>
              <div className="field">
                <label className="label">Name:</label>
                <p>{ user.username }</p>
              </div>
              <div className="field">
                <label className="label">Course:</label>
                <p>{ user.campus }</p>
              </div>
              <div className="field">
                <label className="label">Course:</label>
                <p>{ user.course }</p>
              </div>
              <div className="field">
                <input className="button is-danger is-fullwidth" onClick={this.context.logOut} type="submit" value="Log out" />

              </div>
            </div>
            <div className="column iron-cover">
              <div className="column iron-between">
                <div className="columns ironForms ironForms-buttons">
                  <h2 className="title is-4">Hello</h2>
                  <div className="ironUser icon">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="columns">
                  <input className="button is-primary is-fullwidth" type="submit" value="Edit photo" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Profile.contextType = MyContext;

export default Profile;