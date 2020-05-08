import React from 'react';

import './Input.scss';

const Input = ({name, type, children, handleInputChange, value, auth}) => 
    <>
        <label>{children}</label> 
        <input 
        onChange={(e) => handleInputChange(e, auth)} 
        type={type} 
        name={name} 
        id={`#{name}`} 
        value={value}
        />
    </>

export default Input;