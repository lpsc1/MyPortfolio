import React from "react";
import { Dashboard } from "./components/Dashboard";
import { ScreenContextProvider } from "./context";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <ScreenContextProvider>
        <Dashboard />
        <GlobalStyle />
      </ScreenContextProvider>
    </>
  );
}

export default App;
