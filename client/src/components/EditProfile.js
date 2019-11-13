import React, { Component } from "react";

class EditProfile extends Component {
  render() {
    return (
      <div>
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

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
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
              <option value={this.state.campus}>{this.state.course}</option>
              <option value="WebDev">WebDev</option>
              <option value="UX/UI">UX/UI</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
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
              <option value={this.state.campus}>{this.state.campus}</option>
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
            Update Details
          </button>
          <div className="text-center"></div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
