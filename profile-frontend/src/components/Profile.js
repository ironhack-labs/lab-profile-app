import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            image: this.props.state.loggedInUser.image,

        };
    }

    handleFileUpLoad = (event) => {
        console.log("file upload...")
        const uploadData = new FormData()
        uploadData.append("image", event.target.files[0])
        axios.post('http://localhost:3001/api/upload', uploadData) //sobe a foto
            .then(response => {
                console.log("file uploaded sucessfully", response.data)
                axios.put('http://localhost:3001/api/edit', { image: response.data.path }, { withCredentials: true })//atualiza foto
                    .then(() => {
                        console.log("resposta: ", response.data)
                        this.setState({ //atualiza foto no state do componente. 
                            image: response.data.path
                        })
                        //atualizar o estado no componente pai para que conheça nova foto
                        //obter objeto do usuário atual => this.props.user
                        //criar cópia do objeto
                        //mudar imagem da cópia 
                        //chamar callback que vai atualizar estado no pai
                        const copyUser = {...this.props.user}
                        console.log('user:', this.props.user)
                        copyUser.image = response.data.path
                        console.log('Copyuser:', copyUser)
                        this.props.callback(copyUser)
                    })
            })
    }

    // savePhoto = (event) => {
    //     //axios faz um put no /edit, no backend
    //     //envia a path da imagem (this.state.image)
    //     axios.put('http://localhost:3001/api/edit', { image: this.state.image }, { withCredentials: true })
    //         .then(response => {
    //             console.log("resposta: ", response.data)

    //         })
    // }

    render() {
        return (
            <div className="mainDiv container">
                <div className="row profile-div">
                    <div className="col-7 profile-info">
                        <h3 className="mb-5">Profile</h3>
                        <p className="mb-0">Username</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.username}</h4>
                        <p className="mb-0">Campus</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.campus}</h4>
                        <p className="mb-0">Course</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.course}</h4>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </div>
                    <div className="col info-div-photo">
                        <img className="profilePhoto" src={this.state.image} alt={this.props.user.username} />
                        <div>
                            <input
                                type="file"
                                name="image"
                                onChange={this.handleFileUpLoad}
                            />
                        </div>
                        {/* <button onClick={this.savePhoto} className="btn btn-signup">Change Photo</button> */}
                        <p className="text">The user is able to upload a new profile photo using NodeJs and Multer uploader</p>
                    </div>
                </div>
            </div>
        )
    }
}
