import React from "react";
import { useParams, Link } from "react-router-dom";
import P from "../styles/ProductCategory.module.css";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { filterCategory } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";

export default function ProductCategory() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);
  const params = useParams();
  const [headerPic, setHeaderPic] = useState("");
  const navigate = useNavigate();
  const categories = [
    {
      category: "agroquimicos",
      pic: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681946380/herbicida_jtbtif.jpg",
    },

    {
      category: "alimentos",
      pic: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1683077025/aceite_fwlqgw.jpg",
    },
    {
      category: "agroalimentos",
      pic: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681946373/Coadyuvantes_f6okht.jpg",
    },
    {
      category: "semillas",
      pic: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681946370/Semillas_ayctq8.jpg",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = category.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(category.length / itemsPerPage);
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % category.length;
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    setItemOffset(0);
  }, [category]);

  React.useEffect(() => {
    dispatch(filterCategory(params.category));
    let category = categories.find(el => el.category === params.category);
    setHeaderPic(category.pic);
  }, []);

  return (
    <>
      {currentItems.length > 0 ? (
        <div className={P.container}>
          <div className={P.header}>
            <h3>
              {params.category === "agroquimicos"
                ? "Agroquímicos"
                : `${params.category
                    .charAt(0)
                    .toUpperCase()}${params.category.slice(1)}`}
            </h3>
            <div className={P.headerContainer}>
              <img src={headerPic} alt="" />
            </div>
          </div>
          <div className={P.back} onClick={() => navigate(-1)}>
            <svg
              className={P.backBtn}
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                fillRule="nonzero"
              />
            </svg>
            <label>Volver</label>
          </div>
          <div className={P.cardsContainer}>
            {currentItems &&
              currentItems.map((el, i) => (
                <div key={i}>
                  <Link
                    onClick={() => filterDetail(el.id)}
                    to={`/detail/${el.id}`}
                  >
                    <Card name={el.name} pic={el.image} />
                  </Link>
                </div>
              ))}
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
