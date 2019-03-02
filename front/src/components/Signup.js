import React from "react"
import axios from "axios"

class Signup extends React.Component {
  state = {
    newUser: {},
    errors: {}
  }

  handleChange = e => {
    let { newUser, errors } = this.state
    newUser[e.target.name] = e.target.value
    //validate
    errors = {}
    if (newUser.password !== newUser.password2) errors.password = "no coinciden"
    this.setState({ newUser, errors })
  }

  sendToServer = () => {
    let { newUser } = this.state
    let url = "http://localhost:3000/auth/signup"
    axios
      .post(url, newUser)
      .then(res => {
        console.log("Nuevo usuario ? ", res)
        this.props.history.push("/login")
      })
      .catch(e => console.log(e))
  }

  render() {
    const { errors } = this.state
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
          placeholder="password"
          name="password"
          type="password"
        />
        <br />
        <input
          onChange={this.handleChange}
          placeholder="password2"
          name="password2"
          type="password"
        />
        <select name="campus">
          <option value="Barcelona">Barcelona</option>
          <option value="Miami">Miami</option>
          <option value="Berlin">Berlin</option>
          <option value="Madrid">Madrid</option>
          <option value="Sao Paulo">Berlin</option>
          <option value="Paris">Madrid</option>
        </select>
        <select name="course">
          <option value="WebDev">WebDev</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Berlin">Data Analytics</option>
        </select>
        <p style={{ color: "red" }}>{errors.password}</p>
        <button onClick={this.sendToServer}>Registrarse</button>
      </div>
    )
  }
}

export default Signup
