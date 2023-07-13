import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Paginas />
      </Router>
    </DataProvider>
  );
}

export default App;