import React from 'react';

const FormButton = ({className ,name, type}) => (
  <button className={className} type={type}>{name}</button>
  )

export default FormButton;