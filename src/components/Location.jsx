import React from "react";
import L from "../styles/Location.module.css";
import pic from "../assets/Misiones.jpg";
export default function Location() {
  return (
    <div className={L.container}>
      <div className={L.infoContainer}>
        <h2>Dónde estamos</h2>
        <p>Nuestra Casa Central está ubicada en la localidad</p>
        <p>
          de <strong> San Vicente, Misiones.</strong>
        </p>
        <p className={L.secondParagraph}>
          Además, contamos con tres sucursales ubicadas en:
        </p>

        <ul>
          <li>El Soberbio, Misiones</li>
          <li>Posadas, Misiones</li>
          <li>Clorinda, Formosa</li>
        </ul>
      </div>
      <div className={L.imgContainer}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
}
