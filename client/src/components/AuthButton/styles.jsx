import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
  width: 200px;
  background: ${props => (props.color === "green" ? "#c0e3be" : "#fff")};
  color: "#3B3D40";
  border-radius: 10px;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  left: 70px;
  bottom: ${props => props.position}px;
  font-weight: 500;
  font-size: 0.8rem;
`;
