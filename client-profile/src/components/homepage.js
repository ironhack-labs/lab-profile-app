import React, { Component } from "react";
import '../App.css';
import Button from './button'
import axios from 'axios';


import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <h1>IronProfile</h1>
                <p>Today we'll create an app with authorization, adding some cool styles !</p>
                <Button label='Login' link='/login'></Button>
                <Button label='Signup' link='/signup'></Button>
             {this.props.children}
            </div>
        )
    }
}

export default Homepage;