import React from "react";
import P from "../styles/ProductCategories.module.css";
import { useSelector, useDispatch } from "react-redux";
import Herbicida from "../assets/Herbicida.svg";
import Agroalimento from "../assets/Coadyuvante.svg";
import Alimentos from "../assets/Alimentos.svg";
import Semilla from "../assets/Semilla.svg";
import { Link } from "react-router-dom";
import { filterCategory } from "../redux/actions";

export default function ProductsCategories() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const ENG = lang === "ENG";
  const dispatch = useDispatch();

  const item = [
    {
      spanish: "Agroquímicos",
      port: "Agroquímicos",
      english: "Agrochemicals",
      pic: Herbicida,
      category: "agroquimicos",
    },
    {
      spanish: "Alimentos",
      port: "Alimentos",
      english: "Food",
      pic: Alimentos,
      category: "alimentos",
    },
    {
      spanish: "Agroalimentos",
      port: "Agro-alimentar",
      english: "Agrifood",
      pic: Agroalimento,
      category: "agroalimentos",
    },
    {
      spanish: "Semillas",
      port: "Sementes",
      english: "Seeds",
      pic: Semilla,
      category: "semillas",
    },
  ];
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
          {item.map((el, i) => (
            <Link
              key={i}
              onClick={() => filterCategory(el.category)}
              to={`/category/${el.category}`}
            >
              <div className={P.icon}>
                <div className={P.imgCont}>
                  <img src={el.pic} alt="" />
                </div>
                <span>{ESP ? el.spanish : ENG ? el.english : el.port}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
