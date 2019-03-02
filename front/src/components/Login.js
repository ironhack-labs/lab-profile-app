import React from "react"
import axios from "axios"

class Login extends React.Component {
  state = {
    auth: {}
  }

  handleChange = e => {
    let { auth } = this.state
    auth[e.target.name] = e.target.value
    console.log(auth)
    this.setState({ auth })
  }

  sendToServer = () => {
    let { auth } = this.state
    let url = "http://localhost:3000/auth/login"
    axios
      .post(url, auth, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.props.history.push("/")
      })
      .catch(e => {
        alert("nanai")
      })
  }

  render() {
    return (
      <div className="page">
        <input
          onChange={this.handleChange}
          placeholder="username"
          name="username"
          type="text"
        />
        <br />
        <input
          onChange={this.handleChange}
          placeholder="tu password"
          name="password"
          type="password"
        />
        <br />
        <button onClick={this.sendToServer}>Iniciar</button>
      </div>
    )
  }
}

export default Login
