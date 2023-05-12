import React from "react";
import Header from "../assets/HomeHeader.jpg";
import H from "../styles/HomeHeader.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeHeader() {
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const POR = lang === "POR";
  const ENG = lang === "ENG";
  return (
    <div className={H.container}>
      <Carousel>
        <Carousel.Item>
          <div className={H.responsiveCarousel}>
            <img className="d-block w-100" src={Header} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3 className={H.headerTitle}>
              {ESP
                ? "Soluciones efectivas para tus cultivos, con productos de buena calidad"
                : ENG
                ? "Effective solutions for your crops, with good quality products."
                : "Soluções eficazes para as suas culturas, com produtos de boa qualidade."}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/contacto">
            <div className={H.responsiveCarousel}>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dcbswyqrd/image/upload/v1683747115/Banner_carrusel_iiksvk.jpg"
                alt="Second slide"
              />
            </div>
          </Link>
          <Carousel.Caption>
            <h2 className={H.headerTitle}>
              {ESP
                ? "¿Necesitas contactarte con nosotros?"
                : ENG
                ? "Need to get in touch with us?"
                : "Precisa de nos contactar?"}
            </h2>
            <p>
              {ESP
                ? "Clickeá acá y accedé a la mejor atención personalizada"
                : ENG
                ? "Click here and access to the best personalized attention."
                : "Clique aqui e aceda ao melhor atendimento personalizado"}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className={H.welcomeMsg}>
        <p>
          {ESP
            ? "Bienvenidos a Agroalimentos e insumos del Mercosur. Somos líderes en el mercado y ofrecemos una amplia variedad de productos para el agro."
            : ENG
            ? "Welcome to Agroalimentos e Insumos del Mercosur. We are leaders in the market and we offer a wide variety of products for agriculture."
            : "Bem-vindo à Agroalimentos e insumos do Mercosul. Somos líderes no mercado e oferecemos uma grande variedade de produtos para a agricultura."}
        </p>
      </div>
    </div>
  );
}
