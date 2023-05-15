import React from "react";
import loading from "../assets/loading.gif";
import L from "../styles/Loading.module.css";
import { useSelector } from "react-redux";

export default function Loading() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const ENG = lang === "ENG";
  return (
    <div className={L.loading}>
      <div className={L.loadingAnimation}>
        <h2>
          {ESP
            ? "... Cargando ... "
            : ENG
            ? "... Loading ... "
            : "... Carregando ... "}
        </h2>
        <img src={loading} alt="" />
      </div>
    </div>
  );
}
