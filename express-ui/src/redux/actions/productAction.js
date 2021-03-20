import axios from "axios";
import { api_url } from "../../helpers";

export const fetchProductByIdAction = (id) => {
    return (dispatch) => {
      axios.get(`${api_url}/product/${id}`)
        .then((res) => {
          dispatch({
            type: "FETCH_BY_ID",
            payload: res.data[0],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
  // export const getCartByIdAction = (id) => {
  //   return (dispatch) => {
  //     Axios.get(`${api_url}/cart?userID=${id}`)
  //       .then(({ data }) => {
  //         dispatch({
  //           type: API_CART,
  //           payload: data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // };