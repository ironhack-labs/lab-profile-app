import React, { Component } from "react";
import AuthService from "./auth-service";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      image: "",
      course: "",
      campus: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, image, course, campus } = this.state;
    this.service
      .signup(username, password, image, course, campus)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          image: "",
          course: "",
          campus: ""
        });
        // this.props.getUser(response)
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Welcome!</h3>
                      <form onSubmit={this.handleFormSubmit}>
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            onChange={e => this.handleChange(e)}
                            value={this.state.username}
                            required
                            autofocus
                          />
                          <label for="inputEmail">Username</label>
                        </div>

                        <div className="form-label-group">
                          <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={e => this.handleChange(e)}
                            value={this.state.password}
                            required
                          />
                          <label for="inputPassword">Password</label>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              for="inputGroupSelect01"
                            >
                              Course
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            name="course"
                            onChange={e => this.handleChange(e)}
                            value={this.state.campus}
                            required
                          >
                            <option value={this.state.campus}>
                              {this.state.course}
                            </option>
                            <option value="WebDev">WebDev</option>
                            <option value="UX/UI">UX/UI</option>
                            <option value="Data Analytics">
                              Data Analytics
                            </option>
                          </select>
                        </div>

                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text"
                              for="inputGroupSelect01"
                            >
                              Campus
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            name="campus"
                            onChange={e => this.handleChange(e)}
                            value={this.state.course}
                            required
                          >
                            <option value={this.state.campus}>
                              {this.state.campus}
                            </option>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Miami">Miami</option>
                            <option value="Paris">Paris</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Sau Paulo">Sao Paulo</option>
                            <option value="Lisbon">Lisbon</option>
                          </select>
                        </div>
                        <button
                          className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                          type="submit"
                        >
                          Sign up
                        </button>
                        <div className="text-center"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
