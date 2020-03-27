import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/ui/theme";
import { Section } from "./components/ui/styled";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Section>
          <Home />
        </Section>
      </ThemeProvider>
    </div>
  );
}

export default App;
