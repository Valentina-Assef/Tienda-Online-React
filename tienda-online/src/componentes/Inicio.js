import React from "react";
import Portada from "../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1>INICIO</h1>
      </Link>
      <Link to="/productos">
        <h1>PRODUCTOS</h1>
      </Link>
      <img className="portada" src={ Portada } alt="" />
    </div>
  );
};