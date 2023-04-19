import React from "react";
import HomeHeader from "../components/HomeHeader";
import ProductsCategories from "../components/ProductsCategories";
import Location from "../components/Location";
import H from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={H.container}>
      <div className={H.header}>
        <HomeHeader />
      </div>
      <div className={H.products}>
        <ProductsCategories />
      </div>
      <div className={H.location}>
        <Location />
      </div>
    </div>
  );
}
