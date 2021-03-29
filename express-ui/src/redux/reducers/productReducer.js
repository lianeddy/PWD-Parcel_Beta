const INITIAL_STATE = {
  categories: [],
  productList: [],
  productById: {},
  loading: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "API_PRODUCT_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "API_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "API_PRODUCT_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "API_PRODUCT_FILL":
      return {
        ...state,
        productList: action.payload,
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "NULLIFY_ERROR":
      return {
        ...state,
        error: "",
      };
    case "FETCH_BY_ID":
      return {
        ...state,
        productById: action.payload,
      };
    default:
      return state;
  }
};
