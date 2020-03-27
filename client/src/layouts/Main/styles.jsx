import styled from "styled-components";
import authCard from "../../../public/images/oval-bg.png";

export const MainContainer = styled.div`
  background: #dcecdb;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundCard = styled.div`
  position: absolute;
  background-image: url(${authCard});
  width: 717px;
  height: 458px;
`;
