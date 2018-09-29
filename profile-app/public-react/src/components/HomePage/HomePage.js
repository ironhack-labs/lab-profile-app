import React from 'react';
import AppButton from '../UI/AppButton/AppButton';
import './HomePage.css';
import { Link } from 'react-router-dom';


const homePage = (props) => (
    <div className="home-wrapper">
        <div className="info">
            <h1>IronProfile</h1>
            <p className="main-text">Today we will create cool app with authorization, adding some cool styles.</p>
            <AppButton bg="green"><Link className="nav-btn" to="/signup">Sign up</Link></AppButton>
            <AppButton bg="green"><Link className="nav-btn" to="/login">Log in</Link></AppButton>
        </div>
    </div>
);

export default homePage;