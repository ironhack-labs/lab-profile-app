import React from "react";
import { HeaderStyle } from "./styles";

const Header = ({ title, subtitle = null }) => {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </HeaderStyle>
  );
};

export default Header;
