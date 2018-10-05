import React, {Component} from 'react'
import { Input, Button } from 'antd'
import toastr from 'toastr'
import axios from 'axios'

class Signup extends Component{

    state = {
        signup:{username:"Amel"},
        loading:false
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {signup} = this.state
        signup[field] = value
        this.setState({signup})
    }

    createUser = (e) => {
        e.preventDefault()
        const {signup} = this.state
        if(signup.password !== signup.password2) {
            return toastr.error('Contraseñas no coiciden')
        }
        axios.post('http://localhost:3000/signup', signup)
        .then(user=>{
            console.log(user)
            toastr.success("Done")
        })
        .catch(e=>toastr.error("No Work"))
    }

    render(){
        const {signup, loading} = this.state
        return(
            <form onSubmit={this.createUser} style={{width:600, margin:"0 auto", padding:20}}>
                <h1>Signup</h1>
                <p>
                    <Input 
                        name="username"
                        type="text"
                        onChange={this.onChange}
                        value={signup.username}
                        placeholder="Tu nombre de usuario" 
                    />
                    
                </p>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={signup.email}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={signup.password}
                    placeholder="Tu Password" 
                    />    
                </p>  
                <p>
                <Input 
                    name="password2"
                    type="password"
                    onChange={this.onChange}
                    value={signup.password2}
                    placeholder="Repite tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
            </form>
        )
    }
}

export default Signup