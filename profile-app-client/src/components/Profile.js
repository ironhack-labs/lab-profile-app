import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      course: "",
      campus: "",
      avatarUrl: null
    };
  }

  handleFileUpload = event => {
    console.log("change, fichier sélectionné", event.target.files[0]); //event.target fait référence au champ input du DOM

    let formdata = new FormData();
    formdata.append("image", event.target.files[0]);

    axios
      .post("https://api.imgur.com/3/upload", formdata, {
        headers: {
          Authorization: "Client-ID e55c150228234b5"
        }
      })
      .then(response => {
        console.log("image uploadée sur imgur!");

        this.setState({
          avatarUrl: response.data.data.link
        });
      })
      .catch(err => console.log("errfefieufheiufhefuih", err));
  };

  //TODO: dynamiser la page de profil
  render() {
    // if (loggedIn) {
    return (
      <div>
        <h1>Profile</h1>
        <p>ceci est la page de profil de {this.props.user.username}</p>
        <img src={this.state.avatarUrl} alt="profile-face" />

        <form>
          <input type="file" onChange={this.handleFileUpload} />
        </form>
      </div>
    );
  }
}
// }

export default Profile;
