import React from "react";
import P from "../styles/Products.module.css";
import header from "../assets/ProductsHeader.jpg";

export default function Products() {
  return (
    <div className={P.container}>
      <h3>Soluciones efectivas para tus cultivos</h3>
      <div className={P.header}>
        <img src={header} alt="" />
      </div>
    </div>
  );
}
