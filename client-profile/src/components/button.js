import React, { Component } from "react";
import '../App.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Button extends Component {

    render() {
        return (
            <div>
                <button><Link to={this.props.link}>{this.props.label}</Link></button>
            </div>
        )
    }
}

export default Button;