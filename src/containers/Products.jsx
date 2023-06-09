import React from "react";
import P from "../styles/Products.module.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";
import { useState } from "react";
import {
  filterById,
  getAllProducts,
  filterBySearchbar,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filteredProducts);
  const lang = useSelector(state => state.language);
  const ESP = lang === "ESP";
  const ENG = lang === "ENG";

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = filtered.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    setItemOffset(0);
  }, [filtered]);

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const filterDetail = id => {
    dispatch(filterById(id));
  };

  const handleChange = e => {
    if (e.target.value !== "Categorías") {
      dispatch(filterBySearchbar(e.target.value));
    } else {
      dispatch(getAllProducts());
    }
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <div className={P.container}>
          <div className={P.header}>
            <div className={P.headerTitle}>
              <h3>
                {ESP
                  ? "Soluciones efectivas para tus cultivos"
                  : ENG
                  ? "Effective solutions for your crops"
                  : "Soluções eficazes para as suas culturas"}
              </h3>
            </div>
            <img
              src="https://res.cloudinary.com/dcbswyqrd/image/upload/v1682120141/agroquimicos_mzrggv.jpg"
              alt=""
            />
          </div>
          <div className={P.title}>
            <h1>
              {ESP
                ? "Nuestros productos"
                : ENG
                ? "Our products"
                : "Os nossos produtos"}
            </h1>
          </div>
          <div className={P.filterContainer}>
            <div className={P.filters}>
              <select name="" id="" onChange={e => handleChange(e)}>
                <option value="Categorías">
                  {ESP ? "Categorías" : ENG ? "Categories" : "Categorias"}
                </option>
                <option value="herbicida">
                  {ESP ? "Herbicidas" : ENG ? "Herbicides" : "Herbicidas"}
                </option>
                <option value="insecticida">Insecticidas</option>
                <option value="fungicida">Fungicidas</option>
                <option value="coadyuvante">Coadyuvantes</option>
                <option value="semilla">Semillas</option>
                <option value="alimento">Alimentos</option>
                <option value="agroalimento">Agroalimentos</option>
              </select>
              <div className={P.searchbar}>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                </svg>
                <input
                  type="text"
                  placeholder={
                    ESP
                      ? "Busca un producto o principio activo"
                      : ENG
                      ? "Search for a product or active ingredient"
                      : "Procurar um produto ou ingrediente activo"
                  }
                  onChange={e => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className={P.cardsContainer}>
            {currentItems.length > 0 ? (
              currentItems.map((el, i) => (
                <div key={i} onClick={() => filterDetail(el.id)}>
                  <Link to={`/detail/${el.id}`}>
                    <Card name={el.name} pic={el.image} />
                  </Link>
                </div>
              ))
            ) : (
              <div className={P.missingProduct}>
                <h4>
                  {ESP
                    ? "No se encontraron productos"
                    : ENG
                    ? "No products found"
                    : "Nenhum produto encontrado"}
                </h4>
                <button onClick={() => dispatch(getAllProducts())}>
                  {ESP
                    ? "Reiniciar búsqueda"
                    : ENG
                    ? "Reset search"
                    : "Repor a pesquisa"}
                </button>
              </div>
            )}
          </div>

          <div className={P.pagination}>
            <ReactPaginate
              className={P.paginate}
              activeClassName={P.active}
              previousClassName={P.previousNext}
              previousLinkClassName={P.previous}
              nextClassName={P.previousNext}
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={4}
              pageCount={pageCount}
              previousLabel="<<"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
