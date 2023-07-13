import React, { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
import { ProductoItem } from "../componentes/ProductoItem";

export const ListaProductos = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <> {/* Esto ayuda a que no retorne un elemento padre, solo retornara hijos */}
      <h1 className="title">Productos</h1>
      <div className="lista-productos">
        {
          productos.map(producto => (
            <ProductoItem 
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            />
          ))
        }
      </div>
    </>
  );
};