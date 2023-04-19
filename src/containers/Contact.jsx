import React from "react";
import ContactPic from "../assets/Contacto.jpg";
import C from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={C.container}>
      <h1>Contactanos</h1>
      <div className={C.headerContainer}>
        <img src={ContactPic} alt="" />
      </div>
      <div className={C.infoContainer}>
        <div className={C.mapContainer}></div>
        <div className={C.formContainer}>
          <form action="">
            <div className={C.form}>
              <div className={C.name}>
                <label htmlFor="">Nombre</label>
                <span className={C.error}>*Este campo es obligatorio</span>
                <input type="text" />
              </div>
              <div className={C.mail}>
                <label htmlFor="">Correo electrónico</label>
                <span className={C.error}>*Este campo es obligatorio</span>
                <input type="text" />
              </div>
              <div className={C.message}>
                <label htmlFor="">Mensaje</label>
                <span className={C.error}>*Este campo es obligatorio</span>
                <textarea></textarea>
              </div>
              <button className={C.active}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
