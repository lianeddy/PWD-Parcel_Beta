import Axios from "axios";
import { api_url } from "../../helpers";

const url = `${api_url}/products`;

export const fetchProductsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "API_PRODUCT_START",
    });
    try {
      const res = await Axios.get(url);
      dispatch({
        type: "API_PRODUCT_FILL",
        payload: res.data,
      });
      dispatch({
        type: "API_PRODUCT_SUCCESS",
      });
    } catch (err) {
      dispatch({
        type: "API_PRODUCT_FAILED",
        payload: err.message,
      });
    }
  };
};

export const deleteProductsAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: "API_PRODUCT_START",
    });
    Axios.delete(`${url}/${id}`)
      .then((res) => {
        dispatch(fetchProductsAction());
        dispatch({
          type: "API_PRODUCT_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "API_PRODUCT_FAILED",
          payload: err.message,
        });
      });
  };
};

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
    Axios.get(
      `${api_url}/products/price?hargamax=${hargamax}&hargamin=${hargamin}`
    )
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
      Axios.get(`${api_url}/products/category/${id}`)
        .then((res) => {
          dispatch({
            type: "FETCH_PRODUCTS",
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
  };
};
