import React from "react";
import img01 from "../images/img01.jpg"

export const ListaProductos = () => {
  return (
    <> {/* Esto ayuda a que no retorne un elemento padre, solo retornara hijos */}
      <h1 className="title">Productos</h1>
      <div className="lista-productos">
        <div className="producto">
          <a href="/">
            <div className="item-producto">
              <img src={img01} alt=""/>
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="/" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="/">
            <div className="item-producto">
              <img src={img01} alt=""/>
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="/" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="/">
            <div className="item-producto">
              <img src={img01} alt=""/>
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="/" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="/">
            <div className="item-producto">
              <img src={img01} alt=""/>
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="/" className="btn">Vista</a>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};