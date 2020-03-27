import React from "react";
import { ButtonContainer } from "./styles";

const AuthButton = ({ color, text, link, position }) => {
  return (
    <ButtonContainer position={position} to={() => link} color={color}>
      <div>{text}</div>
    </ButtonContainer>
  );
};

export default AuthButton;
