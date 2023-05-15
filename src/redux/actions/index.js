import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_ID,
  FILTER_SEARCH,
  TRANSLATE,
  FILTER_TYPE,
  CLEAR_PRODUCT,
  CLEAR_FILTERED,
} from "./actionNames";

const URL = "http://localhost:3001";

export const translate = payload => {
  return { type: TRANSLATE, payload };
};
export const clearProduct = () => {
  return { type: CLEAR_PRODUCT };
};
export const clearFiltered = () => {
  return { type: CLEAR_FILTERED };
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

export const filterType = type => {
  return function (dispatch) {
    axios
      .get(`${URL}/products/${type}`)
      .then(res => {
        dispatch({
          type: FILTER_TYPE,
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
          dispatch({
            type: FILTER_SEARCH,
            payload: [],
          });
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
