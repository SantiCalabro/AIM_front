import React from "react";
import C from "../styles/Card.module.css";

export default function Card({ name, pic }) {
  return (
    <div className={C.container}>
      <div className={C.picContainer}>
        <img src={pic} alt="" />
      </div>
      <div className={C.name}>
        <h5>{name}</h5>
      </div>
    </div>
  );
}
