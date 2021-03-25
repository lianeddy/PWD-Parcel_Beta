import Axios from 'axios'
import {api_url} from '../../helpers'

const url = `${api_url}/products`

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
