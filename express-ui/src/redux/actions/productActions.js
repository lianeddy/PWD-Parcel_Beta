import Axios from 'axios'
import {api_url} from '../../helpers'

const url = `${api_url}/products`

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
  }
}

export const deleteProductsAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: "API_PRODUCT_START",
    })
    Axios.delete(`${url}/${id}`)
    .then((res) => {
      dispatch(fetchProductsAction())
      dispatch({
        type: "API_PRODUCT_SUCCESS",
      })
    }).catch ((err) => {
      dispatch({
        type: "API_PRODUCT_FAILED",
        payload: err.message,
      })
    })
  }
}
