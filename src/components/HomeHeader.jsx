import React from "react";
import Header from "../assets/HomeHeader.jpg";
import H from "../styles/HomeHeader.module.css";
export default function HomeHeader() {
  return (
    <div className={H.container}>
      <div className={H.headerTitle}>
        <p>
          Soluciones efectivas para tus cultivos, con productos de buena calidad
        </p>
      </div>
      <div className={H.imgContainer}>
        <img src={Header} alt="" />
      </div>
      <div className={H.welcomeMsg}>
        <p>
          Bienvenidos a Agroalimentos e insumos del Mercosur. Somos líderes en
          el mercado y ofrecemos una amplia variedad de productos para el agro.
        </p>
      </div>
    </div>
  );
}
