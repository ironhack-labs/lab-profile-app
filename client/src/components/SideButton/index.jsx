import React from "react";
import { SideButtonContainer } from "./styles";
import Button from "../Button";

const SideButton = ({ disclaimer, buttonText, link }) => {
  return (
    <SideButtonContainer>
      <p>{disclaimer}</p>
      <Button color="white" link={link} text={buttonText} position="0" />
    </SideButtonContainer>
  );
};

export default SideButton;
