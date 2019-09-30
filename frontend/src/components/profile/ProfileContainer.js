import React, { Component } from 'react'
import { MyContext } from '../../context';

export default class ProfileContainer extends Component {
    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login');
    }

    componentDidUpdate(){
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <div className="gral-container-wrapper">
                    <div className="gral-container">
                        <h1>Profile</h1>
                        <p>{this.context.state.user.username}</p>
                        <button onClick={this.context.logOut}>Log out</button>
                    </div>
                </div>
            </div>
        )
    }
}

ProfileContainer.contextType = MyContext;