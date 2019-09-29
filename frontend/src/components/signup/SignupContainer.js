import React, { Component } from 'react';
import AUTH_SERVICE from '../../services/auth';

export default class SignupContainer extends Component {
    state = {
        user: {}
    }

    handleInput = (e) => {
        const { user } = this.state;
        const key = e.target.name;
        user[key] = e.target.value;    this.setState({ user });
    }

    onSubmit = (e) => {
        e.preventDefault();
        AUTH_SERVICE.signup(this.state.user)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                <div className="gral-container-wrapper">
                    <div className="gral-container">
                        <h1>Signup</h1>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" name="username" placeholder="Username" onChange={this.handleInput}/>
                            <select name="campus" onChange={this.handleInput}>
                                <option value="Madrid">Madrid</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Miami">Miami</option>
                                <option value="Paris">Paris</option>
                                <option value="Berlin">Berlin</option>
                                <option value="Amsterdam">Amsterdam</option>
                                <option value="México">México</option>
                                <option value="Sao Paulo">Sao Paulo</option>
                            </select>
                            <select name="course" onChange={this.handleInput}>
                                <option value="WebDev">WebDev</option>
                                <option value="UX/UI">UX/UI</option>
                                <option value="Miami">Miami</option>
                                <option value="Data Analytics">Data Analytics</option>
                            </select>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleInput}/>
                            <input type="submit" value="signup"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
