import React from "react";
import HomeHeader from "../components/HomeHeader";
import ProductsCategories from "../components/ProductsCategories";
import Location from "../components/Location";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <ProductsCategories />
      <Location />
    </div>
  );
}
