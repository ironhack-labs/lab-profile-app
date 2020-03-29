import React from "react";
import { SideHeaderStyle } from "./styles";

const SideHeader = ({ title, subtitle }) => {
  return (
    <SideHeaderStyle>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </SideHeaderStyle>
  );
};

export default SideHeader;
