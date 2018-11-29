import React from 'react';

const Button = ({name, type}) => (
  <div>
    <button type={type}>{name}</button>
  </div>
)

export default Button;