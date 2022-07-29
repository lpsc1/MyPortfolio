import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Dashboard/Header";
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
