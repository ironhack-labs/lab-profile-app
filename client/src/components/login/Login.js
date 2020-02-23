import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import authService from '../../services/authService'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = ({target: {name, value}}) => this.setState({[name]: value})

    handleSubmit = async () => {
        const res = await authService.login(this.state).catch(err => alert('Username or Password incorrect.'))
        if( res && res.data ) return this.props.history.push('/profile')
    }

    
    render() {
        return (
            <div className="container">
                <section>
                    <h2>Log in</h2>
                    <form>
                        <label>Username</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange}/>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </form>
                    <p>If you dont have a account yet, you can create your account <Link to="/signup">here</Link></p>
                </section>
                <section>
                    <div>
                        <h3>Hello</h3>
                        <p>Awesome to have at IronProfile again.</p>
                    </div>
                    <div>
                        <p>If you signup, you agree with all our terms and conditions.</p>
                        <button onClick={this.handleSubmit}>Log in</button>
                    </div>
                </section>   
            </div>
        )
    }
}
