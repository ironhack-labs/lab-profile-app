import React, {Component} from 'react'
import {Input, Button} from 'antd'
import axios from 'axios'
import toastr from 'toastr'

const url = 'http://localhost:3000/login'

class Login extends Component{

    state = {
        auth:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            console.log(res)
            toastr.success("Te logueate!")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            const bonito = this.props.history
            bonito.push('/profile')

        })
        .catch(e=>{
            toastr.error("no quiero tu cochinada")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }

    render(){
        const {auth, loading} = this.state
        return(
            <form onSubmit={this.login} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Inicia sesión mijo</h2>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={auth.email}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={auth.password}
                    placeholder="Tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
            </form>
        )
    }
}

export default Login