import { useNavigate } from "react-router-dom";
import D from "../styles/Detail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { filterById } from "../redux/actions";
import React from "react";
import { useState } from "react";
export default function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    dispatch(filterById(params.id));
  }, [dispatch]);

  const product = useSelector(state => state.product);

  return (
    <div className={D.container}>
      <div className={D.picContainer}>
        <img src={product.image} alt="" />
      </div>
      <div className={D.infoContainer}>
        <div className={D.detailBox}>
          <div className={D.back} onClick={() => navigate(-1)}>
            <svg
              className={D.backBtn}
              clipRule="evenodd"
              fillRule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                fill-rule="nonzero"
              />
            </svg>
            <label>Volver</label>
          </div>
          <div className={D.description}>
            <h1 className={D.title}>{product.name}</h1>
            <p>{product.description}</p>
          </div>
          <div className={D.switchContainer}>
            {product.principle !== null && (
              <h5>Principio activo: {product.principle}</h5>
            )}
            {product.presentation !== null && (
              <h5>Presentación: {product.presentation}</h5>
            )}
            {product.crop !== null && <h5>Cultivo: {product.crop}</h5>}
          </div>
        </div>
      </div>
    </div>
  );
}
