import React from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <label forHtml="username">Username</label>
                    <input type="text" name="username" placeholder="Username"></input>
                    <br></br>
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password" placeholder="Your password" />
                    <button>Create account</button>
                    <p class="account-message">
                        Do you already have an account?
                    <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        )
    }
}