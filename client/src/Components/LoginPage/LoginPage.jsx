import React, { Component } from 'react'
import Button from "../Button/Button"
import { Link } from 'react-router-dom';
import "./LoginPage.css"

export default class LoginPage extends Component {
    render() {
        return (
            <div className="card">
                <form>
                    <div>
                        <h1 className="title">Log In</h1>
                    </div>
                    <div className="form">
                        <div className="formleftt">
                            <label>Username</label>
                            <input type="username" />
                            <label>Password</label>
                            <input type="password" />
                            <p>
                                If you havent account yet, you can create your account <Link to="/signup">here</Link>
                            </p>
                        </div>
                        <div className="formright">
                            <div className="formrighttop">
                                <h1>Hello!!</h1>
                            </div>
                            <div className="formrightbottom">
                                <p>If you signup...</p>
                                <Button>Log In</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
