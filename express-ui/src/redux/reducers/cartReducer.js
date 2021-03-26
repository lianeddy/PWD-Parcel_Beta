import { API_CART } from "../types";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_CART":
      return {
        cart: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        payload: action.payload,
      };
    case "CHECKOUT":
      return INITIAL_STATE;

    default:
      return state;
  }
};
