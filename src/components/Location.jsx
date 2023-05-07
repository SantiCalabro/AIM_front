import React from "react";
import L from "../styles/Location.module.css";
import pic from "../assets/Misiones.jpg";
export default function Location() {
  return (
    <div className={L.container}>
      <div className={L.infoContainer}>
        <h2>Dónde estamos</h2>
        <p className={L.central}>
          Nuestra Casa Central está ubicada en la localidad de{" "}
          <strong> San Vicente, Misiones.</strong>
        </p>

        <p className={L.secondParagraph}>
          Además, contamos con seis sucursales más, ubicadas en:
        </p>

        <ul>
          <li>El Soberbio, Misiones</li>
          <li>Bernardo de Yrigoyen, Misiones</li>
          <li>Posadas, Misiones</li>
          <li>La Quiaca, Jujuy</li>
          <li>El Salvador Mazza, Salta</li>
          <li>General Mosconi, Salta</li>
        </ul>
      </div>
      <div className={L.imgContainer}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
}
