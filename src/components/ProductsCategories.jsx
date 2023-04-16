import React from "react";
import P from "../styles/ProductCategories.module.css";
import texture from "../assets/GrassTexture.jpg";
import Herbicida from "../assets/Herbicida.svg";
import Fungicida from "../assets/Fungicida.svg";
import Semilla from "../assets/Semilla.svg";
import Insecticida from "../assets/Insecticida.svg";
import Coadyuvante from "../assets/Coadyuvante.svg";
import { Link } from "react-router-dom";
export default function ProductsCategories() {
  return (
    <div className={P.container}>
      <div className={P.btnContainer}>
        <h2>Nuestros productos</h2>
        <div className={P.allIcons}>
          <Link to="/herbicidas">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Herbicida} alt="" />
              </div>
              <span>Herbicidas</span>
            </div>
          </Link>
          <Link to="/insecticidas">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Insecticida} alt="" />
              </div>
              <span>Insecticidas</span>
            </div>
          </Link>
          <Link to="/fungicidas">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Fungicida} alt="" />
              </div>
              <span>Fungicidas</span>
            </div>
          </Link>
          <Link to="/coadyuvantes">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Coadyuvante} alt="" />
              </div>
              <span>Coadyuvantes</span>
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
      <img src={texture} alt="" />
    </div>
  );
}
