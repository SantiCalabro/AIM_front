import React from "react";
import Header from "../assets/HomeHeader.jpg";
import ResponsiveHeader from "../assets/HomeHeaderResp.jpg";
import H from "../styles/HomeHeader.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div className={H.container}>
      {/* <div className={H.headerTitle}>
        <p>
          Soluciones efectivas para tus cultivos, con productos de buena calidad
        </p>
      </div>
      <div className={H.imgContainer}>
        <img className={H.header} src={Header} alt="" />
        <img className={H.respHeader} src={ResponsiveHeader} alt="" />
      </div> */}

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Header} alt="First slide" />
          <Carousel.Caption>
            <h3 className={H.headerTitle}>
              Soluciones efectivas para tus cultivos, con productos de buena
              calidad
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/contacto">
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/dcbswyqrd/image/upload/v1683072891/carrusel_w3tei5.jpg"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>

      <div className={H.welcomeMsg}>
        <p>
          Bienvenidos a Agroalimentos e insumos del Mercosur. Somos líderes en
          el mercado y ofrecemos una amplia variedad de productos para el agro.
        </p>
      </div>
    </div>
  );
}
