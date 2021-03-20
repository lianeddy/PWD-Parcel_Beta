import {
  API_CART
} from "../types";

const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_CART:
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};
