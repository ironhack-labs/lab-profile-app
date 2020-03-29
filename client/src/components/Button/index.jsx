import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ color, text, link }) => {
  return (
    <ButtonContainer to={() => link} color={color}>
      <div>{text}</div>
    </ButtonContainer>
  );
};

export default Button;
