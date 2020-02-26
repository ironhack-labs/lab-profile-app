import React,{ Component } from 'react'
import AUTH_SERVICE from '../../services/auth'

class Signup extends Component{
    
    state = {
        username: '',
        password: '',
        campus: '',
        course: ''
    }


    handleInputs = ({target: {name, value}}) => this.setState({[name]: value})

    handeleSubmit = async () => {
        const response = await AUTH_SERVICE.signup(this.state)
        //console.log(response)
    }

    render(){
        return(
            <>
                {/* <h1>Holi</h1> */}

                <h1>Signup</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleInputs} value={this.state.username} placeholder="Username here"/>
                    <br/>

                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleInputs} value={this.state.password} placeholder="Password Here"/>
                    <br/>

                    <label>Campus</label>
                    <input type="text" name="campus" onChange={this.handleInputs} value={this.state.campus} placeholder="Your Campus"/>
                    <br/>

                    <label>Course</label>
                    <input type="text" name="course" onChange={this.handleInputs} value={this.state.course} placeholder="Your Course"/>
                    <br/>
                </form>
                <h2>Hello</h2>
                <p>Welcome to Ironprofile !!</p>
                <p>If you Signup you agree with all our terms and conditions where we can do whatever we want with the data!!</p>
                <button onClick={this.handeleSubmit} > Create Account </button>

            </>
        )
    }
}

export default Signup