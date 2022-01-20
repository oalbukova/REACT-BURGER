import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_FAILED = "SET_USER_FAILED";

export function register(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: SET_USER_REQUEST,
    });
    fetch(`${API_URL}auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: SET_USER_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SET_USER_SUCCESS,
            user: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_USER_FAILED,
        });
        dispatch({
          type: SET_ERR,
          text: err,
        });
        dispatch({
          type: OPEN_ERR_MODAL,
        });
      });
  };
}
