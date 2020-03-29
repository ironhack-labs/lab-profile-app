import React, { forwardRef } from "react";
import { InputContainer } from "./styles";

const AuthInput = forwardRef(({ text, label, type }, ref) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{text}</label>
      <input type={type} ref={ref} />
    </InputContainer>
  );
});

export default AuthInput;
