import Axios from 'axios'
import {api_url} from "../../helpers/index"
import { getCartByIdAction } from './cartAction';


const url = api_url + "/users"

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: "NULLIFY_ERROR" })
    dispatch({ type: "API_USER_START" });
    try {
      const response = await Axios.post(`${url}/login`, data);
      const {
        id,
        username,
        email,
        roleID,
        verified,
        token,
      } = response.data;
      localStorage.getItem("token", token);
      dispatch(getCartByIdAction(data.userID))
      console.log(data.userID)
      dispatch({
        type: "LOGIN",
        payload: { id, username, email, roleID, verified },
      });
      dispatch({
        type: "API_USER_SUCCESS",
      });
    } catch (err) {
      dispatch({
        type: "API_USER_FAILED",
        payload: err.message,
      });
    }
  };
};

// export const keepLoginAction = (id) => {
//   return (dispatch) => {
//     Axios.get(`${url}/keep-login/${id}`)
//     .then((res) => {
//       dispatch({
//         type: "LOGIN",
//         payload: res.data,
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }
// }

export const keepLoginAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "API_USER_START" });
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await Axios.post(`${url}/keep-login`, {}, headers);
      const { id, username, email, roleID, verified } = response.data;
      dispatch({
        type: "LOGIN",
        payload: { id, username, email, roleID, verified },
      });
      dispatch({
        type: "API_USER_SUCCESS",
      });
    } catch (err) {
      dispatch({
        type: "API_USER_SUCCESS",
      });
    }
  };
};

export const changePassAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: "API_USER_START" });
    const headers = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      await Axios.post(
        `${url}/change-pass`,
        { password: data.password },
        headers
      );
      alert("Password anda berhasil diganti");
      dispatch({
        type: "API_USER_SUCCESS",
      });
    } catch (err) {
      dispatch({
        type: "API_USER_FAILED",
        payload: err.message,
      });
    }
  };
};

export const sendEmailChangeAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: "API_USER_START" });
    try {
      await Axios.post(`${url}/change-email`, data);
      alert(`Email ganti password telah dikirim ke ${data.email}`);
      dispatch({
        type: "API_USER_SUCCESS",
      });
    } catch (err) {
      dispatch({
        type: "API_USER_FAILED",
        payload: err.message,
      });
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
  };
};
