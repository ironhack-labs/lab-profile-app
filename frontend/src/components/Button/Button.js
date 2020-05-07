import React from 'react'
import './Button.scss'

const Button = ({children, btnClass}) => 
    <button className={`button ${btnClass}`}>{{children}}</button>;

export default Button;
