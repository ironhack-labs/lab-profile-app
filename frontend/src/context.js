import React, { Component, createContext } from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      username: "",
      campus: "",
      password: "",
      course: ""
    },
    loginForm: {
      username: "",
      password: ""
    },
    user: {},
    file: {},
    uploaded:false
  };
  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user });
          Swal.fire(`Welcome back ${data.user.name} `, "", "success");
        })
        .catch(err => console.log(err));
    }
  }

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a });
  };

  handleSignup = async e => {
    e.preventDefault();
    const { data } = await MY_SERVICE.signup(this.state.formSignup);
    this.setState( { user: data.user } )
    Swal.fire(`Welcome ${data.user.name}`, "User created", "success");
  };

  handleLogin = (e, cb) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.loginForm)
    .then(({ data }) => {
      this.setState({ loggedUser: true, user: data.user })
      cb()
    })
    .catch(err => {
      Swal.fire(`Quien sabe que paso`, '☠️', 'error')
    });
  };

  handleLogout = async cb => {
    await MY_SERVICE.logout();
    window.localStorage.clear();
    this.setState({ loggedUser: false, user: {} });
    cb();
  };


  handleFile = async (e) => {
    this.setState( {file: e.target.files[0]} )
    console.log(this.state.uploaded)
  }

  handleUpload = async (e) => {
    await this.setState( {file: e.target.files[0], uploaded: !this.state.uploaded } )
    console.log(this.state.uploaded )
    const formData = new FormData();
    formData.append('photo', this.state.file);
    const data = await MY_SERVICE.upload(formData);
    await this.setState( { user: this.state.user, uploaded: !this.state.uploaded } ) 
    console.log(this.state.uploaded )
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleFile: this.handleFile,
          handleUpload: this.handleUpload,
          // user: this.state.user,
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
