import React from 'react';
import {Link} from 'react-router-dom';

const Button = ({name, type, className}) => (
  <div className='button-wraper'>
    <Link to='/login' className={className} type={type}>{name}</Link>
  </div>
)

export default Button;