import React from "react";
import E from "../styles/ErrorPath.module.css";
import { Link } from "react-router-dom";
export default function ErrorPath() {
  return (
    <div className={E.container}>
      <div className={E.error}>
        <h1>Error 404</h1>
        <p>Ruta desconocida</p>

        <Link to="/">
          <div className={E.button}>Regresar al inicio</div>{" "}
        </Link>
      </div>
    </div>
  );
}
