import Axios from "axios";
import { api_url } from "../../helpers";

// export const fetchTransactionAction = () => {
//   return (dispatch) => {
//     Axios.get(`${api_url}/historyuser`)
//       .then((res) => {
//         dispatch({
//           type: "FETCH_TRANSACTION",
//           payload: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };

export const fetchTransactionByIdAction = (id) => {
    return (dispatch) => {
      Axios.get(`${api_url}/transaction/${id}`)
        .then((res) => {
          dispatch({
            type: "FETCH_TRANSACTION_BY_ID",
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  
