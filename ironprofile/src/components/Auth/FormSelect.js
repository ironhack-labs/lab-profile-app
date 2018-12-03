import React from 'react';

const FormSelect = ({children, name, value, onChange}) => (
  <div>
    <label>{ children }</label>
    <select
      name         = { name }
      onChange     = { onChange }
      defaultValue = { value[0] }
      required>
      <option disabled>Select One</option>
      { value.map( (item, index) => (
        <option
          key   = { index }
          value = { item }>
        { item }</option>
      )) }
    </select>
  </div>
);

export default FormSelect;