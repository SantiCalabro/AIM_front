import {
  GET_ALL_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_ID,
  TRANSLATE,
  FILTER_SEARCH,
  FILTER_TYPE,
  CLEAR_FILTERED,
  CLEAR_PRODUCT,
} from "../actions/actionNames";
const initialState = {
  allProducts: [],
  category: [],
  product: {},
  filteredProducts: [],
  language: "ESP",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: {},
      };
    case CLEAR_FILTERED:
      return {
        ...state,
        filteredProducts: [],
      };
    case TRANSLATE:
      return {
        ...state,
        language: action.payload,
      };
    case FILTER_TYPE:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        category: action.payload,
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
