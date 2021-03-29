 import Axios from "axios";
import { api_url } from "../../helpers/api_url";

export const fetchCategoriesAction = () => {
  return (dispatch) => {
    Axios.get(`${api_url}/products/categories`)
      .then((res) => {
        dispatch({
          type: "FETCH_CATEGORIES",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchProductsAction = (hargamax, hargamin) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_START",
    });
    Axios.get(`${api_url}/products/price?hargamax=${hargamax}&hargamin=${hargamin}`)
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
        });
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
// console.log(fetchProductsAction)

export const fetchbyCategoryAction = (id) => {
  console.log(id);
  return (dispatch) => {
    if (id === 1) {
      dispatch(fetchProductsAction());
    } else {
      Axios.get(`${api_url}/products/category/${id}`).then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: res.data,
        });
        
      })
      .catch((err) => console.log(err));
    }
  };
};
