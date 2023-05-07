import React from "react";
import P from "../styles/ProductCategories.module.css";
import texture from "../assets/GrassTexture.jpg";
import Herbicida from "../assets/Herbicida.svg";
import Agroalimento from "../assets/Coadyuvante.svg";
import Alimentos from "../assets/Alimentos.svg";
import Semilla from "../assets/Semilla.svg";
import Insecticida from "../assets/Insecticida.svg";
import { Link } from "react-router-dom";
export default function ProductsCategories() {
  return (
    <div className={P.container}>
      <div className={P.btnContainer}>
        <h2>Nuestros productos</h2>
        <div className={P.allIcons}>
          <Link to="/agroquimicos">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Herbicida} alt="" />
              </div>
              <span>Agroquímicos</span>
            </div>
          </Link>
          <Link to="/alimentos">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Alimentos} alt="" />
              </div>
              <span>Alimentos</span>
            </div>
          </Link>
          <Link
            to="/agroalimentos"
            id="agroalimentos"
            onClick={e => handleClick(e)}
          >
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Agroalimento} alt="" />
              </div>
              <span>Agroalimentos</span>
            </div>
          </Link>

          <Link to="/semillas">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Semilla} alt="" />
              </div>
              <span>Semillas</span>
            </div>
          </Link>
        </div>
      </div>
      <img className={P.texture} src={texture} alt="" />
    </div>
  );
}
