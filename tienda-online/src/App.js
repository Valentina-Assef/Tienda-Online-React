import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Carrito />
        <Paginas />
      </Router>
    </DataProvider>
  );
}

export default App;