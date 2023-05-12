import {
  GET_ALL_PRODUCTS,
  GET_DETAIL,
  FILTER_CATEGORY,
  FILTER_ID,
  TRANSLATE,
  FILTER_SEARCH,
} from "../actions/actionNames";
const initialState = {
  detail: [],
  allProducts: [],
  category: [],
  product: {},
  filteredProducts: [],
  language: "ESP",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case TRANSLATE:
      return {
        ...state,
        language: action.payload,
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case FILTER_ID:
      return {
        ...state,
        product: action.payload,
      };
    case FILTER_SEARCH:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
