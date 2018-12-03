import React from 'react';

const FormInput = ({children, name, holder, onChange, password, submit, path}) => (
  <div className="form-field">
    {!submit
      ? <label>{ children }</label>
      : null
    }
    {!submit
      ? <input
          type         = { password ? "password" : "text" }
          name         = { name }
          placeholder  = { holder }
          onChange     = { onChange }
          required />
      : <input
          type      = "submit"
          value     = { path === '/signup' ? "Create account" : "Log in" }
          className = "button button-white" />
    }
  </div>
);

export default FormInput;