import React from "react"
import axios from "axios"
let url = "http://localhost:3000/auth/upload"
const serviceUpload = axios.create({ url, withCredentials: true })

class Signup extends React.Component {
  state = {
    errors: {},
    image: {}
  }
  handleChange = e => {
    this.setState({ image: e.target.files[0] })
  }
  handleSubmit = () => {
    let { image } = this.state
    this.sendToServer(image, url)
      .then(res => {
        console.log(res)
        this.setState({ image })
      })
      .catch(e => console.log(e))
  }
  sendToServer = (file, url) => {
    const formData = new FormData()
    formData.append("image", file)
    return serviceUpload
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        // this.props.history.push("/edit")
        return res
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="page">
        <input type="file" accept="image/*" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Subir foto </button>
      </div>
    )
  }
}

export default Signup
