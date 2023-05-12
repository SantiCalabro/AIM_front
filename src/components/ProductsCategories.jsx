import React from "react";
import P from "../styles/ProductCategories.module.css";
import { useSelector } from "react-redux";
import Herbicida from "../assets/Herbicida.svg";
import Agroalimento from "../assets/Coadyuvante.svg";
import Alimentos from "../assets/Alimentos.svg";
import Semilla from "../assets/Semilla.svg";
import { Link } from "react-router-dom";
export default function ProductsCategories() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const POR = lang === "POR";
  const ENG = lang === "ENG";
  return (
    <div className={P.container}>
      <div className={P.btnContainer}>
        <h2>
          {ESP
            ? "Nuestros productos"
            : ENG
            ? "Our products"
            : "Os nossos produtos"}
        </h2>
        <div className={P.allIcons}>
          <Link to="/category/agroquimicos">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Herbicida} alt="" />
              </div>
              <span>
                {ESP ? "Agroquímicos" : ENG ? "Agrochemicals" : "Agroquímicos"}
              </span>
            </div>
          </Link>
          <Link to="/category/alimentos">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Alimentos} alt="" />
              </div>
              <span>{ESP ? "Alimentos" : ENG ? "Food" : "Alimentos"}</span>
            </div>
          </Link>
          <Link
            to="/category/agroalimentos"
            id="agroalimentos"
            onClick={e => handleClick(e)}
          >
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Agroalimento} alt="" />
              </div>
              <span>
                {ESP ? "Agrolimentos" : ENG ? "Agrifood" : "Agro-alimentar"}
              </span>
            </div>
          </Link>

          <Link to="/category/semillas">
            <div className={P.icon}>
              <div className={P.imgCont}>
                <img src={Semilla} alt="" />
              </div>
              <span> {ESP ? "Semillas" : ENG ? "Seeds" : "Sementes"}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
