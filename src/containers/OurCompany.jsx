import React from "react";
import plant from "../assets/planting.jpg";
import plantResp from "../assets/plantando responsive.png";
import O from "../styles/OurCompany.module.css";
import { useSelector } from "react-redux";
export default function OurCompany() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const ENG = lang === "ENG";
  return (
    <div className={O.container}>
      <div className={O.infoContainer}>
        <h1>{ESP ? "Nosotros" : ENG ? "About us" : "Nós"}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          dolores voluptatibus ipsam, asperiores alias cum magni illum ratione
          aliquid nisi, eos ut. Sapiente recusandae dolorem similique fugiat
          soluta, autem nulla.
        </p>
      </div>
      <div className={O.imgContainer}>
        <img src={plant} alt="" className={O.desktopPic} />
        <img src={plantResp} alt="" className={O.responsivePic} />
      </div>
    </div>
  );
}
