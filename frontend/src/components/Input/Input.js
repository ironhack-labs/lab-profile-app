import React from 'react';

import './Input.scss';

const Input = ({name, type, children, handleInputChange, value, auth}) => 
    <>
        <label className="label">{children}</label> 
        <input 
        onChange={(e) => handleInputChange(e, auth)} 
        type={type} 
        name={name} 
        id={`${name}`} 
        value={value}
        autoComplete="no"
        className="input"
        />
    </>

export default Input;