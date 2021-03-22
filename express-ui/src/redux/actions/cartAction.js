import Axios from "axios";
import { api_url } from "../../helpers";
import swal from "sweetalert2";
import {
    API_CART
  } from "../types";


  
export const getCartByIdAction = (id) => {
    return (dispatch) => {
      Axios.get(`${api_url}/cart?userID=${id}`)
        .then(({ data }) => {
          dispatch({
            type: API_CART,
            payload: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

export const editCartAction = (data) => {
    return (dispatch) => {
      Axios.patch(`${api_url}/cart/${data.id}`, {
        qty: data.qty,
      })
        .then((res) => {
          swal("Success!", "Quantity Edited!", "success");
          dispatch(getCartByIdAction(data.userID));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  

  export const addToCartAction = (data) => {
    return (dispatch) => {
      Axios.post(`${api_url}/cart`, data)
        .then((res) => {
          console.log("data masuk");
          // swal("Success!", "Product added to cart!", "success");
          swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Added to cart!',
          });
          dispatch({
            type: "ADD_TO_CART",
          });
          dispatch(getCartByIdAction(data.userID));
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Something went wrong",
            "Please contact an Administrator",
            "error"
          );
        });
    };
  };