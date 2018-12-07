import React, { Component } from 'react'
import Button from "../Button/Button"
import { Link } from 'react-router-dom';
import "./SignupPage.css"

export default class SignupPage extends Component {
    render() {
        return (
            <div className="card">
                <form>
                    <div>
                        <h1 className="title">Sign Up</h1>
                    </div>
                    <div className="form">
                        <div className="formleft">
                            <label>Username</label>
                            <input type="username" />
                            <label>Password</label>
                            <input type="password" />
                            <label>Campus</label>
                            <input type="campus" />
                            <label>Course</label>
                            <input type="course" />
                        </div>
                        <div className="formright">
                            <div className="formrighttop">
                                <h1>Hello!!</h1>
                            </div>
                            <div className="formrightbottom">
                                <p>If you signup...</p>
                                <Button>Create the Account</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}