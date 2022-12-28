import React, { useEffect } from "react";
import { Dashboard } from "./components/Dashboard";
import { ScreenContextProvider } from "./context";
import { sendNotification } from "./services/ipconfig";
import { GlobalStyle } from "./styles/global";

function App() {

  useEffect(() => {
    sendNotification('https://api.hgbrasil.com/geoip?format=json-cors&key=39653c2a&address=remote&fields=only_results,city,region,country_name,continent&precision=false')
  },[])

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
