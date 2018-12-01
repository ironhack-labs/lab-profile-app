import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {edit} from '../service'



class Home extends Component {

    cambiar =()=>{
        const user =  localStorage.getItem("user");
        let auth = {username: "ble", password: "ble"}
        console.log(user)
        edit(auth,this.props.history, JSON.parse(user));

    }
    render(){
        return(
            <div> 
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Sign up</button></Link>
                <div>
                    <form onSubmit={this.cambiar}></form>
                </div>
            </div>
        )
    }
}

export default Home;