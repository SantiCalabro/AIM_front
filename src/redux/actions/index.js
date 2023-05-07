import axios from "axios";
import {
  GET_DETAIL,
  GET_ALL_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_ID,
  FILTER_SEARCH,
} from "./actionNames";

const URL = "http://localhost:3001";

export const get_detail = payload => {
  return { type: GET_DETAIL, payload };
};

export const getAllProducts = () => {
  return function (dispatch) {
    axios
      .get(`${URL}/products`)
      .then(res => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: res.data,
        });
      })
      .catch(e => {
        throw new Error();
      });
  };
};

export const filterCategory = category => {
  return function (dispatch) {
    axios
      .get(`${URL}/products/${category}`)
      .then(res => {
        dispatch({
          type: FILTER_CATEGORY,
          payload: res.data,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const filterById = id => {
  return function (dispatch) {
    axios
      .get(`${URL}/products/filter/${id}`)
      .then(res => {
        dispatch({
          type: FILTER_ID,
          payload: res.data,
        });
      })
      .catch(e => {
        throw new Error();
      });
  };
};
export const filterBySearchbar = search => {
  if (search.length && search.length !== 1) {
    return function (dispatch) {
      axios
        .get(`${URL}/products/filter/?search=${search}`)
        .then(res => {
          dispatch({
            type: FILTER_SEARCH,
            payload: res.data,
          });
        })
        .catch(e => {
          throw new Error();
        });
    };
  } else {
    return function (dispatch) {
      axios
        .get(`${URL}/products`)
        .then(res => {
          dispatch({
            type: FILTER_SEARCH,
            payload: res.data,
          });
        })
        .catch(e => {
          throw new Error();
        });
    };
  }
};
