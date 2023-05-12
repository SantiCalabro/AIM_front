import React from "react";
import L from "../styles/Location.module.css";
import pic from "../assets/Misiones.jpg";
import { useSelector } from "react-redux";
export default function Location() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const POR = lang === "POR";
  const ENG = lang === "ENG";
  return (
    <div className={L.container}>
      <div className={L.infoContainer}>
        <h2>
          {ESP ? "Dónde estamos" : ENG ? "Where to find us" : "Onde estamos"}
        </h2>
        <p className={L.central}>
          {ESP
            ? "Nuestra Casa Central está ubicada en la localidad de San Vicente, Misiones."
            : ENG
            ? "Our main office is located in San Vicente, Misiones."
            : "A nossa sede está situada em San Vicente, Misiones."}
        </p>

        <p className={L.secondParagraph}>
          {ESP
            ? "Además, contamos con seis sucursales más, ubicadas en:"
            : ENG
            ? "We also have six more branches, located in:"
            : "Além disso, dispomos de mais seis sucursais, situadas em:"}
        </p>

        <ul>
          <li>El Soberbio, Misiones</li>
          <li>Bernardo de Yrigoyen, Misiones</li>
          <li>Posadas, Misiones</li>
          <li>La Quiaca, Jujuy</li>
          <li>Salvador Mazza, Salta</li>
          <li>General Mosconi, Salta</li>
        </ul>
      </div>
      <div className={L.imgContainer}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
}
