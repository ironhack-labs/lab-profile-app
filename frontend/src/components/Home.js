import React, { Component } from 'react'
import {signupForm, loginForm, upload, editUser} from '../servies'


export default class Home extends Component {
    state = {
        email: '',
        password: '',
        course: '',
        campus: '',
        image: ''
    }

    handleInput = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    signup = async (e) => {
        e.preventDefault()
        const {email, password, course, campus, image} = this.state
        let user = await signupForm({email, password, course, campus, image})
        this.setState(user)
    }

    login = async (e) => {
        e.preventDefault()
        const {email, password} = this.state
        let logged = await loginForm({email, password})
        this.setState(logged)
    }

    handleFile = async (e) => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        let image =  await upload(formData)
        this.setState({ image })
    }

    edit = async (e) => {
        e.preventDefault()
        const {email, course, campus, image} = this.state
        await editUser({email, course, campus, image})
        this.setState(email, course, campus, image)
    }

    render() {
        console.log(this.state)
        return (
            <div className="main">
            <div className="forms">
            <form className="login" onSubmit={this.login}>
                <h2>Login</h2>
                <p>Email</p>
                <input onChange={this.handleInput} value={this.state.email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={this.handleInput} value={this.state.password} type="text" placeholder="password" name="password"></input>
                <button type="submit">login</button>
            </form>
            <form className="login" onSubmit={this.signup}>
                <h2>Signup</h2>
                <p>Email</p>
                <input onChange={this.handleInput} value={this.state.email} type="email" placeholder="email" name="email"></input>
                <p>password</p>
                <input onChange={this.handleInput} value={this.state.password} type="password" placeholder="password" name="password"></input>
                <p>Campus</p>
                <input onChange={this.handleInput} value={this.state.campus} type="text" placeholder="campus" name="campus"></input>
                <p>Course</p>
                <input onChange={this.handleInput} value={this.state.course} type="text" placeholder="course" name="course"></input>
                <input type="file" name="image" onChange={this.handleFile}/>
                <button type="submit">signpu</button>
            </form>
            <form className="login" onSubmit={this.edit}>
                <h2>Edit</h2>
                <p>Email</p>
                <input onChange={this.handleInput} value={this.state.email} type="email" placeholder="email" name="email"></input>
                <p>Campus</p>
                <input onChange={this.handleInput} value={this.state.campus} type="text" placeholder="campus" name="campus"></input>
                <p>Course</p>
                <input onChange={this.handleInput} value={this.state.course} type="text" placeholder="course" name="course"></input>
                <p>Image</p>
                <input type="file" name="image" onChange={this.handleFile}/>
                <button type="submit">save</button>
            </form>
            </div>

            
            <div className="login">
                <h2>Profile</h2>
                {console.log(this.state.image)}
                <p>Photo <img src={this.state.image} alt={this.state.image}/></p>
                <p>Email: {this.state.email}</p>
                <p>Campus: {this.state.campus}</p>
                <p>Course: {this.state.course}</p>
            </div>
            </div>
        )
    }
}
