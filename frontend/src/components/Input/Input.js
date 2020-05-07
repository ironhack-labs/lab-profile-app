import React from 'react';

import './Input.scss';

const Input = ({name, type, children, handleInputChange, value}) => 
    <>
        <label>{children}</label> 
        <input onChange={(e) => handleInputChange(e, 'login')} type={type} name={name} id={`#{name}`} value={value}/>
    </>

export default Input;