import React, { Component} from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return(
            <div className="button-home">
                <button><Link to='/login'>Login</Link></button>
                <button><Link to='/signup'>Signup</Link></button>
            </div>
        )
    }
}

export default Home;