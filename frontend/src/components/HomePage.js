import { Link } from 'react-router-dom' 
import React, { Component } from 'react';
import { MyContext } from '../context';

export default class HomePage extends Component {

  render() {
    return (
      <div className="columns is-centered">
        <div className="column box ironBox is-10">
          <div className="columns iron-height100">
            <div className="column is-7 iron-cover ironHome">
              <div className="column">
                  <h2 className="title is-4">IronProfile</h2>
                  <p>Today we will create an app with authoritation, adding some cool styles!</p>
              </div>
              <div className="column ironHome ironHome-buttons">
                  <Link className="button is-primary" to={'/signup'}>Sign up</Link>
                  <Link className="button is-primary" to={'/login'}>Log in</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.contextType = MyContext;