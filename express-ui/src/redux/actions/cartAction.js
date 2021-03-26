import Axios from "axios";
import { api_url } from "../../helpers/index";
import Swal from "sweetalert2";

export const fetchCartAction = (userId) => {
  return (dispatch) => {
    Axios.get(`${api_url}/cart?userID=${userId}`)
      .then((res) => {
        dispatch({
          type: "FETCH_CART",
          payload: res.data,
        });
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
        Swal.fire({
          position: "top-end",
          title: "Success!",
          text: "Added to cart",
          icon: "success",
          timer: 1500,
        });
        dispatch({
          type: "ADD_TO_CART",
        });
        dispatch(getCartByIdAction(data.userID));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "bottom-end",
          title: "Failed",
          text: "Something went wrong",
          icon: "error",
          timer: 2000,
        });
      });
  };
};

export const getCartByIdAction = (id) => {
  return (dispatch) => {
    Axios.get(`${api_url}/cart?userID=${id}`)
      .then(({ data }) => {
        dispatch({
          type: "FETCH_CART",
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
        Swal.fire({
          title: "Success!",
          text: "Quantity Edited!",
          icon: "success",
          confirmButtomText: "Cool",
        });
        dispatch(getCartByIdAction(data.userID));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const checkOutAction = (data) => {
  return (dispatch) => {
    Axios.post(`${api_url}/transaction`, data)
      .then((res) => {
        data.items.forEach((val) => {
          Axios.get(`${api_url}/products/${val.productID}`).then(
            ({ data: { stock } }) => {
              Axios.patch(`${api_url}/products/${val.productID}`, {
                stock: stock - val.qty,
              });
            }
          );
        });
        data.items.forEach((val) => {
          Axios.delete(`${api_url}/cart/${val.id}`).then((res) => {
            console.log("deleted id", val.id);
          });
        });
        Swal.fire({
          title: "Success!",
          text: "Thank you!",
          icon: "success",
          timer: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Failed",
          text: "Something went wrong",
          icon: "error",
          timer: 2000,
        });
      });
  };
};
