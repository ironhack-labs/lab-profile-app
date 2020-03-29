import React from "react";
import { BackgroundCard, MainContainer, Content } from "./styles";

const MainLayout = ({ children }) => {
  console.log(children);
  return (
    <MainContainer>
      <BackgroundCard>
        <Content>{children}</Content>
      </BackgroundCard>
    </MainContainer>
  );
};

export default MainLayout;
