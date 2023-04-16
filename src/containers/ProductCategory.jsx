import React from "react";
import { useParams } from "react-router-dom";
import P from "../styles/ProductCategory.module.css";
export default function ProductCategory() {
  const params = useParams();
  console.log(params);
  return <div className={P.container}>{params.category}</div>;
}