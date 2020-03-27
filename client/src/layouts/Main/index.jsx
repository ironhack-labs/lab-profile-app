import React from "react";
import { BackgroundCard, MainContainer } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <BackgroundCard>{children}</BackgroundCard>
    </MainContainer>
  );
};

export default MainLayout;
