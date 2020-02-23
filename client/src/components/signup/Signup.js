import React, { Component } from 'react'
import authService from '../../services/authService'

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        campus: '',
        course: ''
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    handleSubmit = async () => {
        const res = await authService.signup(this.state).catch(err => alert('User exists'))
        if( res && res.data ) return this.props.history.push('/login')
    }

    render() {
        return (
            <div className="container">
                <section>
                    <h2>Sign up</h2>
                    <form>
                        <label>Username</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange}/>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <label>Campus</label>
                        <input name="campus" value={this.state.campus} onChange={this.handleChange}/>
                        <label>Course</label>
                        <input name="course" value={this.state.course} onChange={this.handleChange}/>
                    </form>
                </section>
                <section>
                    <div>
                        <h3>Hello</h3>
                        <p>Welcome to IronProfile</p>
                    </div>
                    <div>
                        <p>If you signup, you agree with all our terms and conditions.</p>
                        <button onClick={this.handleSubmit}>Create the Account</button>
                    </div>
                </section>   
            </div>
        )
    }
}
