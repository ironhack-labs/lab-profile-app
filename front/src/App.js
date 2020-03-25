import React from "react";
import { Container } from "../public/styles/Common.styles";
import { ApiContextProvider } from "./context/Context";

export const App = () => (
  <ApiContextProvider>
    <Container>
      <h1>IronNutritions</h1>
    </Container>
  </ApiContextProvider>
);
