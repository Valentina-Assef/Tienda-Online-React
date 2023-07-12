import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Inicio } from "./Inicio";
import { ListaProductos } from "./ListaProductos";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ListaProductos />} />
      </Routes>
    </section>
  );
};