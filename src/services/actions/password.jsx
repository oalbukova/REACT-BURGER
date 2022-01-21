import { OPEN_ERR_MODAL, SET_ERR } from "./modal";

// utils
import { API_URL } from "../../utils/constants";

export const SET_FORGOT_PASSWORD_REQUEST = "SET_FORGOT_PASSWORD_REQUEST";
export const SET_FORGOT_PASSWORD_SUCCESS = "SET_FORGOT_PASSWORD_SUCCESS";
export const SET_FORGOT_PASSWORD_FAILED = "SET_FORGOT_PASSWORD_FAILED";

export const SET_RESET_PASSWORD_REQUEST = "SET_FORGOT_PASSWORD_REQUEST";
export const SET_RESET_PASSWORD_SUCCESS = "SET_FORGOT_PASSWORD_SUCCESS";
export const SET_RESET_PASSWORD_FAILED = "SET_FORGOT_PASSWORD_FAILED";

export function forgotPassword(email) {
  return function (dispatch) {
    dispatch({
      type: SET_FORGOT_PASSWORD_REQUEST,
    });
    fetch(`${API_URL}password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: SET_FORGOT_PASSWORD_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SET_FORGOT_PASSWORD_SUCCESS,
            forgot_password: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_FORGOT_PASSWORD_FAILED,
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

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: SET_RESET_PASSWORD_REQUEST,
    });
    fetch(`${API_URL}password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, token }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch({
            type: SET_RESET_PASSWORD_FAILED,
          });
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        if (data.success) {
          dispatch({
            type: SET_RESET_PASSWORD_SUCCESS,
            reset_password: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_RESET_PASSWORD_FAILED,
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